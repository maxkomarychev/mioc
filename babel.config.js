module.exports = {
  //   presets: ["@babel/preset-env"],
  plugins: [
    // ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: false }],
    // "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  sourceMaps: "inline",
  retainLines: true,
};
