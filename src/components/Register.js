import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor='email'>Username</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
