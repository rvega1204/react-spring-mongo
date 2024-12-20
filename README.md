# Movie App (Frontend & Backend)

This is a full-stack movie application with a **React** frontend and a **Spring Boot** backend. The app allows users to explore a list of movies, watch trailers, and submit or view reviews. The backend is powered by **Spring Boot** with a **MongoDB** database for data persistence.

## Overview

- **Frontend**: Built with React, React Router, Axios, and Bootstrap components to create a responsive user interface.
- **Backend**: Developed using Spring Boot with REST APIs and MongoDB to handle movie and review data.
- **Key Features**:
    - View a list of movies
    - Watch trailers
    - Read and submit reviews for each movie
    - Fully responsive design

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces
- **React Router**: For routing and navigation
- **React Player**: For embedding YouTube trailers
- **React-Bootstrap**: For responsive UI components
- **Axios**: For HTTP requests to the backend
- **Material UI**: For carousel and styling components
- **Font Awesome**: For icons throughout the app

### Backend:
- **Spring Boot**: Java-based framework for building REST APIs
- **MongoDB**: NoSQL database for storing movie and review data
- **Spring Data MongoDB**: For interacting with MongoDB

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
#### Frontend:
- Node.js (>= 18.x)
- npm or yarn

#### Backend:
- Java (>= 17)
- Maven or Gradle
- MongoDB (or a cloud-based MongoDB instance like Atlas)
