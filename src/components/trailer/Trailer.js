// Import necessary utilities from React Router
import { useParams } from "react-router-dom";
// Import ReactPlayer for embedding YouTube videos
import ReactPlayer from "react-player";
// Import CSS for styling
import './Trailer.css';

function Trailer() {
    // Extract YouTube trailer ID from the route parameters
    const params = useParams();
    const key = params.ytTrailerId;

    return (
        <div className="react-player-container">
            {/* Conditionally render the ReactPlayer if the trailer ID is available */}
            {key ? (
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${key}`} // YouTube video URL
                    controls={true} // Enable player controls
                    width="100%" // Set player width
                    height="100%" // Set player height
                />
            ) : (
                // Fallback message if no trailer is available
                <h1>Trailer not available</h1>
            )}
        </div>
    );
}

export default Trailer;