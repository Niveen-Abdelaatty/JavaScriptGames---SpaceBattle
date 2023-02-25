class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  attackEnemy(enemyShip) {
    let humanAttacks = 0;
    let alienAttacks = 0;

    while (enemyShip.hull > 0 && this.hull > 0) {
      if (this.accuracy > enemyShip.accuracy) {
        enemyShip.hull = enemyShip.hull - enemyShip.firepower;
        humanAttacks++;
        console.log('human');
      } else {
        this.hull = this.hull - this.firepower;
        alienAttacks++;
        console.log('enemy');
      }
    }
    if (humanAttacks > alienAttacks) {
      return 'human';
    } else {
      return 'alien';
    }
  }

  retreat() {
    console.log('%c......RETREATING......', 'color:red; font-size:1.5rem');
  }
}

const creatAlienShips = (noOfShips) => {
  const shipsArray = [];

  while (noOfShips != 0) {
    const hull = (Math.random() * (6 - 3) + 3).toFixed(0);
    const firepower = (Math.random() * (4 - 2) + 2).toFixed(0);
    const accuracy = Math.random().toFixed(1);
    const ship = new Ship(hull, firepower, accuracy);
    shipsArray.push(ship);
    noOfShips--;
  }
  return shipsArray;
};

const startNewGame = (humanShip, alienShips) => {
  let destroyedShips = 0;

  for (let i = 0; i < alienShips.length; i++) {
    const winner = humanShip.attackEnemy(alienShips[i]);
    if (winner === 'human') {
      destroyedShips++;
      console.log(destroyedShips);
      humanShip.attackEnemy(alienShips[i + 1]);
    }else{
        console.log('THE UNIVERSE IS DONE');
        break;
    }
    if (destroyedShips > 3) {
      console.log('THE UNIVERSE IS SAVED');
    }
  }
};

const ussAssembly = new Ship(20, 5, 0.7); // hardcoded since the human-ship have specific values

const alienShips = creatAlienShips(6);

startNewGame(ussAssembly, alienShips);

