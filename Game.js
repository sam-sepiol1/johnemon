// Modules Import
const fs = require("fs");
const rl = require("./readlineInterface");

// File Import
const { log } = require("console");
const Johnemon = require("./Johnemon.js");
const JohnemonWorld = require("./JohnemonWorld.js");
const johnemonMaster = require("./JohnemonMaster.js");
const JohnemonArena = require("./JohnemonArena.js");

// Game constant
const player = new johnemonMaster();
const world = new JohnemonWorld();
const startingJohnemons = [new Johnemon(), new Johnemon(), new Johnemon()];

// Starting functions
async function startGame() {
	await askForName();
	console.log(`Hello, ${player.name}`);

	await proposeJohnemon();
	// saveGameState();
	game();
}

function askForName() {
	return new Promise((resolve) => {
		rl.question("Hello, what is your name ? :  ", (answer) => {
			player.name = answer;
			resolve();
		});
	});
}

async function proposeJohnemon() {
	startingJohnemons.forEach((johnemon, index) => {
		console.log(`Johnemon ${index + 1}: Name: ${johnemon.name}, Level: ${johnemon.level}, Attack Range: ${johnemon.attackRange}, Defense Range: ${johnemon.defenseRange}`);
	});

	const choice = await choosingOptions();
	player.johnemonCollection.push(startingJohnemons[choice - 1]);
}

function choosingOptions() {
	return new Promise((resolve) => {
		rl.question("Choose a Johnemon :  ", (answer) => {
			let choice = parseInt(answer);

			if (isNaN(choice) || choice > startingJohnemons.length || choice <= 0) {
				console.log("Invalid answer. Please use numbers to choose.");
				resolve(choosingOptions());
			}

			resolve(choice);
		});
	});
}

// Game functions
async function game() {
	if (world.oneDayPasses() === 0) {
		console.log("Nothing happens");
		game();
	}
	if (world.oneDayPasses() === 1) {
		const wildJohnemon = new Johnemon();
		console.log(`a Wild ${wildJohnemon.name} appears`);

		const fightChoice = await askForFight();
		if (fightChoice === "y") {
			const fighter = await chooseYourJohnemon();

			const arena = new JohnemonArena(fighter, wildJohnemon);
			arena.startBattle();
		}
	}
}

function askForFight() {
	return new Promise((resolve, reject) => {
		rl.question("Do you want to fight ? (Y/N)   ", (answer) => {
			if (!["y", "n"].includes(answer)) {
				console.log("Invalid answer, please use Y or N to answer");
				resolve(askForFight());
			}
			resolve(answer);
		});
	});
}

async function chooseYourJohnemon() {
	return await new Promise((resolve, reject) => {
		player.showCollection();

		rl.question("Which Johnemon do you to fight with ?", (answer) => {
			let choice = parseInt(answer);
			if (isNaN(choice) || choice > player.johnemonCollection.length) {
				console.log("Invalid answer. Please use numbers to choose.");
				resolve(chooseYourJohnemon());
			}

			resolve(player.johnemonCollection[choice - 1]);
		});
	});
}

// Save functions
function saveGameState() {
	fs.writeFileSync("gameState.json", JSON.stringify(player, null, 2));
}

startGame();
