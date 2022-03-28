import { INIT_STATE } from "../../constant";
import { getMe, getType} from "../actions";

export default function userReducers(state = INIT_STATE.me, action){
    switch(action.type){
        case getType(getMe.getMeRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getMe.getMeSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload.me,
                postData: action.payload.post,
                bookedData: action.payload.booked
            }  
        case getType(getMe.getMeFailure):
            return {
                ...state,
                isLoading: false,
                err: true
            }
       
        default:
            return state
    }
}