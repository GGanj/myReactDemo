import React from "react"

import "./hoc.scss"

class CommentList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="comtList">
        <ul>
          {this.props.data.map(
            (item, index) => {
              return <li key={index}>{item}</li>
            })}
        </ul>
      </div>
    )
  }
}

export default CommentList;