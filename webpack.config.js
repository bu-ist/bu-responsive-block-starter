const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require('path');

/*
The configuration below allows for globbing.
This means we don't have to manually put in our SCSS.
It just works!

Webpack Merge takes the WordPress default and merges
our settings with it. This way, we can easily update
when we like.
*/

const globImporter = require('node-sass-glob-importer');
const { mergeWithRules } = require('webpack-merge');

const burfConfig = {
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
		}
	},
    module: {
		rules: [
			{
				test: /\.(sc|sa)ss$/,
				use: [
					{
						loader: require.resolve( 'sass-loader' ),
						options: {
							sassOptions: {
								webpackImporter: false,
								includePaths: ["src"],
								importer: globImporter()
							}
						},
					},
				],
			},
		],
	},
}


module.exports = mergeWithRules({
	module: {
	  rules: {
	    test: "match",
	    use: {
	      loader: "match",
	      options: "merge",
	    },
	  },
	},
})(defaultConfig, burfConfig);
