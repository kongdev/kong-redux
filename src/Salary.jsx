import React, {Component} from 'react';
import { connect } from 'react-redux'

class Salary extends Component {
    constructor(props) {
        super(props);
        this.eventChangeSalary = this.eventChangeSalary.bind(this);
    }

    eventChangeSalary(e){
        this.props.setSalary(e.target.value)
    }
    render() {
        return (
            <div>
                <p>Salary : {this.props.salary}</p>
                <input onChange={this.eventChangeSalary} placeholder="salary"/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}


const mapDispatchToProps = (dispatch) => {
  return {

    setSalary: (value) => {
      dispatch({
        type: 'SETSALARY',
        salary: value
      })
    },
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Salary);
