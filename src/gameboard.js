import Ship from "./ship.js";

export default class Gameboard {
    constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(length, x, y){
     const ship = new Ship(length);
     this.ships.push({
      ship,
      x,
      y,
    });
  }

   receiveAttack(x, y) {
    const target = this.ships.find(
      (s) => s.x === x && s.y === y
    );

    if (target) {
      target.ship.hit();
      return "hit";
    } else {
      this.missedAttacks.push([x, y]);
      return "miss";
    }
}
     allShipsSunk() {
    return this.ships.every((s) => s.ship.isSunk());
  }
}
