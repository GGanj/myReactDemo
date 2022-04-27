import React from "react"

export default class NumberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: [1, 2, 3, 4, 5]
        }
    }

    render() {
        return (
            <ul>
                {this.state.number.map((item) => {
                    return (
                        <li key={item.toString()}>{item}</li>
                    )
                })}
            </ul>
        )
    }
}