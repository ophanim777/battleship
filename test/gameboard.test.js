import Gameboard from "../src/gameboard.js";

test("place ship on board", () => {
  const board = new Gameboard();
  board.placeShip(3, 2, 3);

  expect(board.ships.length).toBe(1);
});

test("attack hits ship", () => {
  const board = new Gameboard();
  board.placeShip(3, 1, 1);

  expect(board.receiveAttack(1, 1)).toBe("hit");
});