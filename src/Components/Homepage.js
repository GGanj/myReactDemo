
import React from 'react';
import './Homepage.scss';

import NaviBar from "./NaviBar/NaviBar"
import MainContainer from './MainContainer/MainContainer';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "init"
    }
    this.handleContentSelected = this.handleContentSelected.bind(this);
  }

  handleContentSelected(value) {
    this.setState({
      content: value
    })
  }


  render() {
    const dataInfo = (
      <div>
        <h2>Stuty React</h2>
        <h3>It is {new Date().toLocaleTimeString()}</h3>
      </div>
    )
    const container = this.state.content === "init" ? dataInfo : <MainContainer currContent={this.state.content} />;
    return (
      <div className="Homepage">
        <NaviBar onSelected={this.handleContentSelected} currContent={this.state.content} />
        <MainContainer currContent={this.state.content} />
      </div>
    );
  }
}

export default Homepage;
