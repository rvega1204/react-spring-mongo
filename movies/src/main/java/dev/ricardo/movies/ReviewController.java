package dev.ricardo.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController  // Marks the class as a REST controller
@RequestMapping("/api/v1/reviews")  // Specifies the base path for all endpoints in this controller
@CrossOrigin(origins = "*")
public class ReviewController {

    @Autowired
    private ReviewService service;  // Injecting the ReviewService to interact with the business logic

    // Mapping POST requests to "/api/v1/reviews" to create a new review
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        // Extract the reviewBody and imdbId from the request body and pass them to the service to create the review
        Review review = service.createReview(payload.get("reviewBody"), payload.get("imdbId"));
        if (review == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);  // Return HTTP status 500 (Internal Server Error) if the review couldn't be created
        }

        // Return the created review along with HTTP status 201 (Created)
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }
}
