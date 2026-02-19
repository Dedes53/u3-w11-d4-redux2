import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function FavouriteList() {

    const favourites = useSelector((state) => state.favourites.companies); //serve a leggere i dati dallo state.
    // Quando chiamiamo useSelector, passiamo una funzione che prende lo stato corrente come argomento e restituisce la parte dello stato che vogliamo leggere.

    const dispatch = useDispatch(); // serve a modificare i dati nello state. Ci permette di inviare azioni al nostro store. Quando inviamo un'azione, il nostro store esegue il reducer associato a quella azione e aggiorna lo stato di conseguenza.
    console.log('preferiti:', favourites)
    console.log('ci sono ', favourites.length, 'preferiti')

    return (
        <Container className="mt-5 text-center">
            <h2>Lista dei preferiti</h2>
            <h3 className="mt-5">Hai: {favourites.length} preferiti</h3>
            <Link to="/" className="mt-5 d-block text-start">Torna indietro</Link>
            <ul className="list-unstyled mt-5">
                {favourites.length === 0 ?
                    <h4>Non hai ancora salvato nessun preferito, <Link to="/">corri subito a salvarli!!</Link></h4>
                    :
                    favourites.map((companies, index) =>
                        <li className="mb-3 row justify-content-center"
                            key={index}>
                            <Col xs={3} style={{ fontSize: '2rem' }}>{companies}</Col>
                            <Col xs={3}>
                                <Button
                                    onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_FAVOURITES",
                                            payload: companies
                                        })
                                    }}
                                >Rimuovi dai preferiti
                                </Button>
                            </Col>
                        </li>)
                }

            </ul>
        </Container>


    )
}

export default FavouriteList;