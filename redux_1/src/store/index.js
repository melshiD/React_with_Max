import {createStore} from 'redux';

const counterReducer = (state = {counter: 0, facePaint: 'purple'}, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter - 1
        }
    }
    if(action.type === 'changeColor'){
        return{
            facePaint: 'green'
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;