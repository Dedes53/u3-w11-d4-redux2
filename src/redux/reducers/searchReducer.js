import { FETCH_JOBS_ERROR, FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS } from "../actions"

const initialState = {
    results: [],   // array risultati 
    loading: false,
    error: null,
}


const mainReducer = (currState = initialState, action) => {

    // console.log('azione ricevuta:', action)
    switch (action.type) {

        case FETCH_JOBS_REQUEST: //durante la chiamata API
            return {
                ...currState,
                loading: true,
                error: null
            }

        case FETCH_JOBS_SUCCESS: //se va a buon fine 
            return {
                ...currState,
                loading: false,
                results: action.payload,
                error: null,
            }

        case FETCH_JOBS_ERROR: //se fallisce 
            return {
                ...currState,
                loading: false,
                results: [],
                error: action.payload
            }

        default:
            return currState;
    }
}

export default mainReducer;