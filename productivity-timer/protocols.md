onjoin:
	msgType = "join"
	session_name = "some name"
work/break:
	msgType = "break" || "work"
	eventType = "start" || "stop" || "pause" || "resume"
	session_name = "some name"
	time = 1,2,3
update:
	msgType = "update"
	lastUpdate: date
	typeOfLastEvent: event_type

sessions = [
	{name: "session1" , users: [], last_update: date, type_of_last_event: "breakstart" }
]