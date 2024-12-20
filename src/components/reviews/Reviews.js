// Import React hooks and utilities
import { useEffect, useRef } from "react";
// Import API configuration for HTTP requests
import api from "../../api/axiosConfig";
// Import React Router hook to retrieve route parameters
import { useParams } from "react-router-dom";
// Import Bootstrap components for layout
import { Container, Row, Col } from "react-bootstrap";
// Import the ReviewForm component
import ReviewForm from "../reviewForm/ReviewForm";

function Reviews({ getMovieData, movie, reviews, setReviews }) {
    // Reference for the review input field
    const revText = useRef();

    // Extract `movieId` from the route parameters
    let params = useParams();
    const movieId = params.movieId;

    // Fetch movie data when the component mounts or `movieId` changes
    useEffect(() => {
        getMovieData(movieId);
    }, [movieId]);

    // Function to handle review submission
    const addReview = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const rev = revText.current; // Get the input field reference

        try {
            // Make a POST request to add a new review
            const response = await api.post("/api/v1/reviews", {
                reviewBody: rev.value,
                imdbId: movieId,
            });

            // Update the reviews with the new review
            const updatedReviews = [{body: rev.value}];

            // Clear the input field
            rev.value = "";

            // Update the reviews state
            setReviews(updatedReviews);
        } catch (err) {
            console.error("Error adding review:", err);
        }
    };

    return (
        <div>
            <Container>
                {/* Section for the title */}
                <Row>
                    <Col><h3>Reviews</h3></Col>
                </Row>

                {/* Section for the movie poster and review form */}
                <Row className="mt-2">
                    <Col>
                        <img src={movie?.poster} alt={movie?.title || "Movie poster"} />
                    </Col>
                    <Col>
                        <>
                            {/* Review form */}
                            <Row>
                                <Col>
                                    <ReviewForm
                                        handleSubmit={addReview}
                                        revText={revText}
                                        labelText="Write a Review"
                                    />
                                </Col>
                            </Row>

                            {/* Horizontal divider */}
                            <Row>
                                <Col><hr /></Col>
                            </Row>
                        </>
                        
                        {/* Display existing reviews from `movie` */}
                        {movie?.reviewIds?.map((r, i) => (
                            <Row key={`movie-review-${i}`}>
                                <Col>{r.body}</Col>
                                <Row><Col><hr /></Col></Row>
                            </Row>
                        ))}

                        {/* Display new reviews from the `reviews` state */}
                        {reviews?.map((review, index) => (
                            <Row key={`state-review-${index}`}>
                                <Col>{review.body}</Col>
                                <Row><Col><hr /></Col></Row>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Reviews;