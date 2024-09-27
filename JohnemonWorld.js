const Johnemon = require('./Johnemon')


class JohnemonWorld {
	constructor() {
		this.day = 0;
		this.logs = [];
	}

	oneDayPasses() {
		this.day++;
		const event = Math.floor(Math.random() * 2);

		switch (event) {
			case 0:
				// Nothing happens
				return 0;
				break;
			case 1:
				// Wild Johnemon appears
				return 1;
				break;

		}
	}

	randomizeEvent() {}

	addLog(newLog) {}
}

module.exports = JohnemonWorld;
