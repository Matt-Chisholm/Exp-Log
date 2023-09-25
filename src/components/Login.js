import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor='email'>Username</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
