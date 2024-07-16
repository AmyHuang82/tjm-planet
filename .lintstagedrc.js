const path = require('path')

function parseFiles(filenames) {
  return filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')
}

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${parseFiles(filenames)}`
}

function buildStylelintCommand(filenames) {
  return `stylelint --fix --quiet ${parseFiles(filenames)}`
}

module.exports = {
  '*.{js,jsx}': [buildEslintCommand],
  '*.{css,scss}': [buildStylelintCommand],
}
