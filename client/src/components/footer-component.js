import { Component } from "react";

class FooterComponent extends Component {
    render() {
        const myLink = <a target="_blank" rel="noreferrer" href="https://github.com/Freemann098">Chase Smith</a>;
        const reactLink = <a target="_blank" rel="noreferrer" href="https://reactjs.org/">React</a>;
        const nodeLink = <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/">Node.js</a>;

        return (
            <p style={{fontSize: "16px"}}>Made by {myLink} using {reactLink} and {nodeLink} 😁</p>
        );
    }
}

export default FooterComponent;