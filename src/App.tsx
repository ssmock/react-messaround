import React, { Component } from 'react';
import { connectDirect } from './infrastructure/connectStore';
import { Root } from './types/Root';
import './App.scss';
import { Splash } from './types/Splash';

class App extends Component<Root, any> {
  constructor(props: Root) {
    super(props);

    this.state = {
      splash: props.splash
    };
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={this.doIt.bind(this)}>
              Do it
            </button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.splash.text} - {this.splashText()}
          </a>
        </header>
      </div>
    );
  }

  splashText() {
    return (this.props.splash || Splash.default()).text;
  }

  doIt() {
    this.props.dispatch({ type: "change-splash", args: "zeep" });
  }
}

export default connectDirect()(App);
