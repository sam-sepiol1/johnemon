const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "names.txt");

let names = [];

function getNames() {
	try {
		const data = fs.readFileSync(filePath, "utf8");
		names = data
			.split(",")
			.map((name) => name.trim())
			.filter((name) => name.length > 0);
	} catch (error) {
		console.error("Error reading the file:", error);
	}
}
getNames();

class Johnemon {
	constructor() {
		this.name = this.generateRandomName();
		this.level = 1;
		this.experienceMeter = 0;
		this.attackRange = this.getRandomNumber(1, 8);
		this.defenseRange = this.getRandomNumber(1, 3);
		this.healthPool = this.getRandomNumber(10, 30);
		this.catchPhrase = this.generateCatchPhrase();
		this.maxHealth = this.healthPool;
	}

	generateRandomName() {
		const randomStudent1 = names[Math.floor(Math.random() * names.length)];
		const randomStudent2 = names[Math.floor(Math.random() * names.length)];
		return randomStudent1 + randomStudent2.toLowerCase();
	}

	getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	generateCatchPhrase() {
		const catchphrases = [
			"Catch 'em all, one adventure at a time!",
			"Train hard, battle smart, and evolve beyond!",
			"Power up, team up, and unleash your true potential!",
			"From the wild to the world—your journey starts now!",
			"Master the elements, conquer the leagues!",
		];

		return catchphrases[Math.floor(Math.random() * catchphrases.length)];
	}

	attack(defender) {
		const damage = this.getRandomNumber(this.attackRange, this.attackRange * this.level);
		defender.healthPool -= damage;
		console.log(`${this.name} attacks ${defender.name} for ${damage} damage!`);
	}

	gainExperience(defender) {
        const experienceGained = this.getRandomNumber(defender.level, defender.level * 10);
        this.experienceMeter += experienceGained;

        console.log(`${this.name} gains ${experienceGained} experience points!`);
    }

	evolve() {
        if (this.experienceMeter >= this.level * 100) {
            this.level++;
            this.attackRange += this.getRandomNumber(1, 5);
            this.defenseRange += this.getRandomNumber(1, 5);
            this.healthPool += this.getRandomNumber(1, 5);
            this.maxHealth = this.healthPool; 
            console.log(`${this.name} has evolved to level ${this.level}!`);
        }
    }

	sayCatchPhrase() {
		console.log(`${this.name} says : "${this.catchPhrase}`);
	}
}

module.exports = Johnemon;
