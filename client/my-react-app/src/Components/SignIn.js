import React from 'react';

const SignIn = ({ showSignUp }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form>
        <input type="email" placeholder="Email" className="input-field" required />
        <input type="password" placeholder="Password" className="input-field" required />
        <button type="submit" className="btn-primary">Sign In</button>
      </form>
      <p className="mt-4">Don't have an account? <button onClick={showSignUp} className="text-blue-500">Sign Up</button></p>
    </div>
  );
};

export default SignIn;
