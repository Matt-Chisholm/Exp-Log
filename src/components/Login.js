// Login.js
import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format.";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required.";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with login logic
      console.log("Form submitted:", formData);
    } else {
      // Update the errors state with validation errors
      setErrors(validationErrors);
    }
  };

  const isValidEmail = (email) => {
    // You can implement your email validation logic here
    // For a basic check, we're just looking for the presence of "@" and "."
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className='error'>{errors.password}</div>}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
