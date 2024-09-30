const Johnemon = require('./Johnemon')


class JohnemonWorld {
	constructor() {
		this.day = 1;
		this.logs = [];
	}

	oneDayPasses() {
		this.day++;
	}

	randomizeEvent() {}

	addLog(newLog) {
		const date = new Date();
		const logEntry = `Day ${this.day}: ${newLog} saved on ${date}`;
		this.logs.push(logEntry);
		console.log(logEntry);
	}
}

module.exports = JohnemonWorld;
