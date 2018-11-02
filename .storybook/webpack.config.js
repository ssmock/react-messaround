const path = require('path');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    //include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      customize: require.resolve(
        'babel-preset-react-app/webpack-overrides'
      ),
      // @remove-on-eject-begin
      babelrc: false,
      configFile: false,
      presets: [require.resolve('babel-preset-react-app')],
      // Make sure we have a unique cache identifier, erring on the
      // side of caution.
      // We remove this when the user ejects because the default
      // is sane and uses Babel options. Instead of options, we use
      // the react-scripts and babel-preset-react-app versions.
      cacheIdentifier: getCacheIdentifier('development', [
        'babel-plugin-named-asset-import',
        'babel-preset-react-app',
        'react-dev-utils',
        'react-scripts',
      ]),
      // @remove-on-eject-end
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
              },
            },
          },
        ],
      ],
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
      // Don't waste time on Gzipping the cache
      cacheCompression: false,
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};