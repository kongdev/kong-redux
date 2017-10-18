import React, { Component } from 'react';

class Employee extends Component {
    render() {
        return (
            <div>
                Hi : {this.props.title}
            </div>
        );
    }
}

export default Employee;