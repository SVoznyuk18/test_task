const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
};

module.exports = merge(commonConfig, devConfig);