const JohnemonArena = require("./JohnemonArena");
const Johnemon = require("./Johnemon");
const rl = require('./readlineInterface');

const arena = new JohnemonArena();

class JohnemonWorld {
	constructor() {
		this.day = 0;
		this.logs = [];
	}

	oneDayPasses() {
		console.log("One day has passed");
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
				console.log("A wild Johnemon appears!");
                this.askForFight();
				break;
		}
	}

	askForFight() {
		rl.question("Do you want to fight the Johnemon ? (y/n)  :  ", (answer) => {
			if (!['y', 'n'].includes(answer)) {
				console.log("Invalid answer. Choose a number in the list");
                this.askForFight();
                return;
			}
            if ('n'.includes(answer)) {
                console.log('No fight then ! See you tomorrow');
                this.oneDayPasses();
                return;
            }

            arena.startBattle();
            return;
		});
	}

	addLog(newLog) {

    }
}

module.exports = JohnemonWorld;
