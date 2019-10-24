import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment, decrement, reset} from './redux/actions/penjumalah'
export class App extends Component {
  render() {
    console.log('hahah', this.props.penjumlahan.penjumlahan.value);
    const {value} = this.props.penjumlahan.penjumlahan
    return (
      <div>
        <h1>ini jumlah : {value}</h1>
        <button onClick={this.props.increment} >tambah</button>
        <button onClick={this.props.decrement} >kurang</button>
        <button onClick={this.props.reset} >Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (penjumlahan) => ({
  penjumlahan: penjumlahan
})

const mapDispatchToProps = {
  increment : increment,
  decrement : decrement,
  reset: reset
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
