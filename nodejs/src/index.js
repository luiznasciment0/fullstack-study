const http = require("http");
const { URL } = require("url");
const routes = require("./routes");

const server = http.createServer((request, response) => {
  const parsedURL = new URL(`http://localhost:3000${request.url}`);
  console.log(
    `Request method: ${request.method} | Endpoint: ${parsedURL.pathname}`
  );

  let { pathname } = parsedURL;
  let id = null;
  const splitEndpoint = pathname.split("/").filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find((routeObject) => {
    return (
      routeObject.endpoint === pathname && routeObject.method === request.method
    );
  });

  if (route) {
    request.query = Object.fromEntries(parsedURL.searchParams);
    request.params = { id };
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${pathname}`);
  }
});

server.listen(3000, () => {
  console.log("Server started at: http://localhost:3000");
});
