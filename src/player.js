import Gameboard from "./gameboard.js";

export default class Player {
    constructor(type = "human") {
  this.type = type;
  this.gameboard = new Gameboard();
}

attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y);
  }
}