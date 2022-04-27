import React from "react"

export default function FancyBorder(props) {
    return (
        <div style={{
            border: "2px solid " + props.color, 
            margin: "10px"
        }}>
            {props.children}
        </div>
    )
}