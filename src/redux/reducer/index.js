import { combineReducers } from "redux";
import upreducer from './upreducer';
import downreducer from './downreducer';

export default combineReducers({
    upreducer:upreducer,
    downreducer:downreducer
})