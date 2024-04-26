import React, { useState } from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const showSignIn = () => {
    setIsSignUp(false);
  };

  const showSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="max-w-md mx-auto px-6 py-12">
          {isSignUp ? <SignUp showSignIn={showSignIn} /> : <SignIn showSignUp={showSignUp} />}
        </div>
      </div>
      <div className="hidden md:block w-1/2 bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')"}}></div>
    </div>
  );
};

export default App;
