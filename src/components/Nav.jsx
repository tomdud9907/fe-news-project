import { getTopics } from "../api";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SortBy } from "./SortBy";

function Navi() {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopic(topics);
    });
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Select category:</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/football">Football</Nav.Link>
          <Nav.Link href="/cooking">Cooking</Nav.Link>
          <Nav.Link href="/coding">Coding</Nav.Link>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navi;
