import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/BackgroundSection"
import Contact from "../components/Contact"
import Info from "../components/Info"
import Layout from "../components/Layout"
import Menu from "../components/Menu"

const index = ({ data }) => {
  return (
    <Layout>
      <BackgroundSection
        title="Regular Joe"
        img={data?.img.childImageSharp.fluid}
        styleClass="background-img"
      />
      <Info title="Our Story" />
      <Menu items={data?.menu?.edges} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    img: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItems {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`

export default index
