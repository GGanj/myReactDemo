import React from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"

export default class RouteModule extends React.Component {
    render() {
        return (
            <div>
                router, {this.props.name}
                <br />
                <Link to="/sub1">sub1</Link> &nbsp;
                <Link to="sub2">sub2</Link> &nbsp;
                <Link to="sub3">sub3</Link> &nbsp;
                <Link to="/route1/sub4">sub4</Link>
                <hr />
                <br />outlet before <br /><br />
                <Outlet />
                <br />outlet after <br /><br />
                <hr />
            </div>
        )
    }
}