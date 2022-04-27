import React from "react"
import BoilingVerdict from "./BoilingVerdict";
import Temperature from "./TemperatureInput";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scales: {
                c: "Celsius",
                f: "Fahrenheit"
            },
            temperature: ''
        }
        this.handleTemperatureInput = this.handleTemperatureInput.bind(this);
    }

    handleTemperatureInput(value, kind) {
        if(kind == this.state.scales["f"]) {
            value = this.toCelsius(value);
        }
        this.setState({
            temperature: value
        })
    }

    toCelsius(f) {
        return (f - 32) * 5 / 9;
    }

    toFahrenheit(c) {
        c = parseFloat(c)
        if(isNaN(c)) {
            return ;
        }
        return (c * 9 / 5) + 32;
    }

    render() {
        return (
            <div>
                <Temperature scale={this.state.scales["c"]} temperatureValue={this.state.temperature} temperatureInput={this.handleTemperatureInput}/>
                <Temperature scale={this.state.scales["f"]} temperatureValue={this.toFahrenheit(this.state.temperature)} temperatureInput={this.handleTemperatureInput}/>
                <BoilingVerdict celsius={this.state.temperature} />
            </div>
        )
    }
}