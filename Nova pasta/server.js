const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = json.Server.default();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(route);

server.listen(port);