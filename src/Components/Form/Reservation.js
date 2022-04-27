import React from "react"

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuest: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target  = event.target;
        const name = target.name;
        const value = name === "isGoing" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    practicipate:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    number:
                    <input name="numberOfGuest" type="number" value={this.state.numberOfGuest} onChange={this.handleInputChange} />
                </label>
                <br />
                <input value="11" />
                <input value={11} />
                <input value={null} />
            </form>
        )
    }
}