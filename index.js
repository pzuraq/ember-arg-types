'use strict';

module.exports = {
  name: require('./package').name,
  setupPreprocessorRegistry(type, registry) {
    const plugin = this._buildPlugin();

    plugin.parallelBabel = {
      requireFile: __filename,
      buildUsing: '_buildPlugin',
      params: {}
    };

    registry.add('htmlbars-ast-plugin', plugin);
  },

  _buildPlugin() {
    const ArgTypeHelperTransform = require('./lib/arg-type-helper-transform');

    return {
      name: 'arg-type-path',
      plugin: ArgTypeHelperTransform,
      baseDir() {
        return __dirname;
      }
    };
  }
};
