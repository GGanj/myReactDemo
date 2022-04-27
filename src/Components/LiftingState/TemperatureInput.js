import React from "react"

export default class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.temperatureInput(e.target.value, this.props.scale);
    }

    render() {
        return (
            <fieldset>
                <legend>
                    Enter temperature in {this.props.scale}:
                </legend>
                <input value={this.props.temperatureValue} onChange={this.handleChange} />
            </fieldset>
        )
    }
}