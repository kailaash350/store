import { useContext } from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
export default function Navbar() {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-4">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/home" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
       
        {cartQuantity >0 &&(   <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 16.5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2zm7-14H7a5 5 0 0 0-5 5v16a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a5 5 0 0 0-5-5zM16 11h-1a1 1 0 0 1-1-1V6h-4v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v5h4a1 1 0 0 1 1 1z" />
          </svg>
         

          
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)"
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      )}
      </Container>
    </NavbarBS>
  );
}
