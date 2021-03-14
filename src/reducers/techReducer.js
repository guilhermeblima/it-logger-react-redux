import { GET_TECHS } from "../actions/types";

const initialState = {
    techs: [], 
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
