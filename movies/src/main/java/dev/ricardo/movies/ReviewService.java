package dev.ricardo.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;  // Injecting the ReviewRepository to interact with the database

    @Autowired
    private MongoTemplate mongoTemplate;  // Injecting MongoTemplate to perform custom MongoDB operations

    public Review createReview(String reviewBody, String imdbId) {
        // Check if the review body is null or empty, and throw an exception if true
        if (reviewBody == null || reviewBody.isEmpty()) {
            throw new IllegalArgumentException("Review body cannot be empty");
        }

        // Create a new review and insert it into the database
        Review review = reviewRepository.insert(new Review(reviewBody));

        // Update the Movie document by adding the review to the list of reviews (using the imdbId to find the movie)
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))  // Find the movie by IMDb ID
                .apply(new Update().push("reviewIds").value(review))  // Add the review to the reviewIds field
                .first();  // Update the first matching movie

        return review;  // Return the newly created review
    }
}
