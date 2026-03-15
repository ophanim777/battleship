import Gameboard from "../src/gameboard.js";

test("place ship on board", () => {
  const board = new Gameboard();
  board.placeShip(3, 2, 3);

  expect(board.ships.length).toBe(1);
});