import React, { useState } from 'react';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import backgroundImage from '../Assets/background.png'; 

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const showSignIn = () => {
    setIsSignUp(false);
  };

  const showSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="max-w-md mx-auto px-6 py-12">
          {/* Utilisation d'une grille flex pour centrer le contenu */}
          {isSignUp ? <SignUp showSignIn={showSignIn} /> : <SignIn showSignUp={showSignUp} />}
        </div>
      </div>
    </div>
  );
};

export default App;
