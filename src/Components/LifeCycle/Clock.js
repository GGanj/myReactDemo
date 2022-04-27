import React from "react"

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString(),
            counter: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            this.setState({
                date: new Date().toLocaleTimeString(),
            });
            this.setState( (state, props) => {
                return {
                    counter: state.counter + props.increment
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
    render() {
        return (
            <div>
                <h1>state & lifeCycle</h1>
                <h2>it is {this.state.date}</h2>
                <h2>counter {this.state.counter}</h2>
            </div>
        )
    }
}

export default Clock;