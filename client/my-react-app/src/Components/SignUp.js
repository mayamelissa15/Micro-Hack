import React from 'react';

const SignUp = ({ showSignIn }) => {
  return (
    <div className="container mx-auto max-w-md p-16 bg-white rounded-2xl shadow-lg">
      <form>
        <div className="mb-2">
          <h2 className="text-2xl font-bold mb-2 text-black">Sign Up</h2>
          <p className="text-slate-600 text-md mb-10">Create an account to get started.</p>
          <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">E-mail</label>
          <input type="email" id="email" placeholder="Enter your email" className="input-field px-10 py-2 rounded-lg border border-gray-300 focus:outline-none w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-black font-semibold mb-2">Password</label>
          <input type="password" id="password" placeholder="Enter your password" className="input-field px-10 py-2 rounded-lg border border-gray-300 focus:outline-none w-full" required />
        </div>
        <button type="submit" className="btn-primary w-full py-4 my-4 bg-[#69369F] text-xs text-white font-semibold">Sign Up</button>
      </form>
      <p className="mt-8 text-center text-black font-medium text-sm">Already have an account? <button onClick={showSignIn} className="text-[#69369F] text-normal">Sign In</button></p>
    </div>
  );
};

export default SignUp;
