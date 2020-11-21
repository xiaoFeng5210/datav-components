const path = require('path')
const resolve = require('rollup-plugin-node-resolve')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist/index.js')

module.exports = {
    // 入口文件
    input: inputPath,
    output: {
        file: outputPath,
        format: 'umd',
        name: 'Data-view'
    },
    plugins: [
        resolve()
    ]
}