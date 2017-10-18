import React, { Component } from 'react';
import Employee from './Employee'
import { connect } from 'react-redux'


class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.eventClick = this.eventClick.bind(this);
  }
  
  eventClick(){
    this.props.setName('kong-dev')
  }

  render() {
    //console.log(this.props)
    return (
      <div >
        <Employee title={this.props.employee.name}/>
        <button onClick={this.eventClick}>click</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    employee: state.employeeReducer,
    salary : state.salaryReducer
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setName: (value) => {
      dispatch({
        type: 'SETNAME',
        name: value
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
