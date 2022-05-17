import React from "react";
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
        <button className={"naviBtn" + (this.props.currContent === "init" ? " btnSelected" : "")} value="init">Welcome</button>
        <button className={"naviBtn" + (this.props.currContent === "lifeCycle" ? " btnSelected" : "")} value="lifeCycle">LifeCycle</button>
        <button className={"naviBtn" + (this.props.currContent === "eventHandle" ? " btnSelected" : "")} value="eventHandle">EventHandle</button>
        <button className={"naviBtn" + (this.props.currContent === "conditional" ? " btnSelected" : "")} value="conditional">Conditional</button>
        <button className={"naviBtn" + (this.props.currContent === "list&key" ? " btnSelected" : "")} value="list&key">List&Key</button>
        <button className={"naviBtn" + (this.props.currContent === "form" ? " btnSelected" : "")} value="form">Form</button>
        <button className={"naviBtn" + (this.props.currContent === "liftingState" ? " btnSelected" : "")} value="liftingState">LiftingState</button>
        <button className={"naviBtn" + (this.props.currContent === "composition" ? " btnSelected" : "")} value="composition">Composition</button>
        <button className={"naviBtn" + (this.props.currContent === "i18n" ? " btnSelected" : "")} value="i18n">I18n</button>
        <button className={"naviBtn" + (this.props.currContent === "splite" ? " btnSelected" : "")} value="splite">Spliete</button>
        <button className={"naviBtn" + (this.props.currContent === "context" ? " btnSelected" : "")} value="context">Context</button>
        <button className={"naviBtn" + (this.props.currContent === "errorBoundary" ? " btnSelected" : "")} value="errorBoundary">ErrorBoundary</button>
        <button className={"naviBtn" + (this.props.currContent === "ref" ? " btnSelected" : "")} value="ref">Ref</button>
        <button className={"naviBtn" + (this.props.currContent === "hoc" ? " btnSelected" : "")} value="hoc">HOC</button>
        <button className={"naviBtn" + (this.props.currContent === "hook" ? " btnSelected" : "")} value="hook">Hook</button>
      </div>
    )
  }
}

export default NaviBar;