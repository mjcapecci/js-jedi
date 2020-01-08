const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js']
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 20000,
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.mp3$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: 'audio/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: 'animation/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.scss', 'png', '.mp3', '.jpg', '.gif']
  }
};
