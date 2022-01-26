import { Component } from "react";
import githubLogo from '../assets/GitHub-Mark-Light-32px.png'

class FooterComponent extends Component {
    render() {
        const myLink = <a target="_blank" rel="noreferrer" href="https://github.com/chasersmith">Chase Smith</a>;
        const reactLink = <a target="_blank" rel="noreferrer" href="https://reactjs.org/">React</a>;
        const nodeLink = <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/">Node.js</a>;

        return (
            <div>
                <br></br>
                <a target="_blank" rel="noreferrer" href="https://github.com/chasersmith/react-wordle-solver"><img src={githubLogo} alt="github"></img></a>
                <p style={{fontSize: "16px"}}>Made by {myLink} using {reactLink} and {nodeLink} 😁</p>
            </div>
        );
    }
}

export default FooterComponent;