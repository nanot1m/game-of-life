import R from 'ramda'

const getElementById = R.invoker(1, 'getElementById')
const getCanvas = getElementById('canvas')
const getContext = R.invoker(1, 'getContext')
const getContext2d = getContext('2d')

const clearCanvas = ctx => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  return ctx
}

const setFillStyle = R.curry((fillStyle, ctx) => {
  ctx.fillStyle = fillStyle
  return ctx
})

const drawRect = R.curry((l, t, w, h, ctx) => {
  ctx.fillRect(l, t, w, h)
  return ctx
})

const drawSquare = R.curry(
  (size, x, y) => drawRect(
    x - size / 2,
    y - size / 2,
    size,
    size
  )
)

/**
 * State = { [x: number]: { [y: number]: 1 } }
 */
// getPoints :: State -> Array<[number, number]>
const stateToPoints = state => {
  const result = []
  for (const x in state) {
    for (const y in state[x]) {
      result.push([parseInt(x), parseInt(y)])
    }
  }
  return result
}

const renderSquare = R.curry(
  (size, ctx, point) => [ctx]
    .map(setFillStyle('#2196F3'))
    .map(drawSquare(size, ...point))[0]
)

const scaleSize = size => R.map(R.multiply(size))

const drawState = R.curry((size, ctx) => R.pipe(
  stateToPoints,
  R.map(scaleSize(size)),
  R.forEach(renderSquare(size * 0.75, ctx))
))

const SIZE = 8

const render = R.uncurryN(2, R.pipe(
  getContext2d,
  clearCanvas,
  drawState(SIZE)
))

export default render(getCanvas(document))
