class JohnemonMaster {
	constructor(name, johnemonCollection, healingItems, reviveItems, JOHNEBALLS) {
		this.name = name;
		this.johnemonCollection = johnemonCollection || [];
		this.healingItems = healingItems || 5;
		this.reviveItems = reviveItems || 3;
		this.JOHNEBALLS = JOHNEBALLS || 10;
	}

	renameJohnemon(johnemon, newName) {
		const index = this.johnemonCollection.findIndex(j => j === johnemon);
		if (index !== -1) {
			this.johnemonCollection[index].name = newName;
		}
	}

	healJohnemon(johnemon) {
	}

	reviveJohnemon(johnemon) {}

	releaseJohnemon(johnemon) {}

	catchJohnemon(johnemon) {}

	showCollection() {
		console.log(`${this.name}'s collection : `);
		console.log('--------------------------');
		
		this.johnemonCollection.forEach(johnemon => {
			console.log(`Name: ${johnemon.name}, Level: ${johnemon.level}, Attack: ${johnemon.attackRange}, Defense: ${johnemon.defenseRange}, Health: ${johnemon.healthPool}`);
		});
	}
}

module.exports = JohnemonMaster;
