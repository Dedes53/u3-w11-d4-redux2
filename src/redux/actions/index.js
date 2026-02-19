export const addToFavovouritesAction = function (data) {
    return {
        type: "ADD_TO_FAVOURITES",
        payload: data.company_name
    }
}

export const removeFronFavouritesAction = function (data) {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: data.company_name
    }

}
