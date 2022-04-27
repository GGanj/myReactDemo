import React from "react"

export default class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "a string"
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
        alert("atrical: " + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Atrical:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}
