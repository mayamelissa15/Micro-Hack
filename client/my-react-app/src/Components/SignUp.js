import React from 'react';

const SignUp = ({ showSignIn }) => {
  return (
    <div className="container mx-auto max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form>
        <input type="email" placeholder="Email" className="input-field mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required />
        <input type="password" placeholder="Password" className="input-field mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required />
        <button type="submit" className="btn-primary w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
      </form>
      <p className="mt-4 text-center text-gray-600">Already have an account? <button onClick={showSignIn} className="text-blue-500">Sign In</button></p>
    </div>
  );
};

export default SignUp;
