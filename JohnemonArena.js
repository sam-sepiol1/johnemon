const { log } = require('console');
const rl = require ('./readlineInterface');
const data = require ('./gameState.json');
const johnemonMaster = require('./JohnemonMaster.js');

const player = new johnemonMaster(data.name, data.johnemonCollection, data.healingItems, data.reviveItems, data.JOHNEBALLS);



class JohnemonArena {

  constructor(johnemon_1, johnemon_2) {

  }
  chooseJohnemon() {
    console.log(player.name);
    
  }

  startBattle() {

  }


  startRound(selectedJohnemon) {
  	
  }

  playerAction(selectedJohnemon) {
  	
  }

  attack(selectedJohnemon) {
    
  }

  tryToCatch() {
    

  }

  calculateDamage(attackRange, defenseRange) {
    
  }

  wildJohnemonAction() {
    
  }

  checkBattleStatus() {
    
  }

  startNewRound() {
    
  }

  endBattle() {
    
  }
}

const arena = new JohnemonArena();
arena.chooseJohnemon()

module.exports = JohnemonArena