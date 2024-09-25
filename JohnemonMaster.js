
class JohnemonMaster {
  constructor(name, johnemonCollection, healingItems, reviveItems, JOHNEBALLS) {
    this.name = name;
    this.johnemonCollection = johnemonCollection || [];
    this.healingItems = healingItems || 5; 
    this.reviveItems = reviveItems || 3; 
    this.JOHNEBALLS = JOHNEBALLS || 10; 
    }

  
  renameJohnemon(johnemon) {
    const index = this.johnemonCollection.indexOf(johnemon);
    if (index === -1) {
      console.log(`${johnemon.name} is not in the collection.`);
      return;
    }

    this.johnemonCollection[index].name = johnemon.name;
    console.log(`The new name of your Johnemon is now ${johnemon.name}`);
    
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

