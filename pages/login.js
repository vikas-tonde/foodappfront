// import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import styles from "../styles/login.module.css";
function LoginPage() {
  return (
    <>
      {/* <Container className="mt-5">
        <Row>
            <Col lg={4} md={6} sm={12}>

            </Col>
            <Col lg={4} md={6} sm={12}>

            </Col>
        </Row>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter the email id"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter the password"/>
            </Form.Group>
            <Button variant="primary btn-block" type="submit">Login</Button>
        </Form>
      </Container> */}

      <div className={styles.container}>
        <div className={styles.box}>
          <label htmlFor="email">Enter email id: </label>
          <input type="email" name="username" id="username" />
          <label htmlFor="password">Enter Password: </label>
          <input type="email" name="password" id="password" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
