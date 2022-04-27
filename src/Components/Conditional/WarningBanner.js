import React from "react"

export default class WarningBanner extends React.Component {
    render() {
        if(!this.props.showWarning) {
            return null;
        }
        return (
            <div>
                WARNING!
            </div>
        )
    }
}