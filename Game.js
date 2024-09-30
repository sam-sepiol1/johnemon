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
const startingJohnemons = [new Johnemon(), new Johnemon(), new Johnemon()];

// Starting functions

async function getPlayerName() {
	return new Promise((resolve) => {
		rl.question("Enter your name: ", (name) => {
			resolve(name);
		});
	});
}

async function startGame() {
	if (fs.existsSync("save.json")) {
		rl.question("A saved game was found. Do you want to load it? (yes/no): ", async (answer) => {
			if (!['yes', 'no'].includes(answer.toLowerCase())) {
				log('Invalid answer')
				return startGame();
			}
			if (answer.toLowerCase() === 'yes') {
				console.log('Save game loaded');


				// TODO implement the function 
				loadGameState();
			}


			const playerName = await getPlayerName();
			const player = new johnemonMaster(playerName);
			log(`Welcome, ${playerName}! Your journey begins now.`);
			
			initializeGame();

		});
	}
	
}

function loadGameState(params) {
	
}

function initializeGame() {
	
}



startGame();
