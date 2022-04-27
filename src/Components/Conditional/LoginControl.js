import React from "react"

import LogBtn from "./LogBtn";
import Conditional from "../Conditional/Conditional";
import WarningBanner from "./WarningBanner";

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showWarning: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleWarning = this.handleWarning.bind(this);
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    handleWarning() {
        this.setState( (state) => {
            return {
                showWarning: !state.showWarning
            }
        })
    }

    render() {
        let btn = (
                this.state.isLoggedIn ? <LogBtn isLoggedIn={this.state.isLoggedIn} handleClick={this.handleLogoutClick}/> : <LogBtn isLoggedIn={this.state.isLoggedIn} handleClick={this.handleLoginClick}/>
            );
        if(this.state.isLoggedIn == null) {
            return null;
        }
        return (
            <>
            {btn}
            <LogBtn warnning={true} handleClick={this.handleWarning}/>
            <WarningBanner  showWarning={this.state.showWarning} />
            {this.state.showWarning == false && <Conditional isLoggedIn={this.state.isLoggedIn} />}
            </>
        );
    }
}