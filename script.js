let tasks = [
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:13:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 10,

		tasksFinished: 7,

		topic: "JavaScript",
	},
];

for (let task of tasks) {
	task.totalTime = (task.finishedAt - task.startedAt) / 3600000;
	task.tasksPerc = Math.floor(
		(Number(task.tasksFinished) / Number(task.tasksGiven)) * 100
	);
	console.log(task.totalTime + " , " + task.tasksPerc);
}
