import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
