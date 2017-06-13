const Figures = {
  blinker: `
    .........
    ...OOO...
    .........
  `,
  rPentomino: `
    .OO
    OO.
    .O.
  `,
  clock: `
    ......OO....
    ......OO....
    ............
    ....OOOO....
    OO.O....O...
    OO.O..O.O...
    ...O..O.O.OO
    ...O.O..O.OO
    ....OOOO....
    ............
    ....OO......
    ....OO......
  `,
  smallClock: `
    ..O.
  	O.O.
  	.O.O
  	.O..
  `,
  train: `
    ...O.....
  	.O...O...
  	O........
  	O....O...
  	OOOOO....
  	.........
  	.........
  	.........
  	.OO......
  	OO.OOO...
  	.OOOO....
  	..OO.....
  	.........
  	.....OO..
  	...O....O
  	..O......
  	..O.....O
  	..OOOOOO.
  `,
  parus: `
  ........O...........O........
	.......O.O.........O.O.......
	........O...........O........
	.............................
	......OOOOO.......OOOOO......
	.....O....O.......O....O.....
	....O..O.............O..O....
	.O..O.OO.............OO.O..O.
	O.O.O.....O.......O.....O.O.O
	.O..O....O.O.....O.O....O..O.
	....OO..O..O.....O..O..OO....
	.........OO.......OO.........
	.............OO..............
	.............O.O.............
	........O..O..O..............
	.......O.....................
	.....OO..........OOO.........
	..O......OO.O....OOO.........
	.....O...O..O....OOO.........
	.....OOO.O...O......OOO......
	..O...........O.....OOO......
	...O...O.OOO........OOO......
	....O..O...O.................
	....O.OO......O..............
	..........OO.................
	.........O...................
	.....O..O....................
  `,
  spider: `
	......O...OOO.....OOO...O......
	...OO.OOOOO.OO...OO.OOOOO.OO...
	.O.OO.O.....O.O.O.O.....O.OO.O.
	O...O.O...OOOOO.OOOOO...O.O...O
	....OOO.....OO...OO.....OOO....
	.O..O.OOO.............OOO.O..O.
	...O.......................O...
  `,
  factory: `
  .......................OO........................OO
	.......................OO........................OO
	.........................................OO........
	........................................O..O.......
	.........................................OO........
	...................................................
	....................................OOO............
	....................................O.O............
	.........OO.........................OOO............
	.........OO.........................OO.............
	........O..O.......................OOO.............
	........O..O.OO....................O.O.............
	........O....OO....................OOO.............
	..........OO.OO....................................
	...............................OO..................
	.....................OO.......O..O.................
	.....................OO........OO..................
	.................................................OO
	.................................................OO
	...................................................
	....OO..................O..........................
	OO....OOOO..........OO..OO.OOO.....................
	OO..OO.OOO..........OO....OOOO.....................
	....O...................OO.........................
	`,
  achima: `
  OO........................OO
	OO........................OO
	..................OO........
	.................O..O.......
	..................OO........
	..............O.............
	.............O.O............
	............O...O...........
	............O..O............
	............................
	............O..O............
	...........O...O............
	............O.O.............
	.............O..............
	........OO..................
	.......O..O.................
	........OO..................
	OO........................OO
	OO........................OO
	`,
  galaxy: `
  	OOOOOO.OO
  	OOOOOO.OO
  	.......OO
  	OO.....OO
  	OO.....OO
  	OO.....OO
  	OO.......
  	OO.OOOOOO
  	OO.OOOOOO
	`,
  p15: `
	  ..O....O..
  	OO.OOOO.OO
  	..O....O..
	`,
  beerTrain: `
  .......O.................O.......
	......OOO...............OOO......
	.....OO....OOO.....OOO....OO.....
	...OO.O..OOO..O...O..OOO..O.OO...
	....O.O..O.O...O.O...O.O..O.O....
	.OO.O.O.O.O....O.O....O.O.O.O.OO.
	.OO...O.O....O.....O....O.O...OO.
	.OOO.O...O....O.O.O....O...O.OOO.
	OO.........OO.O.O.O.OO.........OO
	............O.......O............
	.........OO.O.......O.OO.........
	..........O...........O..........
	.......OO.O...........O.OO.......
	.......OO...............OO.......
	.......O.O.O.OOO.OOO.O.O.O.......
	......OO...O...O.O...O...OO......
	......O..O...O.O.O.O...O..O......
	.........OO....O.O....OO.........
	.....OO....O...O.O...O....OO.....
	.........O.OO.O...O.OO.O.........
	..........O.O.O.O.O.O.O..........
	............O..O.O..O............
	...........O.O.....O.O...........
	`,
  p7: `
	...........OO...........
	....OO...O....O...OO....
	.O..O..O.O....O.O..O..O.
	O.O.O.OO.O....O.OO.O.O.O
	.O..O..O.O.OO.O.O..O..O.
	....OO....O..O....OO....
	...........OO...........
	.......O..O..O..O.......
	......O.OO....OO.O......
	.......O........O.......
	........................
	...OO..............OO...
	...O..OOOO....OOOO..O...
	....O.O.O.O..O.O.O.O....
	...OO.O...OOOO...O.OO...
	.......OO......OO.......
	.........OO..OO.........
	.........O..O.O.........
	..........OO............
	`,
  pendel: `
	..............OO....OO....OO...............................
	.............O..O.O....O.O..O..............................
	.............OOO..........OOO..............................
	................OO......OO.................................
	...............O..OOOOOO..O................................
	...............OO........OO................................
	...........................................................
	........O.............................OO..........O........
	.......O...OOO......O.........O.......OO.........O.O.......
	........O.OOOOO..........OOO...O...........................
	............O...O.....O.OOOOO.O..................O.........
	............OO....OOO.....O......................OO........
	............OO....OOO....OO...................OOOOO........
	...................O.....OO...................OO.OO.....OO.
	.................................................O......O.O
	.....................................................OO.O.O
	.....................................................O.O.O.
	.......................................................O...
	...................................OOO.........O.O...O..O..
	.......OO..........................O..O........O..O.....O..
	.......OO..............................O.......O.O..O...O..
	...................................O..O.............O...O..
	...................................OOO..................O..
	.....................................................O..O..
	................................................O......O...
	.............................................OO.OO...O.O.O.
	.............................................OOOOO...OO.O.O
	.........O......................................OO......O.O
	........O.O.....................................O.......OO.
	...........................................................
	.OO.......O.....................................O.O........
	O.O......OO......................................O.........
	O.O.OO...OOOOO.............................................
	.O.O.O...OO.OO.............................................
	...O......O................................................
	..O..O.....................................................
	..O........................................................
	..O...O....................................................
	..O...O..O.O......................................OO.......
	..O.....O..O......................................OO.......
	..O..O...O.O...............................................
	...O.......................................................
	.O.O.O.....................................................
	O.O.OO.....................................................
	O.O......O.................................................
	.OO.....OO.OO...................OO.....O...................
	........OOOOO...................OO....OOO....OO............
	........OO......................O.....OOO....OO............
	.........O..................O.OOOOO.O.....O...O............
	...........................O...OOO..........OOOOO.O........
	.......O.O.........OO.......O.........O......OOO...O.......
	........O..........OO.............................O........
	...........................................................
	................................OO........OO...............
	................................O..OOOOOO..O...............
	.................................OO......OO................
	..............................OOO..........OOO.............
	..............................O..O.O....O.O..O.............
	...............................OO....OO....OO..............
	`,
  river: `
    ..............OO......OO......OO...O.OO..........
	....O........O..O....O..O....O..O..OO.O..........
	O..O.O....O...OO..O...OO..O...O.O.....O.OO.......
	OOOO.O..OOOOOO..OOOOOO..OOOOOO..OOOOOO.O.O.......
	.....O.O.....O.O.....O.O.....O.O.....O.O......OO.
	..OO.O.O.O.O...O.O.O...O.O.O...O.O.O...O.O.....O.
	.O.....O.O...O.O.O...O.O.O...O.O.O...O.O.O.O.OO..
	.OO......O.O.....O.O.....O.O.....O.O.....O.O.....
	.......O.O.OOOOOO..OOOOOO..OOOOOO..OOOOOO..O.OOOO
	.......OO.O.....O.O...O..OO...O..OO...O....O.O..O
	..........O.OO..O..O....O..O....O..O........O....
	..........OO.O...OO......OO......OO..............
  `,
  expander: `
    ..................O........
	.................OOO.......
	............OOO....OO......
	...........O..OOO..O.OO....
	..........O...O.O..O.O.....
	..........O....O.O.O.O.OO..
	............O....O.O...OO..
	OOOO.....O.O....O...O.OOO..
	O...OO.O.OOO.OO.........OO.
	O.....OO.....O.............
	.O..OO.O..O..O.OO..........
	.......O.O.O.O.O.O.....OOOO
	.O..OO.O..O..O..OO.O.OO...O
	O.....OO...O.O.O...OO.....O
	O...OO.O.OO..O..O..O.OO..O.
	OOOO.....O.O.O.O.O.O.......
	..........OO.O..O..O.OO..O.
	.............O.....OO.....O
	.OO.........OO.OOO.O.OO...O
	..OOO.O...O....O.O.....OOOO
	..OO...O.O....O............
	..OO.O.O.O.O....O..........
	.....O.O..O.O...O..........
	....OO.O..OOO..O...........
	......OO....OOO............
	.......OOO.................
	........O..................
  `
}

export default Figures
