module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F25F3A',
      'secondary': '#242D52',
      'danger': '#e3342f',
     }),
    // colors: {
    //   'primary': '#F25F3A',
    //   'secondary': '#242D52',
    // },
    fontFamily: {
      'display': ['Public sans'],
      'body': ['Public sans'],
     },
    extend: {
       backgroundImage: theme => ({
        'mobile': "url('~@/assets/images/bg-simplify-section-mobile.svg')",
        'desktop': "url('~@/assets/images/bg-simplify-section-desktop.svg')",
        'tablet': "url('~@/assets/images/bg-tablet-pattern.svg')",
        }),
        width: {
          '2/7': '23%',
         
        }
    },
  },
  variants: {},
  plugins: [],
}
