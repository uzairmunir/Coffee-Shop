import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ title, img, children, styleClass }) => {
  return (
    <BackgroundImage fluid={img} className={styleClass}>
      <h1
        style={{ color: "white", fontSize: "3rem", textTransform: "uppercase" }}
      >
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
