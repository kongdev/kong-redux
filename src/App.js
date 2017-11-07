import React, { Component } from 'react';
import Employee from './Employee'
import Salary from './Salary'
import { connect } from 'react-redux'


class App extends Component {
  
  render() {
    //console.log(this.props)
    return (
      <div >
        <Employee title={this.props.employee.name}/>
        <Salary salary={this.props.salary.salary}/>
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



export default connect(mapStateToProps)(App);
