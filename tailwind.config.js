module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {enabled: true, content: [
    'src/**/*.ts',
    'src/**/*.tsx' ,
  ]},
  theme: {
    fontFamily: {
      "sans": ["nort", "sans-serif"],
      "display": ["nort", "sans-serif"],
      "body": ["nort", "sans-serif"]
    },
    extend: {
      height: {
        '3/4-screen': '75vh' 
      },
      inset: {
        '1/2': '50%',
        '50': '50'
      }
    },
  },
  variants: {},
  plugins: [],
}
