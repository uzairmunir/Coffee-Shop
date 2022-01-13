import React from "react"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            rows="5"
            placeholder="your description here....."
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default Contact
