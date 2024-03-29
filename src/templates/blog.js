import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

export const query = graphql`
query ($slug: String) {
  markdownRemark (fields: {slug : { eq : $slug}})
  {
    frontmatter {
      title
      date
    }
    html
  }
}
`
const blog = (props) => {
  console.log(props);
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default blog