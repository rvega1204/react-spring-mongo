// Import necessary components from React Bootstrap
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  // State to manage error messages
  const [error, setError] = useState("");

  // Function to validate input
  const handleValidation = () => {
    const text = revText.current?.value.trim();
    if (!text) {
      setError("Review cannot be empty.");
      return false;
    }
    
    setError(""); // Clear error if validation passes
    return true;
  };

  // Submit handler with validation
  const handleSubmitWithValidation = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      handleSubmit();
    }
  };

  return (
    <Form onSubmit={handleSubmitWithValidation}>
      {/* Form group for the review textarea */}
      <Form.Group className="mb-3" controlId="reviewTextarea">
        {/* Label for the textarea */}
        <Form.Label>{labelText}</Form.Label>
        {/* Textarea for user input */}
        <Form.Control
          as="textarea"
          rows={3}
          defaultValue={defaultValue} // Pre-filled value, if provided
          ref={revText} // Reference for accessing the input programmatically
          placeholder="Write your review here..." // Dynamic placeholder
        />
        {/* Error message display */}
        {error && <p className="text-danger">{error}</p>}
      </Form.Group>
      {/* Submit button */}
      <Button variant="outline-info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;