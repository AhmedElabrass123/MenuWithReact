import React, { useState } from "react";
import nav from "./nav.css";
import { Navbar, Container, Form, Button } from "react-bootstrap";
const NavBar = ({ searchFunc }) => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">New Restaurant</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => searchFunc(searchVal)}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
