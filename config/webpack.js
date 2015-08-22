import Path from 'path';
import webpack from 'webpack';

export default {
  target: 'web',
  cache: false,
  entry: ['./app/client'],
  output: {
    path: Path.join(__dirname, "../public/dist"),
    filename: 'client.js',
    chunkFilename: '[name].[id].js',
    publicPath: 'public/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}})
  ],
  module: {
    loaders: [
      {
        include: /\.json$/,
        loaders: ['json-loader']
      },
      {
        include: /\.js$/,
        loaders: ['babel-loader?stage=0&optional=runtime'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  node: {
    __dirname: true,
    fs: 'empty'
  }
};
