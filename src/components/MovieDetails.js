import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieDetails = ({ match, Films }) => {
  console.log(match);
  console.log(Films);

  const Film = Films.find((movie) => movie.id.toString() === match.params.id);
  return (
    <div>
      <CardGroup>
        <Card style={{ textAlign: "center" }}>
          <Card.Body>
            <Card.Title>{Film.title}</Card.Title>
            <Card.Img
              variant="top"
              src={Film.srcImg}
              style={{ height: "350px", width: "270px" }}
            />
            <Card.Text>{Film.price}</Card.Text>
            <Link to="/">
              <Button variant="primary">Go Back</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Bande Annonce</Card.Title>
            <div id="blogvision">
              <iframe
                src={Film.srcVideo}
                style={{ width: "480px", height: "270px" }}
              ></iframe>
            </div>
            {Film.description}
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};
