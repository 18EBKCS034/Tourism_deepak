import { createStore, combineReducers } from 'redux';
import { isLogin } from "../Reducers/LoginReducer";
import {UserData} from "../Reducers/UserReducer";
import {searchData} from "../Reducers/SearchReducer";
import {hotelID} from "../Reducers/HotelReducer";
import {isAdmin} from "../Reducers/AdminReducer";

var rootReducer = combineReducers({isLogin,UserData,searchData,hotelID,isAdmin});

var Store = createStore(rootReducer);

export default Store;