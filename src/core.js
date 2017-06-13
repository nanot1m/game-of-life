const getPoint = (field, [x, y]) => field[x] && field[x][y]

export const setPoint = (field, [x, y]) => {
  if (!(x in field)) {
    field[x] = { [y]: 1 }
  } else {
    field[x][y] = 1
  }
}

const containsPoint = getPoint

const Neighbours = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1]
]

const getNeighboursCount = (field, [x, y]) => {
  let result = 0
  Neighbours.forEach(([dx, dy]) => {
    if (containsPoint(field, [x + dx, y + dy])) {
      result++
    }
  })
  return result
}

const isAlive = (field, pos) =>
  ({
    '2': containsPoint(field, pos),
    '3': 1
  }[getNeighboursCount(field, pos)] || 0)

const Around = Neighbours.concat([[0, 0]])

const walkAround = (field, [x, y]) => {
  let result = []
  Around.forEach(([dx, dy]) => {
    const pos = [x + dx, y + dy]
    if (isAlive(field, pos)) {
      result.push(pos)
    }
  })
  return result
}

const walkThroughField = (field, walker) => {
  for (let x in field) {
    for (let y in field[x]) {
      walker([parseInt(x, 10), parseInt(y, 10)])
    }
  }
}

const iterateField = field => {
  let result = {}
  walkThroughField(field, point => {
    const around = walkAround(field, point)
    around.forEach(point => {
      if (!containsPoint(result, point)) {
        setPoint(result, point)
      }
    })
  })
  return result
}

export default (render, initialState) => {
  let nextState = initialState
  function draw() {
    nextState = iterateField(nextState)
    render(nextState)
    requestAnimationFrame(draw)
  }
  requestAnimationFrame(draw)
}

