import React from "react"
import { testData } from "./DataSource"

export function hocContainer(WrappedComponent, customerParam) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: customerParam(testData, props.id)
      }
      console.log(props)
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props}/>
    }
  }
}