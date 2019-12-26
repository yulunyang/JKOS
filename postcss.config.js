module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  },
  loaders: [
    {
      test: require.resolve('jquery'),
      loader: 'expose?jQuery!expose?$'
    }
  ]
}
