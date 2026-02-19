import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobAction } from "../redux/actions";

const MainSearch = () => {

  const [query, setQuery] = useState("")

  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.companies)

  const { results, loading, error } = useSelector((state) => state.search)

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchJobAction(query)) //dispatcho l'ation che fa la chiamata API
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
              disabled={loading} />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mt-5 mb-5 d-flex justify-content-between align-items-center">
          <Link to="/favourites">Vai ai preferiti</Link>
          <p className="bg-primary text-white p-2 rounded">Hai: <b>{favourites.length}</b> preferiti</p>
        </Col>

        {loading && (
          <Col xs={10} className="mx-auto text-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Caricamento...</span>
            </Spinner>
            <p className="mt-2">Ricerca in corso...</p>
          </Col>
        )}

        {error && (
          <Col xs={10} className="mx-auto">
            <Alert variant="danger">
              <strong>Errore!</strong> {error}
            </Alert>
          </Col>
        )}

        <Col xs={10} className="mx-auto mb-5">
          {results.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>

      </Row>
    </Container>
  );
};

export default MainSearch;
