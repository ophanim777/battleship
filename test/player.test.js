import Player from "../src/player.js";

test("player has gameboard", () => {
  const player = new Player();

  expect(player.gameboard).toBeDefined();
});

test("player can attack enemy board", () => {
  const player1 = new Player();
  const player2 = new Player();

  player2.gameboard.placeShip(2, 1, 1);

  const result = player1.attack(player2.gameboard, 1, 1);

  expect(result).toBe("hit");
});