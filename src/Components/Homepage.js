
import React from 'react';
import { Routes, Route } from "react-router-dom"

import './Homepage.scss';

import NaviBar from "./NaviBar/NaviBar"
import MainContainer from './MainContainer/MainContainer';

// render & props
import Welcome from "./Render&props/Welcome";
// state & lifeCycle
import Clock from "./LifeCycle/Clock";
// event handle
import EventHandle from "./Event/Event";
import Toggle from "./Event/Toggle";
// Conditional render
import LoginControl from "./Conditional/LoginControl";
// List & Key
import NumberList from "./List&Key/NumberList";
import BlogList from "./LifeCycle/BlogList";
// form
import NameForm from "./Form/ControledNameForm";
import EssayForm from "./Form/EssayForm";
import FlavorForm from "./Form/FlavorForm";
import Reservation from "./Form/Reservation";
// Lifting state
import Calculator from "./LiftingState/Calculator";
// Composition
import WelcomeDialog from "./Composition/WelcomeDialog";
// i18next
import I18n from "./I18n/i18n";
// Code splite
import CodeSplite from "./CodeSplite/CodeSplite";
// Route
import RouteModule from './Route/RouteModule1';

// Hoc
import CommentList from './HOC/CommentList';
import BlogPost from './HOC/BlogPost';
import { hocContainer } from './HOC/HocContainer';
// Hook
import UseStateDemo from "./Hook/UseState";
import RouteModule2 from './Route/RouteModule2';

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

  getHOC() {
    const CommentListHoc = hocContainer(CommentList, (DataSource) => DataSource.getComment());
    const BlogpostHoc = hocContainer(BlogPost, (DataSource, id) => DataSource.getBlog(id))
    return (
      <>
        <CommentListHoc category={"comment"} id={1}/>
        <BlogpostHoc category={"blog"} id={2} />
      </>
    )
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
        {
          this.state.content === "route" &&  
          <Routes>
            <Route path="/route" element={<RouteModule name="0"/>} />
          </Routes>
        }
        <NaviBar onSelected={this.handleContentSelected} currContent={this.state.content} />
        {/* <MainContainer currContent={this.state.content} /> */}
        <hr />
        <Routes>
          <Route path="*" element={<p>There is nothing here!</p>} />
          <Route path="/" element={<></>} />
          <Route path="welcome" element={<>
            <Welcome title="React 1" />
            <Welcome title="React 2" />
            <Welcome title="React 3" />
          </>} />
          <Route path="lifeCycle" element={<Clock increment={5}/>} />
          <Route path="eventHandle" element={<>
            <EventHandle />
            <Toggle />
          </>} />
          <Route path="conditional" element={<LoginControl/>} />
          <Route path="list&key" element={<>
            <NumberList />
            <hr />
            <BlogList />
          </>} />
          <Route path="form" element={<>
            <NameForm />
            <hr />
            <EssayForm />
            <hr />
            <FlavorForm />
            <hr />
            <Reservation />
          </>} />
          <Route path="liftingState" element={<Calculator />} />
          <Route path="composition" element={<WelcomeDialog />} />
          <Route path="i18n" element={<I18n />} />
          <Route path="splite" element={<CodeSplite />} />
          <Route path="route1" element={<RouteModule name="1"/>} >
             <Route path="sub1" element={<RouteModule name="sub1" />}/>
             <Route path="sub2" element={<RouteModule name="sub2" />}/>
             <Route path="sub3" element={<RouteModule name="sub3" />}/>
             <Route path="sub4" element={<RouteModule name="sub4" />}/>
          </Route>
          <Route path="route2" element={<RouteModule2 />} />
          <Route path="hoc" element={this.getHOC()} />
          <Route path="hook" element={<UseStateDemo />} />
        </Routes>
        <hr />
        {
          this.state.content === "route" &&  
          <Routes>
            <Route path="route" element={<RouteModule name="2"/>} />
          </Routes>
        }
      </div>
    );
  }
}

export default Homepage;
