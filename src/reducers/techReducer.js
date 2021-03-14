import { ADD_TECH, GET_TECHS } from "../actions/types";

const initialState = {
    techs: [], 
    loading: false, 
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case ADD_TECH: 
            return{
                ...state,
                techs: [...state.techs, action.payload]
            }
        default:
            return state;
    }
}
