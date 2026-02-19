import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions';


const initialState = {

    companies: [],

}

const mainReducer = (currState = initialState, action) => {

    // console.log('azione ricevuta:', action)

    switch (action.type) {

        case ADD_TO_FAVOURITES:
            // console.log('aggiungo ai preferiti:', action.payload)
            return {
                ...currState,
                companies: [...currState.companies, action.payload]
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...currState,
                companies: currState.companies.filter(company => company !== action.payload)
            }

        default:
            return currState;
    }
}

export default mainReducer;