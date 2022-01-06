module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

// vue-tour doesn't work with purgecss
// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//     process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
//       content: [
//         './src/**/*.vue',
//         './src/**/*.js',
//         './public/index.html'
//       ],
//       defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
//       // defaultExtractor: content => content.match(/[A-Za-z0–9-_/:]*[A-Za-z0–9-_/]+/g) || []
//     })
//   ]
// }

// const IN_PRODUCTION = process.env.NODE_ENV === 'production'
//
// module.exports = {
//   plugins: [
//     require('postcss-preset-env')({ stage: 0 }),
//     require('tailwindcss')(),
//     IN_PRODUCTION && require('@fullhuman/postcss-purgecss')({
//       content: ['./public/**/*.html', './src/**/*.vue'],
//       defaultExtractor (content) {
//         const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
//         return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
//       },
//       whitelist: [],
//       whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/]
//     }),
//     require('autoprefixer')()
//   ]
// }
