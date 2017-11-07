import React, { Component } from 'react';
import Employee from './Employee'
import { connect } from 'react-redux'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name : '',
     
    };
    this.eventClickName = this.eventClickName.bind(this);
    this.eventChangeName = this.eventChangeName.bind(this);
    this.eventChangeSalary = this.eventChangeSalary.bind(this);
  }
  
  eventClickName(){
    //console.log(this.state.name)
    this.props.setName(this.state.name)
  }
  eventChangeName(e){
    this.setState({
      name :e.target.value
    })
  }

  eventChangeSalary(e){
    
    this.props.setSalary(e.target.value)
  }

  render() {
    //console.log(this.props)
    return (
      <div >
        <Employee title={this.props.employee.name} salary={this.props.salary.salary}/>
        <input onChange={this.eventChangeName} placeholder="name"/>
        <button onClick={this.eventClickName}>click</button>
        <input onChange={this.eventChangeSalary} placeholder="salary"/>
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
    },
    setSalary :(value)=>{
      dispatch({
        type : 'SETSALARY',
        salary : value,
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
