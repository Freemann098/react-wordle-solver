import './letter-input-component.css';

import { Component } from "react";

class WordInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {correctLetters: ['','','','',''],
                      knownLetters: '',
                      incorrectLetters: ''};
    }

    handleChange(correct, known, incorrect) {
        this.setState({correctLetters: correct, knownLetters: known, incorrectLetters: incorrect}, () => {
            this.props.letterUpdate(this.state.correctLetters, this.state.knownLetters, this.state.incorrectLetters);
        });
    }

    updateCorrectLetters(pos, val) {
        let Letters = this.state.correctLetters;
        let tempKnown = this.state.knownLetters;
        let tempIncorrect = this.state.incorrectLetters;

        Letters[pos] = val;
        this.handleChange(Letters, tempKnown, tempIncorrect);
    }

    updateKnownLetters(val) {
        let tempCorrect = this.state.correctLetters;
        let tempIncorrect = this.state.incorrectLetters;

        this.handleChange(tempCorrect, val, tempIncorrect);
    }

    updateIncorrectLetters(val) {
        let tempCorrect = this.state.correctLetters;
        let tempKnown = this.state.knownLetters;

        this.handleChange(tempCorrect, tempKnown, val);
    }

    render(){
        const focusNextInput = (e) => {
            const {maxLength, value, name} = e.target;

            if (value.length >= maxLength) {
                if (parseInt(name) < 5) {
                    const nextInput = document.querySelector(
                        `input[name="${parseInt(name) + 1}"]`
                    );

                    if (nextInput !== null) {
                        nextInput.focus();
                    }
                }
            } else {
                if (parseInt(name) > 1) {
                    const nextInput = document.querySelector(
                        `input[name="${parseInt(name) - 1}"]`
                    );

                    if (nextInput !== null) {
                        nextInput.focus();
                    }
                }
            }
        }

        return (
            <div>
                <p>Known letters in correct position</p>
                <input 
                    value={this.state.correctLetters[0]}
                    name={1}
                    onChange={ (e) => {this.updateCorrectLetters(0, e.target.value); focusNextInput(e);} } 
                    className="correct-input" 
                    type="text" 
                    maxLength={1}>
                </input>
                <input 
                    value={this.state.correctLetters[1]}
                    name={2}
                    onChange={ (e) => {this.updateCorrectLetters(1, e.target.value); focusNextInput(e);} } 
                    className="correct-input" 
                    type="text" 
                    maxLength={1}>
                </input>
                <input 
                    value={this.state.correctLetters[2]}
                    name={3}
                    onChange={ (e) => {this.updateCorrectLetters(2, e.target.value); focusNextInput(e);} } 
                    className="correct-input" 
                    type="text" 
                    maxLength={1}>
                </input>
                <input 
                    value={this.state.correctLetters[3]}
                    name={4}
                    onChange={ (e) => {this.updateCorrectLetters(3, e.target.value); focusNextInput(e);} } 
                    className="correct-input" 
                    type="text" 
                    maxLength={1}>
                </input>
                <input 
                    value={this.state.correctLetters[4]}
                    name={5}
                    onChange={ (e) => {this.updateCorrectLetters(4, e.target.value); focusNextInput(e);} } 
                    className="correct-input" 
                    type="text" 
                    maxLength={1}>
                </input>

                <p>Other known letters in word</p>
                <input 
                    value={this.state.knownLetters}
                    onChange={ (e) => {this.updateKnownLetters(e.target.value)} }
                    className="other-input" 
                    type="text"
                    maxLength={5}>
                </input>

                <p>Known letters that aren't in word</p>
                <input 
                    value={this.state.incorrectLetters} 
                    onChange={ (e) => {this.updateIncorrectLetters(e.target.value)} }
                    className="other-input" 
                    type="text">
                </input>
            </div>
        );
    }
}

export default WordInputComponent;