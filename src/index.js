import Player from "./player.js";
import { createBoard } from "./dom.js";

const player = new Player("human");
const computer = new Player("computer");

const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

createBoard(playerBoard);
createBoard(computerBoard);