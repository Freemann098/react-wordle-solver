import { Component } from "react";

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <h1>🔠 Wordle Solver</h1>
                <p>Simple 5-letter <a target="_blank" rel="noreferrer" href="https://www.powerlanguage.co.uk/wordle/">Wordle</a> Solver</p>
            </header>
        );
    }
}

export default HeaderComponent;