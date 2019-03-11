import {authedUser} from './autherUser'
import {tweets} from './tweets'
import  {users} from './users'
import {combineReducers} from 'redux'

export default combineReducers({authedUser, users, tweets})