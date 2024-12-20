package dev.ricardo.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/movies")
//@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    private MovieService movieService;  // Injecting the MovieService to interact with the database

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.allMovies();  // Fetching all movies from the service
        if (movies.isEmpty()) {  // If the movie list is empty, return a NO_CONTENT status
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        movies.forEach(System.out::println);

        // Returning the list of movies with OK status if not empty
        return ResponseEntity.ok().body(movies);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Movie> getMovieById(@PathVariable String imdbId) {
        // Fetching a movie by IMDb ID using the service
        Optional<Movie> movie = movieService.getMovie(imdbId);

        if (movie.isEmpty()) {  // If the movie is not found, return NOT_FOUND status
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // If the movie is found, return the movie object with OK status
        return movie.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));  // If the optional is empty, return NOT_FOUND
    }
}
