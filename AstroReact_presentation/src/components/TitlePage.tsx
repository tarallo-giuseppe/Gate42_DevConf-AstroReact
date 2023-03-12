import React, { useState } from "react"
import { Card } from "reactstrap"
import "../styles/global.css"

const fonts = ["arial", "courier", "impact", "Garamond", "Papyrus", "Brush Script MT"]

const TitlePage = () => {
  const [currentFont, setFont] = useState("arial")

  const handleClick = () => {
    setFont(fonts[fonts.indexOf(currentFont) + 1])
  }

  return (
    <div>
      <h1 style={{ fontFamily: currentFont, fontSize: "200px", textAlign: "center", color: "white" }}>ASTRO</h1>

      <Card className="TitleCard">
        <h1 style={{ fontFamily: "arial", position: "absolute", bottom: "-10px", right: "150px", fontSize: "25px" }}>
          Astro: Build a website with React
        </h1>
      </Card>

      <button className="Button" onClick={handleClick}>
        Change style
      </button>
    </div>
  )
}

export default TitlePage
