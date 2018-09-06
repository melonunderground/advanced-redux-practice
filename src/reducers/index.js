import {combineReducers} from 'redux';

function newComments(state = 0,action){
 return state;
}

const rootReducer = combineReducers({
 newComments,
});
export default rootReducer;