import * as types from '../ActionTypes'
export default function (state=[],action)
{
    switch(action.type)
    {
        case types.TYPE_ADDCART_ITEM: return [...state,action.payload.product]

        default : return state
    }
}