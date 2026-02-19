import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavovouritesAction } from '../redux/actions'


const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourites.companies) // serve a leggere i dati dallo store
  const dispatch = useDispatch(); // serve a modificare i dati nello store, è una funzione che ci viene fornita da react-redux e che ci permette di inviare azioni al nostro store. Quando inviamo un'azione, il nostro store esegue il reducer associato a quella azione e aggiorna lo stato di conseguenza.

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={3}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button
          onClick={() => {
            if (!favourites.includes(data.company_name))
              dispatch(addToFavovouritesAction(data))
          }}>Add to Favourites</Button>
      </Col>
    </Row>
  )
}

export default Job
