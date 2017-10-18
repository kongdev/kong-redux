import React, { Component } from 'react';
import Employee from './Employee'
import { connect } from 'react-redux'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    };
    this.eventClick = this.eventClick.bind(this);
    this.eventChange = this.eventChange.bind(this);
  }
  
  eventClick(){
    //console.log(this.state.name)
    this.props.setName(this.state.name)
  }
  eventChange(e){
    this.setState({
      name :e.target.value
    })
  }

  render() {
    //console.log(this.props)
    return (
      <div >
        <Employee title={this.props.employee.name}/>
        <input onChange={this.eventChange} name="title"/>
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
