/* eslint-disable-next-line func-names */
module.exports = function (api) {
	api.cache(false);
	const presets = [
		[
			'@babel/preset-env',
			{
				modules: 'commonjs',
				corejs: {version: '3.24'},
				useBuiltIns: 'usage',
			},
		],
		['@babel/preset-typescript'],
		['@babel/preset-react'],
	];
	const plugins = [
		['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
		['@babel/plugin-proposal-class-properties'],
		['@babel/transform-runtime'],
	];
	return {
		presets,
		plugins,
	};
};
