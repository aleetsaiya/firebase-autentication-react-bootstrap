import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3"> Firebase Auth Login</h2>
        <Form>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Emaill address"
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group>
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Form.Group>

          {/* Submit */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        {/* Google Btn */}
        <div>
          <GoogleButton className="g-btn" type="dark"></GoogleButton>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
