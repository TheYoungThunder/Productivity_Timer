import { WebSocketServer } from "ws";
//import * as fs from "fs";

const wss = new WebSocketServer({ port: 8080 });

let users = [];
wss.on("connection", function connection(ws) {
  users.push(ws);
  ws.on("message", function message(data) {
    users.forEach((user) => {
      user.send(data.toString());
    });
  });
  console.log("Someone new joined");
});

setInterval(() => {
  for (let i = 0; i < users.length; i++) {
    // splice (index of start, how many elements to delete after the start)
    users.splice(1, 1);
  }
  console.log("There are", users.length, "users online");
}, 10000);
