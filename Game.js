const readline = require('readline');
const Johnemon = require('./Johnemon');
const JohnemonWorld = require ('./JohnemonWorld');
const fs = require('fs');
const johnemonMaster = require('./JohnemonMaster');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const player = new johnemonMaster();


function startGame(){


  rl.question(`Welcome, ${askForName()}`, (answer)=> { 
    console.log(`Hello, ${answer}! Let your Johnemon adventure begin!`);
    player.name = answer;
    proposeFirstJohnemon(); 
  })


}

function askForName() {
 return 'What is your name ?  ';
}

function proposeFirstJohnemon(){

  const johnemons = [
    new Johnemon(),
    new Johnemon(),
    new Johnemon()
  ];

  johnemons.forEach((johnemon, index) => {
    console.log(`Johnemon ${index + 1}: Name: ${johnemon.name}, Level: ${johnemon.level}, Attack Range: ${johnemon.attackRange}, Defense Range: ${johnemon.defenseRange}, Health Pool: ${johnemon.healthPool}`);
  });

  

  rl.question('Choose your Johnemon : ', (answer)=> { 
    player.johnemonCollection.push(johnemons[answer-1]);
    console.log(`${player.name} received ${johnemons[answer].name} in their collection`);
    
  })
}

function saveGameState(){
  
}

startGame()

