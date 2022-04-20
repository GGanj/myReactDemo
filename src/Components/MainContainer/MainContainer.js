import React from "react"

// Hoc
import CommentList from '../HOC/CommentList';
import BlogPost from '../HOC/BlogPost';
import { hocContainer } from '../HOC/HocContainer';
// Hook
import UseStateDemo from "../Hook/UseState";

class MainContainer extends React.Component {
  showDetail(selected) {
    switch(selected) {
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