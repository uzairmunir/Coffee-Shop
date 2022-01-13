import { graphql } from "gatsby"
import React from "react"
import BackgroundSection from "../components/BackgroundSection"
import Info from "../components/Info"
import Layout from "../components/Layout"

const about = ({ data }) => {
  return (
    <Layout>
      <BackgroundSection
        img={data?.img.childImageSharp.fluid}
        title="About Page"
        styleClass="about-img"
      />
      <Info title="About Us" />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default about
