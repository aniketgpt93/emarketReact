import * as types from '../ActionTypes'
export default function (state=[],action)
{
    switch(action.type)
    {
        case types.TYPE_LOAD_CATEGORY : return action.payload.categories
        default : return state
    }
}