import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from "./types";


// GET Techs
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR, 
            payload: err.response.statusText
        });
    }
}
// Add Techs
export const addTech = (newTech) => async dispatch =>{
    try {
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(newTech),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR, 
            payload: err.response.statusText
        });
    }

}

// Delete tech
export const deleteTech = (id) => async dispatch =>{
    try {
        const res = await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_TECH, 
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR, 
            payload: err.response.statusText
        });
    }
}
// Set Loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
