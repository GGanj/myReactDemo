import React from "react"

class EventHandle extends React.Component {

    handleClick(e) {
        e.preventDefault();
        console.log("The link was clicked.")
    }
    render() {
        return <a href="#" onClick={this.handleClick}>
            Click me
        </a>
    }
}

export default EventHandle;