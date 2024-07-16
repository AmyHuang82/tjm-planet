const path = require('path')

function parseFilesString(filenames, separator) {
  return filenames.map((f) => path.relative(process.cwd(), f)).join(separator)
}

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${parseFilesString(filenames, ' --file ')}`
}

function buildStylelintCommand(filenames) {
  return `stylelint --fix --quiet ${parseFilesString(filenames, ' ')}`
}

module.exports = {
  '*.{js,jsx}': [buildEslintCommand],
  '*.{css,scss}': [buildStylelintCommand],
}
