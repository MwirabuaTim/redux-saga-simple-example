import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
	

class App extends Component {
  render() {
    return (
      <div style={{width: '40%', marginLeft: '30%', marginRight: '30%', paddingTop: 100}}>
        <h1>Weather</h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    weather: state.weather,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
