// Modules Import
const fs = require("fs");
const rl = require('./readlineInterface');

// File Import
const Johnemon = require("./Johnemon");
const JohnemonWorld = require("./JohnemonWorld");
const johnemonMaster = require("./JohnemonMaster");

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

	rl.question("Choose your Johnemon : ", (answer) => {
    let choice = parseInt(answer);
		if (answer > johnemons.length || !typeof answer === "number") {
			console.log("Invalid answer. Choose a number in the list");
			proposeFirstJohnemon();
		}

		player.johnemonCollection.push(johnemons[choice-1]);
		console.log(`${player.name} received ${johnemons[choice-1].name} in their collection`);
    game();

	});
}

function game() {
  world.oneDayPasses();
}

function saveGameState() {

};

startGame();



