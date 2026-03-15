import Ship from "../src/ship.js";

test("ship stores length", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

test("ship records hit", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("ship sinks after enough hits", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});