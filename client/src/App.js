import { Component } from 'react';
import './App.css';

import FooterComponent from './components/footer-component';
import HeaderComponent from './components/header-component';
import WordleSolverComponent from './components/word-solver-component/wordle-solver-component'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-body">
          <HeaderComponent></HeaderComponent>
          <WordleSolverComponent></WordleSolverComponent>
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default App;
