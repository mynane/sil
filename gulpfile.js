const fs = require("fs");
const path = require("path");
const { src, dest, parallel } = require("gulp");
const glupClean = require("gulp-clean");
const babel = require("gulp-babel");
const jest = require("gulp-jest").default;

const filePath = path.resolve("./packages");
const files = fs.readdirSync(filePath);

const clean = async () => {
  return files.map(file => {
    return src(`${filePath}/${file}/lib/*`).pipe(glupClean());
  });
};

const build = async () => {
  return files.map(file => {
    return src(`${filePath}/${file}/src/**/*.js`)
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe(dest(`${filePath}/${file}/lib`));
  });
};

const test = async () => {
  return src(`**/*/__tests__`).pipe(
    jest({
      preprocessorIgnorePatterns: [`/lib/`, `/node_modules/`],
      automock: false,
      allowEmpty: true
    })
  );
}

exports.clean = clean
exports.test = test;
exports.build = build;
exports.default = parallel(clean, build, test);
