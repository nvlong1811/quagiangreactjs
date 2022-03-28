import { combineReducers} from 'redux'
import posts from './posts'
import modal from './modal'
import me from './me'
import message from './message'

export default combineReducers({
    posts,
    modal,
    me,
    message
})