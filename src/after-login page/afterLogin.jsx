import React, { useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase.config";
import CharacterList from "./characters-list";

class LoggedIn extends React.Component {
  handleSignOut = () => {
    const auth = getAuth(app);

    signOut(auth)
      .then(() => {
        console.log('Sign-out successful');
        window.location.replace("http://localhost:5173/");
      })
      .catch((error) => {
        console.error('Sign-out error', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Logged in!!!</h2>
        <button onClick={this.handleSignOut}>Sign Out</button>
        <CharacterList />
      </div>
    );
  }
}

const AuthChecker = () => {
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return window.location.replace("http://localhost:5173/");
      }
    });

    return () => unsubscribe();
  }, []);

  return <LoggedIn />;
};

export default AuthChecker;
