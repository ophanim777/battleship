import Gameboard from "./gameboard.js";

export default class Player {
    constructor(type = "human") {
  this.type = type;
  this.gameboard = new Gameboard();
}

attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y);
  }

  randomAttack(enemyBoard) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return enemyBoard.receiveAttack(x, y);
  }
}