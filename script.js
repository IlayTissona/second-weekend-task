let tasks = [
	{
		startedAt: new Date("2021-01-20:6:30"),

		finishedAt: new Date("2021-01-20:11:50"),

		tasksGiven: 20,

		tasksFinished: 18,

		topic: "JavaScript",
	},
	{
		startedAt: new Date("2021-01-20:14:15"),

		finishedAt: new Date("2021-01-20:16:40"),

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
		startedAt: new Date("2021-01-20:17:22"),

		finishedAt: new Date("2021-01-20:23:40"),

		tasksGiven: 28,

		tasksFinished: 10,

		topic: "Music",
	},
	{
		startedAt: new Date("2021-01-20:20:56"),

		finishedAt: new Date("2021-01-21:14:20"),

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

		finishedAt: new Date("2021-01-22:12:15"),

		tasksGiven: 50,

		tasksFinished: 10,

		topic: "Second week final",
	},
	{
		startedAt: new Date("2021-01-20:10:30"),

		finishedAt: new Date("2021-01-20:18:05"),

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

const table = document.createElement("table");
table.id = "table";
document.body.append(table);
const tableHeaders = [
	"topic",
	"Started At",
	"Finshed At",
	"Total Time",
	"Tasks Given",
	"Tasks Finished",
	"Tasks %",
];
for (let header of tableHeaders) {
	let tableTitle = document.createElement("th");
	tableTitle.className = "table_header";
	tableTitle.innerText = header;
	table.append(tableTitle);
}
for (let task of tasks) {
	const tableRow = document.createElement("tr");
	table.append(tableRow);

	let topicBox = document.createElement("td");
	topicBox.innerText = task.topic;
	tableRow.append(topicBox);

	let startedAtBox = document.createElement("td");
	startedAtBox.innerText = hourToString(
		task.startedAt.getHours(),
		task.startedAt.getMinutes()
	);
	tableRow.append(startedAtBox);

	let finishedAtBox = document.createElement("td");
	finishedAtBox.innerText = hourToString(
		task.finishedAt.getHours(),
		task.finishedAt.getMinutes()
	);
	tableRow.append(finishedAtBox);

	let totalTimeBox = document.createElement("td");
	totalTimeBox.innerText = hourToString(
		Math.floor(task.totalTime / 60),
		task.totalTime % 60
	);
	totalTimeBox.className =
		task.totalTime / 60 < 5
			? "good_time"
			: task.totalTime / 60 < 8
			? "medium_time"
			: "bad_time";
	tableRow.append(totalTimeBox);

	let tasksGivenBox = document.createElement("td");
	tasksGivenBox.innerText = task.tasksGiven;
	tableRow.append(tasksGivenBox);

	let tasksFinishedBox = document.createElement("td");
	tasksFinishedBox.innerText = task.tasksFinished;
	tableRow.append(tasksFinishedBox);

	document.write(`<td> ${task.tasksFinished}</td>`);
	document.write(
		`<td class = ${
			task.tasksPerc >= 80
				? '"good_perc"'
				: task.tasksPerc >= 50
				? "medium_perc"
				: "bad_perc"
		}> ${task.tasksPerc}%</td>`
	);
	document.write("</tr>");
}

document.write("</table>");

function hourToString(hours, minutes) {
	out = "";

	if (hours < 10) {
		out += "0";
	}
	out += hours + ":";
	if (minutes < 10 && minutes !== 0) {
		out += "0";
	}
	out += minutes;

	if (minutes === 0) {
		out += "0";
	}
	return out;
}
