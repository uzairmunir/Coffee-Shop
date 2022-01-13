import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./Menu.css"

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menus-grid">
        {items.map(({ node }) => {
          const pathToImage = getImage(node.image)
          return (
            <div className="menu-item-container" key={node.id}>
              <div className="row-1">
                <GatsbyImage
                  image={pathToImage}
                  alt={node.title}
                  className="item-img"
                />
              </div>
              <div className="row-2">
                <article>
                  <h3>{node.title}</h3>
                  <h4>${node.price}</h4>
                </article>
                <p>{node.description.description}</p>
                <button
                  className="cart-btn
                snipcart-add-item   "
                  data-item-id={node.id}
                  data-item-price={node.price}
                  data-item-name={node.title}
                  data-item-url="/"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
