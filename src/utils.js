import {setPoint} from './core'

const trimMargins = str => str.split('\n').map(x => x.trim()).join('\n')

const fromImage = (image, [dx, dy] = [0, 0]) =>
  trimMargins(image)
    .split('\n')
    .map((line, y) => line.split('').map((v, x) => (v === 'O' ? [x, y] : null)))
    .reduce((acc, x) => acc.concat(x))
    .filter(Boolean)
    .map(([x, y]) => [dx + x, dy + y])
    .reduce((acc, p) => {
      setPoint(acc, p)
      return acc
    }, {})

export {
  trimMargins,
  fromImage
}