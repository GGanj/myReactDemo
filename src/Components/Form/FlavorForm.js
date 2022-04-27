import React from "react"

export default class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "coconut"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("favorite:" + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    favorite:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="frapefruit">frapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut" selected>coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}