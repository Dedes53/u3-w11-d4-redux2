const initialState = {
    favourites: {
        companies: [],
    },
}

const mainReducer = (currState = initialState, action) => {

    // console.log('azione ricevuta:', action)

    switch (action.type) {

        case "ADD_TO_FAVOURITES":
            // console.log('aggiungo ai preferiti:', action.payload)
            return {
                ...currState,
                favourites: {
                    companies: [...currState.favourites.companies, action.payload]
                }
            }

        case "REMOVE_FROM_FAVOURITES":
            return {
                ...currState,
                favourites: {
                    companies: currState.favourites.companies.filter(company => company !== action.payload)
                }
            }

        default:
            return currState;
    }
}

export default mainReducer;