import * as types from '../ActionTypes'
export default function (state=[],action)
{
    switch(action.type)
    {
        case types.TYPE_LOAD_BRAND: return action.payload.brands

        default : return state
    }
}