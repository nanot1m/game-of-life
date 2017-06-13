import R from 'ramda'

import render from './render'
import run from './core'
import { fromImage } from './utils'
import Images from './images'

console.log(Object.keys(Images))

var state = fromImage(Images.achima, [5, 5])

run(render, state)


  