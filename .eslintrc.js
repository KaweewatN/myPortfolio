module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["react-app", "react-app/jest"],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
};
