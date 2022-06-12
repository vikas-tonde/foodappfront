import Link from "next/link";
import { Navbar, Button } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Navbar bg="danger" className="px-3">
        <Navbar.Brand href="/home">Food Waste Reduction</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="dark" onClick={null}>
            SignIn/SignUp
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HomePage;
