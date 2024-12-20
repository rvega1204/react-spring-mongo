// Importing the global styles for the app
import './App.css';

// Axios instance for making API calls
import api from './api/axiosConfig';

// React hooks for managing state and lifecycle
import { useState, useEffect } from 'react';

// Importing layout and components
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {
  // State variables to store movies, reviews, and a single movie's data
  const [movies, setMovies] = useState();
  const [reviews, setReviews] = useState();
  const [movie, setMovie] = useState();

  // Function to fetch all movies from the API
  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies'); // Fetch movies from the backend
      setMovies(response.data); // Update the state with the movies data
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  // Function to fetch detailed data for a single movie
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`); // Fetch movie details by ID
      const singleMovie = response.data; // Extract the movie data
      setMovie(singleMovie); // Update the state with the single movie data
      setReviews(singleMovie.reviews); // Update the reviews state
    } catch (error) {
      console.error(error); // Log any errors
    }
  };

  // useEffect to fetch all movies when the component mounts
  useEffect(() => {
    getMovies(); // Fetch movies on initial render
  }, []);

  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page route */}
          <Route index element={<Home movies={movies} />} />
          
          {/* Trailer page route with YouTube trailer ID */}
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />} />
          
          {/* Reviews page route with movie ID */}
          <Route path='/Reviews/:movieId' 
            element={
              <Reviews 
                getMovieData={getMovieData} 
                movie={movie} 
                reviews={reviews} 
                setReviews={setReviews} 
              />
            } 
          />
          
          {/* Fallback route for unmatched paths */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;