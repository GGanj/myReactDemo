import React from "react"

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [
                {
                    id : 1,
                    title : "Hello World",
                    context : "Welcome to learning React!"
                },
                {
                    id : 2,
                    title : "Installation",
                    context : "You can install React from npm."
                }
            ]
        };
    }

    render() {
        const sideBar = (
            <ul>
                {this.state.posts.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        )
        const content = this.state.posts.map((item) => {
            return (
                <div key={item.id}>
                    <h3>
                        {item.title}
                    </h3>
                    <p>
                        {item.context}
                    </p>
                </div>
            )
        })

        return (
            <div>
                {sideBar}
                <hr />
                {content}
            </div>
        )
    }
}