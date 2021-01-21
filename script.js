let tasks = [
	{
		startedAt: new Date("2021-01-20:6:00"),

		finishedAt: new Date("2021-01-20:11:00"),

		tasksGiven: 20,

		tasksFinished: 18,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:14:20"),

		finishedAt: new Date("2021-01-20:16:20"),

		tasksGiven: 15,

		tasksFinished: 15,

		topic: "CSS",
	},
	{
		startedAt: new Date("2021-01-20:12:30"),

		finishedAt: new Date("2021-01-20:16:00"),

		tasksGiven: 30,

		tasksFinished: 18,

		topic: "Objects",
	},
	{
		startedAt: new Date("2021-01-20:17:00"),

		finishedAt: new Date("2021-01-20:23:40"),

		tasksGiven: 28,

		tasksFinished: 10,

		topic: "Music",
	},
	{
		startedAt: new Date("2021-01-20:18:00"),

		finishedAt: new Date("2021-01-21:14:00"),

		tasksGiven: 50,

		tasksFinished: 40,

		topic: "Arrays",
	},
	{
		startedAt: new Date("2021-01-20:14:25"),

		finishedAt: new Date("2021-01-20:18:00"),

		tasksGiven: 80,

		tasksFinished: 54,

		topic: "Functions",
	},
	{
		startedAt: new Date("2021-01-20:11:40"),

		finishedAt: new Date("2021-01-20:19:30"),

		tasksGiven: 16,

		tasksFinished: 16,

		topic: "Food",
	},
	{
		startedAt: new Date("2021-01-21:13:30"),

		finishedAt: new Date("2021-01-22:12:00"),

		tasksGiven: 50,

		tasksFinished: 10,

		topic: "Second week final",
	},
	{
		startedAt: new Date("2021-01-20:10:00"),

		finishedAt: new Date("2021-01-20:19:00"),

		tasksGiven: 11,

		tasksFinished: 7,

		topic: "ShakShuka",
	},
	{
		startedAt: new Date("2021-01-20:15:00"),

		finishedAt: new Date("2021-01-20:17:30"),

		tasksGiven: 8,

		tasksFinished: 8,

		topic: "Phone calls",
	},
];

for (let task of tasks) {
	task.totalTime = Number((task.finishedAt - task.startedAt) / 60000);
	task.tasksPerc = Math.floor(
		(Number(task.tasksFinished) / Number(task.tasksGiven)) * 100
	);
}

document.write('<table id = "table">');
document.write('<th class="table_header"> Topic </th>');
document.write('<th class="table_header"> Startd At </th>');
document.write('<th class="table_header"> Finished At </th>');
document.write('<th class="table_header"> Total Time </th>');
document.write('<th class="table_header"> Tasks Given </th>');
document.write('<th class="table_header"> Tasks Finishd </th>');
document.write('<th class="table_header"> Tasks % </th>');
