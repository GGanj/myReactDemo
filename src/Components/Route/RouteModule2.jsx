import React from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"

import data from "./data.json"

export default class RouteModule2 extends React.Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <nav style={{borderRight: "solid 1px", padding: "1rem"}}>
                    {data.map((item) => {
                        return (
                            <Link style={{display: "block", margin: "1rem"}} key={item.number} to={`/route2/${item.number}`}>
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        )
    }
}