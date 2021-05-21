import { createStore, combineReducers } from 'redux';
import { isLogin } from "../Reducers/LoginReducer";
import {UserData} from "../Reducers/UserReducer";
import {searchData} from "../Reducers/SearchReducer";

var rootReducer = combineReducers({isLogin,UserData,searchData});

var Store = createStore(rootReducer);

export default Store;