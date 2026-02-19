// il senso di creare delle costanti con il valore delle azioni è quello di evitare errori di battitura
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const addToFavovouritesAction = function (data) {
    return {
        type: ADD_TO_FAVOURITES,
        payload: data.company_name
    }
}

export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const removeFromFavouritesAction = function (data) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: data.company_name
    }

}
