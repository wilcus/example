const paths = require('./paths');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
        components: 'src/components/**/[A-Z]*.{ts,tsx}',
	webpackConfig: {
		module: {
			loaders: [
				{
					    test: /\.(ts|tsx)$/,
                                            include: paths.appSrc,
					    loader: 'ts-loader',
			        },
				  {
				    test: /\.module\.css$/,
				    use: [
				      require.resolve('style-loader'),
				      {
					loader: require.resolve('typings-for-css-modules-loader'),
					options: {
					  importLoaders: 1,
					  modules: true,
					  namedExport: true,
					  localIdentName: '[name]__[local]__[hash:base64:5]'
					},
				      },
				    ],
				  },
			]
		}
	},
};
