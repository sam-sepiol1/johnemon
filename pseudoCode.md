# Johnemon™ Game Design

## Part 1: Define the Johnemon™ Class

### Class: Johnemon
**Attributes:**
- `name`: string
- `level`: integer (initially 1)
- `experienceMeter`: integer (initially 0)
- `attackRange`: integer (random between 1-8)
- `defenseRange`: integer (random between 1-3)
- `healthPool`: integer (random between 10-30)
- `catchPhrase`: string (unique phrase)

**Methods:**
- `attack(defender: Johnemon)`: Perform attack, calculate damage using attackRange and level, reduce defender's health.
- `gainExperience(opponent: Johnemon)`: Increase experienceMeter by random value based on opponent's level.
- `sayCatchPhrase()`: Print catch phrase to console.
- `evolve()`: Increase level, enhance attackRange, defenseRange, and healthPool if experienceMeter >= level * 100.

## Part 2: Define the Johnemon™ Master Class

### Class: JohnemonMaster
**Attributes:**
- `name`: string
- `johnemonCollection`: array of Johnemon™
- `healingItems`: integer (initially 0)
- `reviveItems`: integer (initially 0)
- `johneballs`: integer (initially 0)

**Methods:**
- `healJohnemon(johnemon: Johnemon)`: Restore johnemon's healthPool to original value.
- `reviveJohnemon(johnemon: Johnemon)`: Restore johnemon’s health to full value.
- `catchJohnemon(wildJohnemon: Johnemon)`: Add wildJohnemon to johnemonCollection.
- `releaseJohnemon(johnemon: Johnemon)`: Remove johnemon from johnemonCollection.
- `showCollection()`: Display details of johnemonCollection.

## Part 3: Define the Johnemon™ World Class

### Class: JohnemonWorld
**Attributes:**
- `day`: integer (initially 1)
- `logs`: array of strings

**Methods:**
- `oneDayPasses()`: Increment day by 1.
- `addLog(log: string)`: Append log message with structure "Day ${day}: ${log}" to logs array.

## Part 4: Define the Game Initialization and Save Functionality

**Function: initializeGame()**
- Create a JohnemonWorld instance
- Prompt user for name to create a JohnemonMaster
- Display 3 random Johnemons and prompt user to choose one as starter
- Save game state to `save.json`

**Function: saveGameState()**
- Serialize the current game state and write it to `save.json`

**Function: loadGameState()**
- Read and deserialize `save.json` to load previous game state.

## Part 5: Game Start and Load

**Function: startGame()**
- Check if `save.json` file exists
- If exists, ask user if they want to load the previous game state
- If yes, call `loadGameState()`, else call `initializeGame()`

## Part 6: Define Actions in Johnemon™ World for a Day in the Game

**Function: dailyAction()**
- Prompt user to select one of the following actions:
    - Heal Johnemon
    - Revive Johnemon
    - Release Johnemon
    - Rename Johnemon
- Based on user choice, perform action on selected Johnemon in collection.
- Generate random event:
    - If "Nothing happens", save game state and call `oneDayPasses()`
    - If "A wild Johnemon™ appears", prompt user to fight or skip.

## Part 7: Define the Johnemon™ Arena Class for Fights

### Class: JohnemonArena
**Methods:**
- `startFight(masterJohnemon: Johnemon, wildJohnemon: Johnemon)`: Initiate fight.
- `fightRound()`: Each round consists of:
    - User action (Attack, Try to catch, or Run away)
    - Wild Johnemon™ action (Attack)
    - Determine if fight is over or continue with another round
- `calculateCatchProbability(johnemonHealth: integer)`: Calculate probability based on johnemon's remaining health.
- `endFight(result: string)`: Display fight result, update experience, and save game state.
