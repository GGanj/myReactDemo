import React from "react"

export default class LogBtn extends React.Component {
    render() {
        let btnStr = this.props.isLoggedIn ? "Logout" : "Login";
        if(this.props.warnning) {
            btnStr = "Warning"
        }
        return (
            <button onClick={this.props.handleClick}>
                {btnStr}
            </button>
        )
    }
}