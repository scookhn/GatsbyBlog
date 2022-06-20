module.exports = {
  siteMetadata: {
      title: 'Kindle Pulp',
      author: 'Steve Cook'
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-remove-trailing-slashes`,
      'gatsby-plugin-sass',
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://gmail.us18.list-manage.com/subscribe/post?u=2be4858ccb0f7a016f2d92d61&amp;id=a38b8ca2a9'            
        }
      }
  ]
}