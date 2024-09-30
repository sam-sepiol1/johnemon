class JohnemonMaster {
	constructor(name, johnemonCollection, healingItems, reviveItems, JOHNEBALLS) {
		this.name = name;
		this.johnemonCollection = johnemonCollection || [];
		this.healingItems = healingItems || 5;
		this.reviveItems = reviveItems || 3;
		this.JOHNEBALLS = JOHNEBALLS || 10;
	}

	renameJohnemon(johnemon, newName) {
		const index = this.johnemonCollection.findIndex((j) => j === johnemon);
		if (index !== -1) {
			this.johnemonCollection[index].name = newName;
		}
	}

	healJohnemon(johnemon) {
		const index = this.johnemonCollection.findIndex((j) => j === johnemon);

		if (index === -1) {
			console.log("Johnemon doesn't exist");
			return;
		}

		if (this.healingItems <= 0) {
			console.log("No more items left");
			return;
		}

		this.johnemonCollection[index].healthPool = this.johnemonCollection[index].maxHealth;
		this.healingItems--;
	}

	reviveJohnemon(johnemon) {
		if (this.reviveItems <= 0) {
			console.log("No reviving items left!");
			return;
		}

		const index = this.johnemonCollection.findIndex((j) => j === johnemon);
		if (index === -1) {
			console.log("Johnemon doesn't exist");
			return;
		}

		this.johnemonCollection[index].healthPool = this.johnemonCollection[index].maxHealth;
		this.reviveItems--;
	}

	releaseJohnemon(johnemon) {
		const index = this.johnemonCollection.findIndex((j) => j === johnemon);
		if (index === -1) {
			console.log("Johnemon doesn't exist.");
			return;
		}

		this.johnemonCollection.splice(index, 1);
	}

	catchJohnemon(johnemon) {
		if (this.JOHNEBALLS <= 0) {
			console.log("No more JOHNEBALLS left!");
			return;
		}

		this.johnemonCollection.push(johnemon);
		this.JOHNEBALLS--;
	}

	showCollection() {
		console.log(`${this.name}'s collection : `);
		console.log("--------------------------");
		console.log(" ");

		this.johnemonCollection.forEach((johnemon) => {
			console.log(`Name: ${johnemon.name}, Level: ${johnemon.level}, Attack: ${johnemon.attackRange}, Defense: ${johnemon.defenseRange}, Health: ${johnemon.healthPool}`);
		});
		console.log(" ");

		console.log("--------------------------");
	}
}

module.exports = JohnemonMaster;
