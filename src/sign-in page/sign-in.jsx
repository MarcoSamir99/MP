import { Component} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase.config';

class SignIn extends Component {
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

  handleSignIn = () => {
    const { email, password } = this.state;
    const auth = getAuth(app);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const token = userCredential.user.accessToken;
        const loggedInURL = `http://localhost:5173/logged-in?token=${token}`;
        window.location.href = loggedInURL;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('Sign in error:', errorMessage);
        this.setState({ error: errorMessage });
      });
  };
  

  render() {
    return (
      <div>
        <h2>Sign in</h2>
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
          <button onClick={this.handleSignIn}>Sign In</button>
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

export default SignIn;
