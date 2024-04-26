import React from 'react';

const SignUp = ({ showSignIn }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form>
        <input type="email" placeholder="Email" className="input-field" required />
        <input type="password" placeholder="Password" className="input-field" required />
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      <p className="mt-4">Already have an account? <button onClick={showSignIn} className="text-blue-500">Sign In</button></p>
    </div>
  );
};

export default SignUp;
