module.exports = {
    mode: 'development',
    entry: './src/index.tsx', // 最初に読み込むファイル
    output: { // build時に出力する先
      path: `${__dirname}/build`,
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [ // importできるファイルの拡張子
        '.ts', '.tsx', '.js', '.json'
      ],
    },
    devtool: 'inline-source-map',  // sourcemapを使えるようにする
    devServer: {  // 開発用のローカルサーバの設定
        contentBase: "./build",
        port: "8888"
    }
  };