import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import * as FooterStyles from '../components/footer.module.scss'

function Footer() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                    author
         }
      }
    }    
    `)
  return (
   <footer className={FooterStyles.footer}>
       <p>Created by {data.site.siteMetadata.author} Copyright © 2020</p>
   </footer>
  )
}

export default Footer 