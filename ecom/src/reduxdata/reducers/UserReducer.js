import * as types from '../ActionTypes'
export default function (state={},action)
{
    switch(action.type)
    {
        case types.TYPE_SET_USERDATA : return action.payload
       
        default : return state
    }
}