const fs = require('fs')
const path = require('path')
const { src, dest, parallel, watch, series } = require('gulp')
const glupClean = require('gulp-clean')
const babel = require('gulp-babel')
const jest = require('gulp-jest').default

const filePath = path.resolve('./packages')
const files = fs.readdirSync(filePath)

/**
 * 清除lib中内容
 */
const clean = async () => {
  return files.map((file) => {
    return src(`${filePath}/${file}/lib/*`).pipe(glupClean())
  })
}

function getTask(file) {
  return src(`${filePath}/${file}/src/**/*.ts`)
    .pipe(
      babel({
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: ['@babel/plugin-transform-async-to-generator'],
      })
    )
    .pipe(dest(`${filePath}/${file}/lib`))
}

/**
 * 构建ts文件
 */
const build = async () => {
  var temp = []
  files.forEach((file) => {
    const task = getTask(file)

    temp.push(task)
  })

  return temp
}

/**
 * 单元测试
 */
const test = async () => {
  return src(`packages/**/*/__tests__`).pipe(
    jest({
      preprocessorIgnorePatterns: [`/lib/`, `/node_modules/`],
      automock: false,
      allowEmpty: true,
    })
  )
}

/**
 * 监听文件变化
 */
const watchFiles = async () => {
  const watcher = watch(`packages/**/*/src/**/*.ts`)

  watcher.on('all', function(stats, path) {
    console.log(stats, path)
    const matchs = path.match(/^packages\/(.*)\/src\/.*.ts$/)
    getTask(matchs[1])
  })
}

exports.clean = clean
exports.test = test
exports.build = build
exports.watch = watchFiles
exports.default = parallel(clean, build, test)
