import React, { Component } from 'react';

class Employee extends Component {
    render() {
        return (
            <div>
                <p>Hi : {this.props.title}</p>
                <p>Salary : {this.props.salary}</p>
            </div>
        );
    }
}

export default Employee;