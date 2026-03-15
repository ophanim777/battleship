import Player from "./player.js";
import { createBoard } from "./dom.js";

const player = new Player("human");
const computer = new Player("computer");

const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

createBoard(playerBoard);
createBoard(computerBoard);

computerBoard.addEventListener("click", (e) => {

  if (!e.target.classList.contains("cell")) return;

  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);

  const result = player.attack(computer.gameboard, x, y);

  if (result === "hit") {
    e.target.style.background = "red";
  } else {
    e.target.style.background = "gray";
  }

});