import Player from "../src/player.js";

test("player has gameboard", () => {
  const player = new Player();

  expect(player.gameboard).toBeDefined();
});