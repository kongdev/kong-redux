import React, { Component } from 'react';
import { connect } from 'react-redux'

class Employee extends Component {

    constructor(props) {
    super(props);
    this.state = {
      name : '',
     
    };
    this.eventClickName = this.eventClickName.bind(this);
    this.eventChangeName = this.eventChangeName.bind(this);
   
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

    render() {
       
        return (
            <div>
                <p>Hi : {this.props.title}</p>

                <input onChange={this.eventChangeName} placeholder="name"/>
                <button onClick={this.eventClickName}>click</button>
               
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
    setName: (value) => {
      dispatch({
        type: 'SETNAME',
        name: value
      })
    },
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Employee);
