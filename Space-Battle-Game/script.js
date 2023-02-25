class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  attackEnemy(enemyShip) {
    if (this.accuracy > enemyShip.accuracy) {
      console.log(
        '%c......WELL DONE.....SUCCESSFUL HIT USS-ASSEMBLY......',
        'color:green; font-size:1.5rem'
      );
      enemyShip.hull = enemyShip.hull - enemyShip.firepower;
      console.log(enemyShip.hull);
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
  for (let i = 0; i < alienShips.length; i++) {
    console.log(alienShips[i]);
    console.log('alien before attack ' + alienShips[i].hull);
    if (humanShip.accuracy > alienShips[i].accuracy) {
      alienShips[i].hull = alienShips[i].hull - alienShips[i].firepower;
      console.log('alien after attack ' + alienShips[i].hull);
    } else if (humanShip.accuracy < alienShips[i].accuracy) {
      humanShip.hull = humanShip.hull - humanShip.firepower;
      console.log('human after attack ' + humanShip.hull);
    }else{
        console.log('Tie ' + humanShip.hull + ', ' + alienShips[i].hull);
    }
  }
};

const ussAssembly = new Ship(20, 5, 0.7); // hardcoded since the human-ship have specific values

const alienShips = creatAlienShips(6);
console.log(alienShips);

// ussAssembly.attackEnemy(alienShips[0]);

startNewGame(ussAssembly, alienShips);

