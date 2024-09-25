const JohnemonArena = require("./JohnemonArena");
const Johnemon = require("./Johnemon");
const rl = require("./readlineInterface");

class JohnemonWorld {
	constructor() {
		this.day = 0;
		this.logs = [];
	}

	oneDayPasses() {
		this.randomizeEvent();
	}

	randomizeEvent() {
		const randomEvent = Math.floor(Math.random() * 2);

		switch (randomEvent) {
			case 0:
				console.log("Nothing happened, the day passes");
				this.oneDayPasses();
				break;
			case 1:
				const wildJohnemon = new Johnemon();
				console.log(`A wild ${wildJohnemon.name} of level : ${wildJohnemon.level}  has appeared ! `);
				break;
		}
	}

	async askForFight() {
		return new Promise((resolve) => {
			rl.question("Do you want to fight? (Y/N) ", (answer) => {
				if (!["Y", "N"].includes(answer.toUpperCase())) {
					console.log("Invalid answer, please use Y or N");
					return this.askForFight();
				}
				if (answer.toUpperCase() === "N") {
					console.log("No fight");
					resolve(false);
					rl.close();
				}
				resolve(true);
			});
		});
	}

	addLog(newLog) {}
}

module.exports = JohnemonWorld;
