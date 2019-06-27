import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import * as R from 'ramda';
import {Maybe} from 'ramda-fantasy';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  crossProduct() {

    const mm1 = ['dsds', 'dsds'];
    const mm2 = ['xx', 'yy'];

    return R.xprod(mm1, mm2);

  }


  ramdaTestFunc() {

    // BEGIN of Ramda code

    const initial2 = ['dsds', 'dsds'];

    const rt = Maybe(initial2).getOrElse(['жопа']);
    const res1 = R.map(R.toUpper)(rt);
    console.log(res1);
    // END of Ramda code

    const cpr= this.crossProduct();

    return <div>ramdaTestFunc: xprod (cross product) : {cpr}</div>
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        { this.ramdaTestFunc()}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
