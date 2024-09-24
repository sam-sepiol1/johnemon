
class JohnemonMaster {
  constructor(name) {
    this.name = name;
    this.johnemonCollection = [];
    this.healingItems = 5; // Initial number of healing items
    this.reviveItems = 3; // Initial number of revive items
    this.JOHNEBALLS = 10; // Initial number of JOHNEBALLS
  }


  renameJohnemon(johnemon) {

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
      console.log("No healing items left!");
      return;
    }
    this.reviveItems--;
    // TODO : Redeclare health to it's original value
  }


  releaseJohnemon(johnemon) {
    
  }

  catchJohnemon(johnemon){ 

  }


  showCollection() {
    
  }
}

module.exports = JohnemonMaster
