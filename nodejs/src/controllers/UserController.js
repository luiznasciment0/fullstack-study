const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  },
};
