const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#f9b17a;@table-row-hover-bg:#f9b17a'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};