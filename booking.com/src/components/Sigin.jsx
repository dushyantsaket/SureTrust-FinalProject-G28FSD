import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sigin.css";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Signing in with:", { email });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Signing in with ${provider}`);
    // Implement social login logic
  };

  return (
    <div className="sign-container">
      <header className="header">
        <div className="header-bar">
          <div className="header-main">
            <div className="header-logo">
              <a href="/" aria-label="Booking.com">
                <span className="logo-text">Booking.com</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="app">
        <div className="access-container">
          <div className="access-panel-container">
            <div className="access-panel">
              <div className="page-header">
                <h1 className="step-header">
                  <span>Sign in or create an account</span>
                </h1>
                <div className="spacer">
                  <p className="step-description">
                    You can sign in using your Booking.com account to access our
                    services.
                  </p>
                </div>
              </div>

              <form className="signin-form" onSubmit={handleSubmit}>
                <div className="input-wrapper bui-spacer--large">
                  <div className="input-container">
                    <label htmlFor="username" className="input-label">
                      <span>Email address</span>
                    </label>
                    <div className="input-field">
                      <input
                        type="email"
                        name="username"
                        className="email-input"
                        placeholder="Enter your email address"
                        autoComplete="username"
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="false"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="continue-button">
                  <span className="button-text">Continue with email</span>
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
                      onClick={() => handleSocialLogin("Google")}
                    >
                      <span className="social-icon">G</span>
                      <span>Continue with Google</span>
                    </button>

                    <button
                      type="button"
                      className="social-button apple"
                      onClick={() => handleSocialLogin("Apple")}
                    >
                      <span className="social-icon">A</span>
                      <span>Continue with Apple</span>
                    </button>

                    <button
                      type="button"
                      className="social-button facebook"
                      onClick={() => handleSocialLogin("Facebook")}
                    >
                      <span className="social-icon">F</span>
                      <span>Continue with Facebook</span>
                    </button>
                  </div>
                </div>
              </form>

              <div className="signup-section">
                <p className="signup-text">
                  Don't have an account yet?{" "}
                  <Link to="/register" className="signup-link">
                    Create your account
                  </Link>
                </p>
              </div>

              <div className="terms-section">
                <p className="terms-text">
                  By signing in or creating an account, you agree with our{" "}
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

export default Sign;
