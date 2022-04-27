import React from "react"

function  Welcome(props) {
    const dataInfo = (
        <div>
          <h2>Stuty {props.title}</h2>
          <h3>It is {new Date().toLocaleTimeString()}</h3>
        </div>
      )
    return dataInfo;
}

export default Welcome;