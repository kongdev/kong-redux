import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers,applyMiddleware } from 'redux'

import App from './App';



/*
const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const valueInc = typeof action.value === 'number' ? action.value : 1
            return {
                count: state.count + valueInc
            }
        case 'DECREMENT':
            const valueDec = typeof action.value === 'number' ? action.value : 1
            return {
                count: state.count - valueDec
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }

}
const store = createStore(reducer)

const unsub = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: 'INCREMENT',
    value: 5
});

store.dispatch({
    type: 'RESET'
});


store.dispatch({
    type: 'DECREMENT'
});


store.dispatch({
    type: 'DECREMENT',
    value: 10
});

store.dispatch({
    type: 'SET',
    count: 101
})*/



const defaultSalary ={
    salary: 10000
}

const salaryReducer = (state = defaultSalary, action) => {
    switch (action.type) {
        case 'SETSALARY':
            return {
                ...state , salary : action.salary
            }
        
        default:
            return state
    }
}

const defaultEmp ={
    name: "employee01", age: 21
}

const employeeReducer = (state = defaultEmp, action) => {
    switch (action.type) {
        case 'SETNAME':
        return {
            ...state , name : action.name
        }
    case 'SETAGE':
        return {
            ...state , age :action.age
        }
        default:
            return state
    }
}
//const store = createStore(combineReducers({ salaryReducer, employeeReducer }))
const myLog = (store)=>(next)=>(action)=>{
    console.log('Log :', action)
    next(action)
}

const store = createStore(
    combineReducers({ salaryReducer, employeeReducer }),
    {},
    applyMiddleware(myLog),
      
)

//console.log(store.getState())
store.subscribe(() => {
    console.log('Update :', store.getState())
})

/*
store.dispatch({
    type: 'SETAGE',
    age: 5  
});

store.dispatch({
    type: 'SETNAME',
    name: 'kong-dev'  
});

store.dispatch({
    type: 'SETSALARY',
    salary: 555555
});*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

