import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let config = {
  mode: 'development',
  entry: {
    carCamera: './src/carCamera.ts',
    playTime: './src/playTime.ts',
    remove5: './src/remove5.ts'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  watchOptions: {
    aggregateTimeout: 1500
  }
};

export default config;