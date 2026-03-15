import Ship from "../src/ship.js";

test("ship stores length", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});