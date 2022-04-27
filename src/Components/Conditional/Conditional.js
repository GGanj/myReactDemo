import React from "react"

export default class Conditional extends React.Component {
    userGreeting(props) {
        return <h1>Welcome back!</h1>
    }

    guestGreeting(props) {
        return <h1>Please sign in</h1>
    }

     render() {
         if(this.props.isLoggedIn) {
             return this.userGreeting();
         }
         return this.guestGreeting();
     }
}