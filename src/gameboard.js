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

}