/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
  },
  localePath: path.resolve('public/locales'),
}
