import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        color: "#efefef",
        alignItems: "center",
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "center",
        marginBottom: "0",
        fontFamily: "sans-serif",
      }}
    >
      <h3>all rights reserved &copy; {new Date().getFullYear().toString()}</h3>
    </div>
  )
}

export default Footer
