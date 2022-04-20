
import React from 'react';
import './Homepage.scss';

import NaviBar from "./NaviBar/NaviBar"
import MainContainer from './MainContainer/MainContainer';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "context"
    }
    this.handleContentSelected = this.handleContentSelected.bind(this);
  }

  handleContentSelected(value) {
    this.setState({
      content: value
    })
  }


  render() {
    return (
      <div className="Homepage">
        <NaviBar onSelected={this.handleContentSelected} currContent={this.state.content}>
          <MainContainer currContent={this.state.content} />
        </NaviBar>
        <MainContainer currContent={this.state.content} />
      </div>
    );
  }
}

export default Homepage;
