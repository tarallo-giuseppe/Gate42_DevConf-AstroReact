import React, { useState } from "react"
import { Card } from "reactstrap"
import "../styles/global.css"

const Cards = () => {
  return (
    <div>
      <h1 className="prosText">REACT PROS</h1>
      <Card className="Card" style={{ position: "absolute", bottom: "-1070px", left: "150px" }}>
        <strong style={{ fontFamily: "arial", position: "absolute", left: "0px", top: "120px" }}>
          1. React is easy to learn and use. ReactJS is much easier to learn and use. It comes with a good supply of
          documentation, tutorials, and training resources. Any developer who comes from a JavaScript background can
          easily understand and start creating web apps using React in a few days.
        </strong>
      </Card>
      <Card className="Card" style={{ position: "absolute", bottom: "-1070px", left: "515px" }}>
        <strong style={{ fontFamily: "arial", position: "absolute", top: "73px", left: "50px" }}>
          {" "}
          2. Reusable Components.
        </strong>
        <strong style={{ fontFamily: "arial", position: "absolute", left: "0px", top: "95px" }}>
          A ReactJS web application is made up of multiple components, and each component has its own logic and
          controls. These components are responsible for outputting a small, reusable piece of HTML code which can be
          reused wherever you need them. The reusable code helps to make your apps easier to develop and maintain. These
          Components can be nested with other components to allow complex applications to be built of simple building
          blocks.
        </strong>
      </Card>
      <Card className="Card" style={{ position: "absolute", bottom: "-1070px", right: "160px" }}>
        <strong style={{ fontFamily: "arial", position: "absolute", top: "73px", left: "35px" }}>
          3. Performance Enhancement.
        </strong>
        <strong style={{ fontFamily: "arial", position: "absolute", left: "0px", top: "95px" }}>
          ReactJS improves performance due to virtual DOM. The DOM is a cross-platform and programming API which deals
          with HTML, XML or XHTML. ReactJS introduced virtual DOM. The React Virtual DOM exists entirely in memory and
          is a representation of the web browser's DOM. Due to this, when we write a React component, we did not write
          directly to the DOM. Instead, we are writing virtual components that react will turn into the DOM, leading to
          smoother and faster performance.
        </strong>
      </Card>
      <h1 className="consText">REACT CONS</h1>
      <Card className="Card" style={{ position: "absolute", bottom: "-1650px", left: "150px" }}>
        <strong style={{ fontFamily: "arial", position: "absolute", top: "103px", left: "25px" }}>
          1. The high pace of development.
        </strong>
        <strong style={{ fontFamily: "arial", position: "absolute", left: "0px", top: "125px" }}>
          Since the environment continually changes so fast, some of the developers not feeling comfortable to relearn
          the new ways of doing things regularly. It may be hard for them to adopt all these changes with all the
          continuous updates. They need to be always updated with their skills and learn new ways of doing things.
        </strong>
      </Card>
      <Card className="Card" style={{ position: "absolute", bottom: "-1650px", left: "515px" }}>
        <strong style={{ fontFamily: "arial", position: "absolute", top: "104px", left: "79px" }}>
          2. JSX as a barrier.
        </strong>
        <strong style={{ fontFamily: "arial", position: "absolute", left: "0px", top: "125px" }}>
          ReactJS uses JSX. It's a syntax extension that allows HTML with JavaScript mixed together. This approach has
          its own benefits, but some members of the development community consider JSX as a barrier, especially for new
          developers. Developers complain about its complexity in the learning curve.
        </strong>
      </Card>
      <Card className="Card" style={{ position: "absolute", bottom: "-1650px", right: "160px" }}>
        <strong style={{ fontFamily: "arial", position: "absolute", top: "65px", left: "30px" }}>
          3. Not a full-featured framework
        </strong>
        <strong style={{ fontFamily: "arial", position: "absolute", left: "0px", top: "88px" }}>
          Even though React is a rich JavaScript library with a set of interactive and useful features required for
          creating large scale applications, developers do not enjoy what they can have in a fully featured framework
          such as Angular (another popular JS Framework). If you look at the MVC (Model View Controller) architecture,
          React only handles the view part. For Controller and Model you need additional libraries, and tools. This can
          result in poor structure of code, and its patterns.
        </strong>
      </Card>
    </div>
  )
}

export default Cards
