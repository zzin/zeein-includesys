/**
 * BabelJS config file
 * as configured in package.json under babel.extends
 *
 * @param  api
 * @docs Babel Webpack loader: https://webpack.js.org/loaders/babel-loader/
 * @since 1.0.0
 */
module.exports = (api) => {
	return {
		plugins: [],
		presets: [
			[
				'@babel/preset-env',
				{
					corejs: '3.1.3',
					useBuiltIns: 'entry',
					// caller.target will be the same as the target option from webpack
					// eslint-disable-next-line prettier/prettier
					targets: api.caller((caller) => caller && caller.target === 'node')
						? { node: 'current' }
						: { chrome: '58', ie: '11' },
				},
			],
		],
	};
};
