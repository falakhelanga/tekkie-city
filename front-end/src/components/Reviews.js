import React from "react";
import { Button, Col, Container, Row, ListGroup } from "react-bootstrap";
import Rate from "./Rate";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Reviews = ({ reviews, ratings, numReviews, id }) => {
  const history = useHistory();
  return (
    <Container className="mt-5" fluid>
      <Row>
        {/* AVERAGE RATING COLUMN */}

        <Col md={3}>
          <div
            className="average_rating_div d-flex flex-column align-items-center py-2 px-3 "
            style={{
              backgroundColor: "#F1F7FB",
            }}
          >
            <h4>Average Rating</h4>

            <h1 className="mt-2">{ratings.toFixed(1)}</h1>
            <span className="text-muted">out of 5 stars</span>
            <div className="mt-2">
              <Rate numRate={ratings} />
            </div>

            <Button
              onClick={() => {
                history.push(`/createReview/${id}/?rate=${ratings.toFixed(1)}`);
              }}
              variant="dark"
              type="button"
              className="btn-block mt-3"
            >
              Write a reivew
            </Button>
          </div>
        </Col>

        {/* REVIEW COLUMN */}

        <Col md={9}>
          <ListGroup variant="flush">
            {reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <div className="d-flex align-items-center ">
                  <Rate numRate={review.rating} />{" "}
                  <span className="mx-3">{review.name} </span>{" "}
                  <span
                    className="mr-1 text-muted"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {moment(new Date(review.createdAt)).fromNow()}
                  </span>
                </div>
                <div>{review.comment}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
