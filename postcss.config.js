const purgecss = require('@fullhuman/postcss-purgecss')
const purgeOptions = {
  content: ['./**/*.html', './**/*.js', './**/*.css', './**/*.vue']
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? purgecss(purgeOptions) : null
  ]
}
