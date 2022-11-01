import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Form, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { resetPassword } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (email) {
      try {
        await resetPassword(email);
        setSuccess(`Send the email to ${email} successfully`);
        setEmail("");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Reset my password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit}>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Emaill address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></Form.Control>
          </Form.Group>

          {/* Submit */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Send reset email
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Back to <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default ForgotPassword;
