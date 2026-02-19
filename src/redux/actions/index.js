// il senso di creare delle costanti con il valore delle azioni è quello di evitare errori di battitura
// aggiungo e rimuovo dai preferiti
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"

// chiamate API, una per ogni risultato della chiamata
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST"
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS"
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR"



export const addToFavovouritesAction = function (data) {
    return {
        type: ADD_TO_FAVOURITES,
        payload: data.company_name
    }
}

export const removeFromFavouritesAction = function (data) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: data.company_name
    }

}

// action creator asincrono per fare fetch della ricerca e salvare i risultati nello store
export const fetchJobAction = (query) => {
    // riceve automaticamente "dispatch" da Redux
    return async (dispatch) => {
        // comunica che la chiamata API è in corso
        dispatch({
            type: FETCH_JOBS_REQUEST
        })

        fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Errore chiamata API")
                }
            })
            .then((data) => {
                // comunica che la chiamata API è andata a buon fine e salva i dati nello store
                dispatch({
                    type: FETCH_JOBS_SUCCESS,
                    payload: data.data
                })
            })
            .catch((error) => {
                // comunica che la chiamata API è fallita e salva l'errore nello store
                dispatch({
                    type: FETCH_JOBS_ERROR,
                    payload: error.message
                })
            })
    }
}