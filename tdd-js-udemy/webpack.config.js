const path = require("path");

module.exports = {
  entry: "./src/app.js", // O ponto de entrada do seu aplicativo
  output: {
    filename: "bundle.js", // O nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // O diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use esta regra para arquivos .js
        exclude: /node_modules/, // Ignore a pasta node_modules
        use: {
          loader: "babel-loader", // Use o loader Babel
          options: {
            presets: ["@babel/preset-env"], // Use o preset env para transpilar ES6
          },
        },
      },
    ],
  },
};
