import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  // Create a state variable to track whether the user is in "Login" or "Register" mode
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to toggle between "Login" and "Register" modes
  const toggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className='App'>
      <header className='App-header'>Welcome</header>
      {isRegistering ? (
        <div>
          <Register />
          <button onClick={toggleMode}>Login</button>
        </div>
      ) : (
        <div>
          <Login />
          {/* Display the "Register" button */}
          <button onClick={toggleMode}>Register</button>
        </div>
      )}
    </div>
  );
}

export default App;
