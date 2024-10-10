import React, { useState } from "react";
import "./login.css"; // External CSS file for styling

function Login({loginClicked}) {
  // State to track whether the form is for Sign In or Register
  const [isSignIn, setIsSignIn] = useState(true);

  // State to handle form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      // Handle Sign In logic here
      console.log("Signing in with:", formData.email, formData.password);
    } else {
      // Handle Register logic here
      console.log("Registering with:", formData.username, formData.email, formData.password);
    }
  };

  // Toggle between Sign In and Register forms
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setFormData({ username: "", email: "", password: "" }); // Reset form when switching
  };

  return (
    <div className="auth-container bg-[#0f172a] h-screen">
        <div>
        <a 
            onClick={() => loginClicked(false)}
            target='_blank' className='bg-blue-500 text-white text-xl font-bold rounded-lg w-28 p-1 max-h-fit hover:bg-blue-800 absolute right-6 top-6 text-center'>Close</a>
        </div>
      <div className="auth-box">
        <h2 className="font-bold">{isSignIn ? "Sign In" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {/* Only show Username field for Register form */}
          {!isSignIn && (
            <input
            className="font-bold placeholder:font-bold"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}
          <input
          className="font-bold placeholder:font-bold"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="font-bold placeholder:font-bold"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn font-bold text-black">
            {isSignIn ? "Sign In" : "Register"}
          </button>
        </form>
        <p className="toggle-text font-bold" onClick={toggleForm}>
          {isSignIn ? "Don't have an account? Register" : "Already have an account? Sign In"}
        </p>
      </div>
    </div>
  );
}

export default Login;
