import { terser } from 'rollup-plugin-terser'

export default [
	{
		input: ['src/custom-bottom-nav.js', 'src/custom-bottom-nav-item.js'],
		output: {
			dir: 'dist',
			format: 'es',
			sourcemap: false
		}
	}, {
		input: ['src/custom-bottom-nav.js', 'src/custom-bottom-nav-item.js'],
		output: {
			dir: 'dist/min',
			format: 'es',
			sourcemap: false
		},
		plugins: [ terser() ]
	}
];
