import { combineReducers } from '@reduxjs/toolkit';
import firstReducer from './firstReducer';
import fetchReducer from './fetchReducer';
import basketReducer from './basketReducer';
import postReducer from './postReducer';
import deleteReducer from './deleteReducer';

const rootReducer = combineReducers({
    firstReducer: firstReducer,
    secondReducer: fetchReducer,
    basketReducer: basketReducer,
    postReducer: postReducer,
    deleteReducer: deleteReducer
})

export default rootReducer;

