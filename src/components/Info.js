import React from "react"
import Title from "./Title"
import "../styles/style.css"
import { Link } from "gatsby"

const Info = ({ title }) => {
  return (
    <div className="info-section">
      <Title title={title} />
      <p className="info-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet
        labore tempore delectus voluptate inventore? Iste tempore molestias
        eaque rem quis blanditiis, facilis excepturi, magnam, itaque earum sed
        fuga quia? At autem corporis ipsam libero laboriosam! Unde autem
        nesciunt beatae, facere illum rerum corporis nihil, sint, commodi in
        debitis quia.
      </p>
      <button className="info-btn">
        <Link to="/about">About Page</Link>
      </button>
    </div>
  )
}

export default Info
