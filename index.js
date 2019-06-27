import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


// BEGIN of Ramda code
import * as R from 'ramda';
import {Maybe} from 'ramda-fantasy';

const initial2 = ['dsds', 'dsds'];

const rt = Maybe(initial2).getOrElse(['жопа']);
const res1 = R.map(R.toUpper)(rt);
console.log(res1);
// END of Ramda code

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
