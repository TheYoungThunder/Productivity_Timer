import { WebSocketServer } from "ws";
// import * as fs from "fs";
// {
//   "mohamad": [websockets],
//   "bashar": [websockets]

// }
const sessions = [
  { name: "session1", users: [], lastUpdate: 0, typeOfLastEvent: "" },
];

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  //users.push(ws);
  ws.on("message", function message(data) {
    let parsedData = JSON.parse(data);
    let session = sessions.find((s) => {
      return s.name === parsedData?.sessionName;
    });
    let msgType = parsedData?.msgType;
    if (msgType === "join") {
      if (session) {
        session.users.push(ws);
        let msg_obj = {
          msgType: "update",
          lastUpdate: session.lastUpdate,
          typeOfLastEvent: session.typeOfLastEvent,
        };
        ws.send(JSON.stringify(msg_obj));
      } else {
        sessions.push({
          name: parsedData.sessionName,
          users: [ws],
          lastUpdate: 0,
          typeOfLastEvent: "",
        });
      }
    }

    // ^^^^^ ONJOIN MESSAGE ^^^^^^^^^^^^^^^^^^
    else if (msgType === "work" || msgType === "break") {
      sessions.forEach((session) => {
        if (session.name === parsedData.sessionName) {
          session.users.forEach((user) => {
            user.send(data);
          });
          let eventType = parsedData.eventType;
          if (eventType === "stop") {
            session.lastUpdate = 0;
            session.typeOfLastEvent = "";
          } else {
            session.lastUpdate = Date.now();
            session.typeOfLastEvent = eventType;
          }
        }
      });
    }

    // sessions[`${parsedData.session_name}`]
    // users.forEach((user) => {
    //   user.send(data.toString());
    // });
  });
  console.log("Someone new joined");
});

setInterval(() => {
  // console.log("There are", sessions.length, "sessions online");
  for (let j = 0; j < sessions.length; j++) {
    let session = sessions[j];
    for (let i = 0; i < session.users.length; i++) {
      if (session.users[i]?._closeFrameSent) {
        session.users.splice(i, 1);
      }
    }
    if (session.users.length === 0) {
      sessions.splice(j, 1);
    }
    // fs.writeFileSync("test.out", JSON.stringify(users[i]));

    // splice (index of start, how many elements to delete after the start)
    // users.splice(1, 1);
  }
  console.log("There are", sessions.length, "sessions online");
}, 1000);
