import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const showSignIn = () => {
    setIsSignUp(false);
  };

  const showSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isSignUp ? <SignUp showSignIn={showSignIn} /> : <SignIn showSignUp={showSignUp} />}
    </div>
  );
};

export default App;
