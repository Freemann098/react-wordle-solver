import './word-solver-component.css';
import React, { Component } from "react";
import getWords from '../services/word-service';

import WordListComponent from './word-list-component/word-list-component';
import LetterInputComponent from './letter-input-component/letter-input-component';

class WordleSolverComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {words: [{word: 'None'}]};
        this.letterInputRef = React.createRef();
        this.correctLetters = [];
        this.knownLetters = '';
        this.incorrectLetters = '';
    }

    lettersUpdated(correctletters, knownletters, incorrectletters) {
        this.correctLetters = correctletters;
        this.knownLetters = knownletters;
        this.incorrectLetters = incorrectletters;
    }

    searchClicked = async () => {
        let newWords = [];
        this.setState({words: [{word: 'Loading'}]});

        await getWords(this.correctLetters, this.knownLetters, this.incorrectLetters)
            .then((res) => {
                for (let i = 0; i < res.length; i++) {
                    newWords.push( {word: res[i]} );
                }
            })
            .catch((err) => {
                newWords.push( {word: 'Error retrieving words'} );
                console.log(err);
            }
        );
        this.setState({words: newWords});
    }

    render() {
        return (
            <div>
                <div className="word-solver-area">
                    <LetterInputComponent letterUpdate={ (c, k, i) => this.lettersUpdated(c, k, i) }></LetterInputComponent>
                    <br></br>
                    <button onClick={this.searchClicked}>Search</button>
                </div>
                <div className="word-list">
                    <br></br>
                    <WordListComponent words={this.state.words}></WordListComponent>
                </div>
            </div>
        );
    }
}

export default WordleSolverComponent;