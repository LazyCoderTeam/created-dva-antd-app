const rewireMobX = require('react-app-rewire-mobx');
const rewirePreact = require('react-app-rewire-preact');
const rewireCssModules = require('react-app-rewire-css-modules');

const { injectBabelPlugin, compose } = require('react-app-rewired');


/* config-overrides.js */
module.exports = function override(config, env) {

  const rewires = compose(
    // rewireLess,
    rewireCssModules,
    // rewirePreact,
    // rewireMobX
  );


  // config = injectBabelPlugin('emotion/babel', config)

  //config = rewireCssModules(config, env);
  config = rewires(config, env);

  return config;
}
