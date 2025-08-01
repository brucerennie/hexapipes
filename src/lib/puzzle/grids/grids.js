import { HexaGrid } from '$lib/puzzle/grids/hexagrid';
import { SquareGrid } from '$lib/puzzle/grids/squaregrid';
import { OctaGrid } from '$lib/puzzle/grids/octagrid';
import { EtratGrid } from '$lib/puzzle/grids/etratgrid';
import { CubeGrid } from '$lib/puzzle/grids/cubegrid';
import { TrihexaGrid } from '$lib/puzzle/grids/trihexagrid';
import { SnubSquareGrid } from '$lib/puzzle/grids/snubsquaregrid';
import { RhombitrihexaGrid } from '$lib/puzzle/grids/rhombitrihexagrid';
import { TriangularGrid } from '$lib/puzzle/grids/triangulargrid';

/**
 * @typedef {'hexagonal'|'square'|'octagonal'|'etrat'|'cube'|'trihexagonal'|'snubsquare'|'rhombitrihexagonal'|'triangular'} GridKind
 */

/**
 * @typedef {'hexagonal'|'hexagonal-wrap'|
 * 'square'|'square-wrap'|
 * 'octagonal'|'octagonal-wrap'|
 * 'etrat'|'etrat-wrap'|
 * 'cube'|'cube-wrap'|
 * 'trihexagonal'|'trihexagonal-wrap'|
 * 'snubsquare'|'snubsquare-wrap'|
 * 'rhombitrihexagonal'|'rhombitrihexagonal-wrap'|
 * 'triangular'|'triangular-wrap'|
 * } GridCategory
 */

/**
 * @typedef {Object} GridOptions
 * @property {GridKind} kind
 * @property {Number} width
 * @property {Number} height
 * @property {Boolean} wrap
 * @property {Number[]|undefined} tiles
 */

/**
 * Creates a grid of a specified type
 * @param {GridKind} kind
 * @param {Number} width
 * @param {Number} height
 * @param {boolean} wrap
 * @param {Number[]|undefined} tiles
 * @returns {import('$lib/puzzle/grids/abstractgrid').AbstractGrid}
 */
export function createGrid(kind, width, height, wrap, tiles = undefined) {
	let grid;
	if (kind === 'hexagonal') {
		grid = new HexaGrid(width, height, wrap, tiles);
	} else if (kind === 'octagonal') {
		grid = new OctaGrid(width, height, wrap, tiles);
	} else if (kind === 'square') {
		grid = new SquareGrid(width, height, wrap, tiles);
	} else if (kind === 'etrat') {
		grid = new EtratGrid(width, height, wrap, tiles);
	} else if (kind === 'cube') {
		grid = new CubeGrid(width, height, wrap, tiles);
	} else if (kind === 'trihexagonal') {
		grid = new TrihexaGrid(width, height, wrap, tiles);
	} else if (kind === 'snubsquare') {
		grid = new SnubSquareGrid(width, height, wrap, tiles);
	} else if (kind === 'rhombitrihexagonal') {
		grid = new RhombitrihexaGrid(width, height, wrap, tiles);
	} else if (kind === 'triangular') {
		grid = new TriangularGrid(width, height, wrap, tiles);
	} else {
		throw `Unknown grid kind ${kind}`;
	}
	return grid;
}

/** @type {GridKind[]} */
export const gridKinds = [
	'hexagonal',
	'square',
	'octagonal',
	'etrat',
	'cube',
	'trihexagonal',
	'snubsquare',
	'rhombitrihexagonal',
	'triangular'
];

export const gridInfo = {
	hexagonal: {
		title: 'Hexagonal',
		url: 'hexagonal',
		wrap: true,
		exampleGrid: new HexaGrid(3, 3, false),
		exampleTiles: [32, 34, 32, 50, 56, 8, 12, 20, 16],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	square: {
		title: 'Square',
		url: 'square',
		wrap: true,
		exampleGrid: new SquareGrid(3, 3, false),
		exampleTiles: [9, 13, 8, 10, 6, 12, 12, 4, 1],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	octagonal: {
		title: 'Octagonal',
		url: 'octagonal',
		wrap: true,
		exampleGrid: new OctaGrid(3, 3, false),
		exampleTiles: [32, 64, 192, 18, 68, 66, 5, 200, 128, 130, 168, 0, 40, 8, 0, 0, 0, 0],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	etrat: {
		title: 'Elongated Triangular',
		url: 'etrat',
		wrap: true,
		exampleGrid: new EtratGrid(3, 3, false),
		exampleTiles: [0, 9, 2, 0, 7, 6, 0, 2, 6, 9, 6, 0, 12, 7, 0, 4, 2, 0],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	cube: {
		title: 'Cube',
		url: 'cube',
		wrap: true,
		exampleGrid: new CubeGrid(5, 5, false),
		exampleTiles: [
			0, 0, 0, 3, 2, 12, 13, 4, 1, 7, 6, 1, 7, 1, 11, 2, 12, 11, 0, 0, 0, 6, 13, 4, 4, 3, 5
		],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	trihexagonal: {
		title: 'Trihexagonal',
		url: 'trihexagonal',
		wrap: true,
		exampleGrid: new TrihexaGrid(3, 3, false),
		exampleTiles: [33, 32, 1, 13, 0, 4, 37, 34, 0, 2, 10, 5],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	snubsquare: {
		title: 'Snub Square',
		url: 'snubsquare',
		wrap: true,
		exampleGrid: new SnubSquareGrid(4, 4, false),
		exampleTiles: [2, 4, 5, 12, 5, 4, 7, 5, 12, 5, 6, 4, 14, 7, 5, 5, 6, 0, 11, 5, 1, 9, 3, 1],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	rhombitrihexagonal: {
		title: 'Rhombitrihexagonal',
		url: 'rhombitrihexagonal',
		wrap: true,
		exampleGrid: new RhombitrihexaGrid(3, 3, false),
		exampleTiles: [
			0, 84, 2, 0, 0, 0, 137, 68, 66, 136, 4, 8, 0, 0, 8, 34, 36, 0, 0, 0, 0, 0, 36, 40
		],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	},
	triangular: {
		title: 'Triangular',
		url: 'triangular',
		wrap: true,
		exampleGrid: new TriangularGrid(3, 3, false),
		exampleTiles: [9, 0, 9, 5, 9, 4, 4, 5, 13, 5, 0, 3, 1, 0, 12, 6, 8, 7],
		sizes: [5, 7, 10, 15, 20, 30, 40]
	}
};

/**
 * @param {any[]} array
 * @returns
 */
function randomChoice(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function randomTotal() {
	return Math.floor(250 + 100 * Math.random());
}

/**
 * Creates a random grid for setting a daily puzzle
 * @returns {import('$lib/puzzle/grids/abstractgrid').AbstractGrid}
 */
export function randomGrid() {
	let kind = 'hexagonal';
	if (Math.random() < 0.4) {
		kind = randomChoice([
			'octagonal',
			//'etrat',  // too hard
			//'square', // too easy
			'cube',
			'trihexagonal'
		]);
	}
	if (kind === 'hexagonal') {
		const total = randomTotal();
		let width = Math.floor(Math.sqrt(total));
		width += 1 - (width % 2); // odd sizes are better
		const wrap = Math.random() < 0.5;
		const grid = new HexaGrid(width, width, wrap);
		let shape;
		if (wrap) {
			shape = randomChoice([
				'half-wrap-horizontal',
				'half-wrap-vertical',
				'round-hole'
				// 'hexagon',
				// 'hourglass',
				// 'triangle',
				// 'donut'
			]);
		} else {
			shape = randomChoice(['hexagon', 'triangle', 'hourglass', 'donut']);
		}
		grid.useShape(shape);
		return grid;
	} else if (kind === 'octagonal') {
		const total = 0.4 * randomTotal();
		let width = Math.floor(Math.sqrt(total));
		const wrap = Math.random() < 0.5;
		const grid = new OctaGrid(width, width, wrap);
		let shape;
		if (wrap) {
			shape = randomChoice(['half-wrap-horizontal', 'half-wrap-vertical', 'hole']);
		} else {
			shape = randomChoice(['octagon', 'hole', 'butterfly', 'donut']);
		}
		grid.useShape(shape);
		return grid;
	} else if (kind === 'cube') {
		const total = randomTotal();
		let width = Math.floor(Math.sqrt(total));
		const wrap = Math.random() < 0.5;
		const scale = wrap ? 0.58 : 0.67;
		for (let i = 0; i < 3; i++) {
			if (Math.round(scale * width) % 2 === 1) {
				break;
			}
			width += 1;
		}
		const grid = new CubeGrid(width, width, wrap);
		let shape;
		if (wrap) {
			shape = randomChoice([
				'half-wrap-horizontal',
				'half-wrap-vertical',
				'round-hole'
				// 'hexagon',
				// 'hourglass',
				// 'triangle',
				// 'donut'
			]);
		} else {
			shape = randomChoice(['hexagon', 'triangle', 'hourglass', 'donut']);
		}
		grid.useShape(shape);
		return grid;
	} else if (kind === 'trihexagonal') {
		const total = 1.4 * randomTotal();
		let w = Math.floor(Math.sqrt(total / 9));
		const wrap = false;
		w += 1 - (w % 2);
		const width = Math.round(w * Math.sqrt(3));
		const grid = new TrihexaGrid(width, width, wrap);
		let shape = randomChoice(['hexagon', 'triangle', 'hourglass', 'donut']);
		grid.useShape(shape);
		return grid;
	} else {
		const total = randomTotal();
		const width = Math.floor(Math.sqrt(total));
		const wrap = Math.random() > 0.5;
		return createGrid(kind, width, width, wrap);
	}
}
