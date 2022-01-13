import React from "react"

const Title = ({ title }) => {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        fontSize: "1.5rem",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  )
}

export default Title
