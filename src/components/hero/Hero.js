// Import CSS for the Hero component
import './Hero.css';

// Import carousel and material components
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

// Import FontAwesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

// Import React Router hooks and components
import { Link, useNavigate } from "react-router-dom";

// Import Bootstrap button component
import Button from 'react-bootstrap/Button';

// Hero component to display movies in a carousel
const Hero = ({ movies }) => {
    // Hook to navigate programmatically
    const navigate = useNavigate();

    // Function to navigate to the reviews page for a specific movie
    const reviews = (movieId) => {
        navigate(`/Reviews/${movieId}`);
    };

    return (
        <div className='movie-carousel-container'>
            {/* Carousel to display movie cards */}
            <Carousel>
                {movies?.map((movie) => (
                    <Paper key={movie.imdbId}>
                        <div className="movie-card-container">
                            {/* Movie card with dynamic background */}
                            <div className="movie-card" style={{ "--img": `url(${movie.backdrops?.[0] || 'default-image-url'})` }}
                            >
                                <div className="movie-detail">
                                    {/* Movie poster section */}
                                    <div className='movie-poster'>
                                        <img src={movie?.poster} alt={movie?.title} />
                                    </div>
                                    {/* Movie title */}
                                    <div className='movie-title'>
                                        <h4>{movie.title}</h4>
                                    </div>
                                    {/* Buttons for trailer and reviews */}
                                    <div className='movie-buttons-container'>
                                        {/* Link to the trailer page */}
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className='play-button-icon-container'>
                                                <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                                            </div>
                                        </Link>
                                        {/* Button to navigate to reviews */}
                                        <div className='movie-review-button-container'>
                                            <Button variant='info' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
    );
};

export default Hero;