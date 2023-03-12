import React, { useState } from "react"
import { Button, Modal } from "reactstrap"
import "../styles/global.css"

const Footer = () => {
  const handleClick = () => {
    window.alert("Thank you for your attention.")
  }

  return (
    <footer className="Footer">
      <h3 className="footerText">Gate42 Dev Conferance - Luca Longo & Giuseppe Tarallo</h3>
      <Button className="conclusionButton" onClick={handleClick}>
        Conclusion
      </Button>
    </footer>
  )
}

export default Footer
