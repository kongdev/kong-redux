import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';




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
})


ReactDOM.render(<App />, document.getElementById('root'));

