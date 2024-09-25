// Modules Import
const fs = require("fs");
const rl = require("./readlineInterface");

// File Import
const { log } = require("console");
const Johnemon = require("./Johnemon.js");
const JohnemonWorld = require("./JohnemonWorld.js");
const johnemonMaster = require("./JohnemonMaster.js");

// Game constant
const player = new johnemonMaster();
const world = new JohnemonWorld();


function startGame() {
	rl.question(`Welcome, ${askForName()}`, (answer) => {
		console.log(`Hello, ${answer}! Let your Johnemon adventure begin!`);
		player.name = answer;
		proposeFirstJohnemon();

	});
}

function askForName() {
	return "What is your name, Johnemon Master ?  ";
}

function proposeFirstJohnemon() {
	const johnemons = [new Johnemon(), new Johnemon(), new Johnemon()];

	johnemons.forEach((johnemon, index) => {
		console.log(`Johnemon ${index + 1}: Name: ${johnemon.name}, Level: ${johnemon.level}, Attack Range: ${johnemon.attackRange}, Defense Range: ${johnemon.defenseRange}, Health Pool: ${johnemon.healthPool}`);
	});

	rl.question("Choose your Johnemon: ", (answer) => {
		let choice = parseInt(answer);
		
		if (choice > johnemons.length || isNaN(choice)) {
			console.log("Invalid answer. Choose a number in the list");
			return proposeFirstJohnemon();
		}

		player.johnemonCollection.push(johnemons[choice - 1]);
		console.log(`${player.name} received ${johnemons[choice - 1].name} in their collection`);
		
		saveGameState();
		game();
	});

	

}

async function game() {
	world.oneDayPasses();
	handleFight()
}

async function handleFight() {
	const wantsToFight = await world.askForFight();
	if (wantsToFight) {
		console.log('fight start');	
		rl.close();
	}
}

function saveGameState() {
	fs.writeFileSync("gameState.json", JSON.stringify(player, null, 2));
}

startGame();
