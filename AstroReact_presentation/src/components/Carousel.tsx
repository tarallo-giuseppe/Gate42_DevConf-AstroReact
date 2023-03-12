import React, { useState } from "react"
import "../styles/global.css"

const items = [
  "https://uploads.codesandbox.io/uploads/user/a8c10063-f60d-4631-83dc-185b1c9cd13e/iN9s-thumbnail.png",
  "https://pbs.twimg.com/media/FPRN6BCWYBQ5eiD?format=jpg&name=4096x4096",
  "https://wallpaperaccess.com/full/3909258.jpg",
]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const length = 3

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  return (
    <div>
      <button onClick={handlePrevious} className="previousButton">
        <strong>{"<"}</strong>
      </button>
      <button onClick={handleNext} className="nextButton">
        <strong>{">"}</strong>
      </button>
      <img src={items[index]} className="carousel" />
    </div>
  )
}

export default Carousel
