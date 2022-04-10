import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let users = [];
wss.on("connection", function connection(ws) {
  users.push(ws);
  ws.on("message", function message(data) {
    users.forEach((user) => {
      user.send(data.toString());
    });
    console.log(data.toString());
  });

  console.log("Someone new joined");
});
