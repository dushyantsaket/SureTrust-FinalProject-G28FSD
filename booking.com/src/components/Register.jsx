import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Ragister.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle registration logic here
    console.log("Registering with:", formData);
    navigate("/login");
  };

  const handleSocialRegister = (provider) => {
    console.log(`Registering with ${provider}`);
    // Implement social registration logic
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <div className="header-bar">
          <div className="header-main">
            <Link to="/" className="header-logo">
              <span className="logo-text">Booking.com</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="app">
        <div className="access-container">
          <div className="access-panel-container">
            <div className="access-panel">
              <div className="page-header">
                <h1 className="step-header">
                  <span>Create your account</span>
                </h1>
                <div className="spacer">
                  <p className="step-description">
                    Sign up to access exclusive deals and manage your bookings
                    easily.
                  </p>
                </div>
              </div>

              <form className="register-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <div className="input-container">
                    <label htmlFor="firstName" className="input-label">
                      <span>First name</span>
                    </label>
                    <div className="input-field">
                      <input
                        type="text"
                        name="firstName"
                        className="text-input"
                        placeholder="Enter your first name"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="input-wrapper">
                  <div className="input-container">
                    <label htmlFor="lastName" className="input-label">
                      <span>Last name</span>
                    </label>
                    <div className="input-field">
                      <input
                        type="text"
                        name="lastName"
                        className="text-input"
                        placeholder="Enter your last name"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="input-wrapper">
                  <div className="input-container">
                    <label htmlFor="email" className="input-label">
                      <span>Email address</span>
                    </label>
                    <div className="input-field">
                      <input
                        type="email"
                        name="email"
                        className="email-input"
                        placeholder="Enter your email address"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="input-wrapper">
                  <div className="input-container">
                    <label htmlFor="password" className="input-label">
                      <span>Password</span>
                    </label>
                    <div className="input-field">
                      <input
                        type="password"
                        name="password"
                        className="password-input"
                        placeholder="Create a password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={6}
                      />
                    </div>
                  </div>
                </div>

                <div className="input-wrapper">
                  <div className="input-container">
                    <label htmlFor="confirmPassword" className="input-label">
                      <span>Confirm password</span>
                    </label>
                    <div className="input-field">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="password-input"
                        placeholder="Confirm your password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        minLength={6}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="continue-button">
                  <span className="button-text">Create account</span>
                </button>

                <div className="social-login">
                  <div className="social-divider">
                    <hr className="divider-line" aria-hidden="true" />
                    <span className="divider-text">
                      or use one of these options
                    </span>
                    <hr className="divider-line" aria-hidden="true" />
                  </div>

                  <div className="social-buttons">
                    <button
                      type="button"
                      className="social-button google"
                      onClick={() => handleSocialRegister("Google")}
                    >
                      <span className="social-icon">
                        <image
                          src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?w=148&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                          alt="Google"
                        />
                      </span>
                      <span>Continue with Google</span>
                    </button>

                    <button
                      type="button"
                      className="social-button apple"
                      onClick={() => handleSocialRegister("Apple")}
                    >
                      <span className="social-icon">
                        <image
                          src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?w=148&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                          alt="Google"
                        />
                      </span>
                      <span>Continue with Apple</span>
                    </button>

                    <button
                      type="button"
                      className="social-button facebook"
                      onClick={() => handleSocialRegister("Facebook")}
                    >
                      <span className="social-icon">
                        <image
                          src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?w=148&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                          alt="Google"
                        />
                      </span>
                      <span>Continue with Facebook</span>
                    </button>
                  </div>
                </div>
              </form>

              <div className="signup-section">
                <p className="signup-text">
                  Already have an account?{" "}
                  <Link to="/login" className="signup-link">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="terms-section">
                <p className="terms-text">
                  By creating an account, you agree with our{" "}
                  <a href="/terms" className="terms-link">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="terms-link">
                    Privacy Statement
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            Copyright (2006-{new Date().getFullYear()}) – Booking.com™
          </p>
          <p className="rights">All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
