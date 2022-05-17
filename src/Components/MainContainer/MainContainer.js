import React from "react"

// render & props
import Welcome from "../Render&props/Welcome";
// state & lifeCycle
import Clock from "../LifeCycle/Clock";
// event handle
import EventHandle from "../Event/Event";
import Toggle from "../Event/Toggle";
// Conditional render
import LoginControl from "../Conditional/LoginControl";
// List & Key
import NumberList from "../List&Key/NumberList";
import BlogList from "../LifeCycle/BlogList";
// form
import NameForm from "../Form/ControledNameForm";


// Hoc
import CommentList from '../HOC/CommentList';
import BlogPost from '../HOC/BlogPost';
import { hocContainer } from '../HOC/HocContainer';
// Hook
import UseStateDemo from "../Hook/UseState";
import EssayForm from "../Form/EssayForm";
import FlavorForm from "../Form/FlavorForm";
import Reservation from "../Form/Reservation";
import Calculator from "../LiftingState/Calculator";
import WelcomeDialog from "../Composition/WelcomeDialog";
import I18n from "../I18n/i18n";
import CodeSplite from "../CodeSplite/CodeSplite";

class MainContainer extends React.Component {
  showDetail(selected) {
    switch(selected) {
      case "init":
        return (
          <>
            <Welcome title="React 1" />;
            <Welcome title="React 2" />;
            <Welcome title="React 3" />;
          </>
        )
      case "lifeCycle":
        return <Clock increment={5}/>;
      case "eventHandle":
        return (
          <>
            <EventHandle />
            <Toggle />
          </>
        )
      case "conditional":
        return <LoginControl/>
      case "list&key":
        return (
          <>
            <NumberList />
            <hr />
            <BlogList />
          </>
        )
      case "form":
        return (
          <>
            <NameForm />
            <hr />
            <EssayForm />
            <hr />
            <FlavorForm />
            <hr />
            <Reservation />
          </>
        )
      case "liftingState":
        return <Calculator />
      case "composition":
        return <WelcomeDialog />
      case "i18n":
        return <I18n />
      case "splite":
        return <CodeSplite />
      case "hoc":
        const CommentListHoc = hocContainer(CommentList, (DataSource) => DataSource.getComment());
        const BlogpostHoc = hocContainer(BlogPost, (DataSource, id) => DataSource.getBlog(id))
        return (
          <>
            <CommentListHoc category={"comment"} id={1}/>
            <BlogpostHoc category={"blog"} id={2} />
          </>
        )
        case "hook":
          return <UseStateDemo />
    }
  }

  render() {
    return (
      <div className="mainContainer">
        {this.showDetail(this.props.currContent)}
      </div>
    )
  }
}

export default MainContainer