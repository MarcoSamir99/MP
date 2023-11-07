
import { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
            <a href="/sign-in">
             <button>Sign In</button>
            </a>
            <a href="/sign-up">
             <button>Sign up</button>
            </a>
        </div>
    );
  }
}
export default Home;