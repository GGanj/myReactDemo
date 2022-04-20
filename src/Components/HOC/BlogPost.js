import React from 'react'

import "./hoc.scss"

class BlogPost extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="blogPost">
        <textarea>{this.props.data}</textarea>
      </div>
    )
  }
}

export default BlogPost;