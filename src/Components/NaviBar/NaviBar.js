import React from "react";
import { Link } from "react-router-dom"

import "./NaviBar.scss"


class NaviBar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let elemList = document.getElementsByClassName("naviBtn");
    for(let i = 0; i < elemList.length; i++) {
      elemList[i].onclick = (event) => {
        this.props.onSelected(event.target.value);
      };
    }
  }

  render() {
    return (
      <div className="naviBar">
        <Link to="/welcome">
          <button className={"naviBtn" + (this.props.currContent === "init" ? " btnSelected" : "")} value="init">Welcome</button>
        </Link>
        <Link to="/lifeCycle">
          <button className={"naviBtn" + (this.props.currContent === "lifeCycle" ? " btnSelected" : "")} value="lifeCycle">LifeCycle</button>
        </Link>
        <Link to="/eventHandle">
          <button className={"naviBtn" + (this.props.currContent === "eventHandle" ? " btnSelected" : "")} value="eventHandle">EventHandle</button>
        </Link>
        <Link to="/conditional">
          <button className={"naviBtn" + (this.props.currContent === "conditional" ? " btnSelected" : "")} value="conditional">Conditional</button>
        </Link>
        <Link to="/list&key">
          <button className={"naviBtn" + (this.props.currContent === "list&key" ? " btnSelected" : "")} value="list&key">List&Key</button>
        </Link>
        <Link to="/form">
          <button className={"naviBtn" + (this.props.currContent === "form" ? " btnSelected" : "")} value="form">Form</button>
        </Link>
        <Link to="/liftingState">
          <button className={"naviBtn" + (this.props.currContent === "liftingState" ? " btnSelected" : "")} value="liftingState">LiftingState</button>
        </Link>
        <Link to="/composition">
          <button className={"naviBtn" + (this.props.currContent === "composition" ? " btnSelected" : "")} value="composition">Composition</button>
        </Link>
        <Link to="/i18n">
          <button className={"naviBtn" + (this.props.currContent === "i18n" ? " btnSelected" : "")} value="i18n">I18n</button>
        </Link>
        <Link to="/splite">
          <button className={"naviBtn" + (this.props.currContent === "splite" ? " btnSelected" : "")} value="splite">Spliete</button>
        </Link>
        <Link to="/route1">
          <button className={"naviBtn" + (this.props.currContent === "route1" ? " btnSelected" : "")} value="route1">Route1</button>
        </Link>
        <Link to="/route2">
          <button className={"naviBtn" + (this.props.currContent === "route2" ? " btnSelected" : "")} value="route2">Route2</button>
        </Link>
        <Link to="/context">
          <button className={"naviBtn" + (this.props.currContent === "context" ? " btnSelected" : "")} value="context">Context</button>
        </Link>
        <Link to="/errorBoundary">
          <button className={"naviBtn" + (this.props.currContent === "errorBoundary" ? " btnSelected" : "")} value="errorBoundary">ErrorBoundary</button>
        </Link>
        <Link to="/ref">
          <button className={"naviBtn" + (this.props.currContent === "ref" ? " btnSelected" : "")} value="ref">Ref</button>
        </Link>
        <Link to="/hoc">
          <button className={"naviBtn" + (this.props.currContent === "hoc" ? " btnSelected" : "")} value="hoc">HOC</button>
        </Link>
        <Link to="/hook">
          <button className={"naviBtn" + (this.props.currContent === "hook" ? " btnSelected" : "")} value="hook">Hook</button>
        </Link>
      </div>
    )
  }
}

export default NaviBar;