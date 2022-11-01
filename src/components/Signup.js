import React from "react";
import { Button, Form } from "react-bootstrap";

const Signup = () => {
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        <Form>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email addresss"
            ></Form.Control>
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Form.Group>

          {/* Submit */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? Log In
      </div>
    </>
  );
};

export default Signup;
