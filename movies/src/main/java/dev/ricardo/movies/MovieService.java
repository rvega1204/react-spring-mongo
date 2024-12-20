package dev.ricardo.movies;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service  // Indicates that this class is a Spring service and should be managed by the Spring container
public class MovieService {

    @Autowired  // Automatically injects the MovieRepository instance to interact with the database
    private MovieRepository movieRepository;

    @Autowired
    private ObjectMapper objectMapper;

    // Method to retrieve all movies from the repository (MongoDB collection)
    public List<Movie> allMovies() {
        List<Movie> movies = movieRepository.findAll();
        try {
            String json = objectMapper.writeValueAsString(movies);
            System.out.println(json);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return movies;
    }

    // Method to retrieve a single movie by its IMDb ID
    public Optional<Movie> getMovie(String imdbId) {
        // Uses the custom query method findMovieByImdbId to find the movie by its IMDb ID
        return movieRepository.findMovieByImdbId(imdbId);  // Returns an Optional, to handle cases where no movie is found
    }
}
