import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRequest} from './redux/actions/testApi.action'

export class App extends Component {
  componentDidMount(){
    this.props.getRequest()
  }
  render() {
    console.log('data', this.props.data);
    return (
      <div>
        <h1>Dash</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  getRequest : getRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
