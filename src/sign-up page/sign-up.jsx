import { Component} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase.config"

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = () => {
    const { email, password } = this.state;
    const auth = getAuth(app);
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const token = userCredential.user.accessToken;
        const loggedInURL = `http://localhost:5173/logged-in?token=${token}`;
          window.location.href = loggedInURL;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('Sign up error:', errorMessage);
        this.setState({ error: errorMessage });
      });
  };
  

  render() {
    return (
      <div>
        <h2>Sign-up</h2>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSignUp}>Sign Up</button>
        </div>
        {this.state.error && <p>{this.state.error}</p>}
        <div>
          <a href='/'>
          <button>Home</button>
          </a> 
        </div>
      </div>
    );
  }
}

export default SignUp;
