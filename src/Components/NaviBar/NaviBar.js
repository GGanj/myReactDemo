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