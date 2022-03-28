import { INIT_STATE } from "../../constant";
import { getMessage, newMessage, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.message, action){
    switch(action.type){
        case getType(getMessage.getMessageRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getMessage.getMessageSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }  
        case getType(getMessage.getMessageFailure):
            return {
                ...state,
                isLoading: false,
                err: true
            }
        case getType(newMessage.newMessageSuccess):
            return {
                ...state,
                data:[...state.data, action.payload],
                createSuccess: true
            }
        default:
            return state
    }
}