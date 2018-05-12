/** @typedef {Object<number, Object<number, number>>} Field */

/**
 * @param {Field} field
 * @param {[number, number]} point
 * @returns {number}
 */
const getPoint = (field, [x, y]) => Number(field[x] && field[x][y]);

/**
 * @param {Field} field
 * @param {[number, number]} point
 */
export const setPoint = (field, [x, y]) => {
  if (x in field) {
    field[x][y] = 1;
  } else {
    field[x] = { [y]: 1 };
  }
};

/**
 * @param {Field} field
 * @param {[number, number]} point
 * @returns {boolean}
 */
const containsPoint = (field, point) => Boolean(getPoint(field, point));

const Neighbours = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1]
];

/**
 * Gets neighbours count for the given point
 * @param {Field} field
 * @param {[number, number]} point
 * @returns {number}
 */
const getNeighboursCount = (field, [x, y]) => {
  let result = 0;
  Neighbours.forEach(([dx, dy]) => {
    if (containsPoint(field, [x + dx, y + dy])) {
      result++;
    }
  });
  return result;
};

/**
 * Check if cell in givent point is alive
 * @param {Field} field
 * @param {[number, number]} point
 * @returns {boolean}
 */
const isAlive = (field, point) =>
  ({
    "2": containsPoint(field, point),
    "3": 1
  }[getNeighboursCount(field, point)] || 0);

const Around = Neighbours.concat([[0, 0]]);

/**
 * Walks through 3x3 square, and collecting alive cells
 * @param {Field} field
 * @param {[number, number]} point
 * @returns {Array<[number, number]>}
 */
const walkAround = (field, [x, y]) => {
  let result = [];
  Around.forEach(([dx, dy]) => {
    const point = [x + dx, y + dy];
    if (isAlive(field, point)) {
      result.push(point);
    }
  });
  return result;
};

/**
 * Walks through the field, applying walker function to each point
 * @param {Field} field
 * @param {(point: [number, number]) => void} walker
 */
const walkThroughField = (field, walker) => {
  for (let x in field) {
    for (let y in field[x]) {
      walker([parseInt(x, 10), parseInt(y, 10)]);
    }
  }
};

/**
 * Gets next state of field
 * @param {Field} field
 * @returns {Field}
 */
const iterateField = field => {
  let result = {};
  walkThroughField(field, point => {
    const around = walkAround(field, point);
    around.forEach(point => {
      if (!containsPoint(result, point)) {
        setPoint(result, point);
      }
    });
  });
  return result;
};

/**
 * Runs drawing field state
 * @param {(field: Field) => void} render
 * @param {Field} initialState
 */
export default function run(render, initialState) {
  let nextState = initialState;
  function draw() {
    nextState = iterateField(nextState);
    render(nextState);
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}
