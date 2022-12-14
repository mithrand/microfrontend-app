/* eslint-disable no-console */
const webpackErrorHandler =
  (onSucess = () => {}) =>
  (err, stats) => {
    if (err) {
      console.error(err.stack || err)
      if (err.details) {
        console.error(err.details)
      }
      return
    }

    const info = stats.toJson()

    if (stats.hasErrors()) {
      console.error(info.errors)
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings)
    }

    console.log(stats.toString())
    onSucess()
  }

module.exports = {
  webpackErrorHandler,
}
