# Movie App

A React-based movie application that allows users to view trailers, read reviews, and explore a list of movies. This is the client for the Movies BE.

## Features

- **Movie List**: View a list of movies with basic information.
- **Movie Trailer**: Watch trailers for each movie.
- **User Reviews**: Read and submit reviews for each movie.
- **Responsive Design**: Fully responsive for desktop and mobile viewing.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation between pages and handling dynamic routes.
- **React Player**: For embedding YouTube trailers.
- **React-Bootstrap**: For responsive and customizable UI components.
- **Axios**: For making HTTP requests to the backend.
- **Material UI**: For carousel and styling.
- **Font Awesome**: For icons used throughout the app.

## Setup

### Prerequisites

- Node.js (>= 14.x)
- NPM or Yarn (for managing dependencies)

## Routes
- / (Home): Displays a list of movies.
- /Trailer/:ytTrailerId: Displays a trailer for a selected movie.
- /Reviews/:movieId: Displays reviews for a selected movie.
- */ (NotFound)**: A fallback route for unknown paths.

## Styling
The app uses both React Bootstrap and Material UI for styling. Custom CSS can be found in the respective component .css files, such as Hero.css, Trailer.css, and others.

## License
This project is licensed under the MIT License.