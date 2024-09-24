
class JohnemonMaster {
  constructor(name) {
    this.name = name;
    this.johnemonCollection = [];
    this.healingItems = 5; // Initial number of healing items
    this.reviveItems = 3; // Initial number of revive items
    this.JOHNEBALLS = 10; // Initial number of JOHNEBALLS
  }
  renameJohnemon(johnemon) {
    const index = this.johnemonCollection.indexOf(johnemon);
    if (index === -1) {
      console.log(`${johnemon.name} is not in the collection.`);
      return;
    }

    this.johnemonCollection[index].name = johnemon;
    console.log(`The new name of your Johnemon is now ${johnemon}`);
    
  }

  healJohnemon(johnemon) {
    if (this.healingItems === 0) {
      console.log("No healing items left!");
      return;
    }
    this.healingItems--;
    // TODO : Redeclare health to it's original value
  }

  reviveJohnemon(johnemon) {
    if (this.reviveItems === 0) {
      console.log("No reviving items left!");
      return;
    }
    this.reviveItems--;
    // TODO : Redeclare health to it's original value
  }


  releaseJohnemon(johnemon) {
    const index = this.johnemonCollection.indexOf(johnemon);
    if (index === -1) {
      console.log(`${johnemon.name} is not in the collection.`);
      return;
    }

    this.johnemonCollection.splice(index, 1);
    console.log(`${johnemon.name} has been released.`);
    console.log(`You now have ${this.johnemonCollection} in your collection`);
  }

  catchJohnemon(johnemon){ 
    if (this.JOHNEBALLS === 0) {
      console.log("No JOHNEBALLS left!");
      return;
    }
    
    this.JOHNEBALLS--; 
    this.johnemonCollection.push(johnemon);
    console.log(`${johnemon} has been captured. You have ${this.JOHNEBALLS} johneballs left`);
  }


  showCollection() {
    this.johnemonCollection.forEach((johnemon, index) => {
      console.log(`Johnemon ${index + 1}: Name: ${johnemon.name}, Level: ${johnemon.level}`);
    });
  }
}

module.exports = JohnemonMaster

