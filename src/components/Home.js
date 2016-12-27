import React from 'react';
import {Link} from 'react-router';
import Logo from './components/logo';

let Home = () => (
  <div className="container">
    <Logo/>
    <h1>Youre not just a resume!</h1>
    <h3>Show recruiters at Company that you’ve got the skills they want.</h3>
    <Link to="/signup"><button>Sign up now</button></Link>
  </div>
);

export default Home;
