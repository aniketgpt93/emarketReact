import * as types from '../ActionTypes'
export default function (state=[],action)
{
    switch(action.type)
    {
        case types.TYPE_LOAD_PRODUCT : return action.payload.products
        default : return state
    }
}