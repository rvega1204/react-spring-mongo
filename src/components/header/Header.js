// Import FontAwesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";

// Import Bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import NavLink from React Router for navigation
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* Brand section with an icon and label */}
        <Navbar.Brand href="/" style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>

        {/* Toggle button for collapsing the navbar on smaller screens */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar links and buttons */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Navigation links for Home and Watch List */}
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/movies">Watch List</NavLink>
          </Nav>

          {/* Buttons for user authentication */}
          <Button variant="outline-info" className="me-2">
            Login
          </Button>
          <Button variant="outline-info">
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;