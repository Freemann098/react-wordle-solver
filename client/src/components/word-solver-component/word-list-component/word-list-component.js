import { Component } from "react";

import TableBodyComponent from './table-body-component';

class WordListComponent extends Component {
    
    render() {
        const words = this.props.words;

        return (
            <div>
                <h3>Possible words</h3>
                <TableBodyComponent words={words}></TableBodyComponent>
            </div>
        );
    };
}

export default WordListComponent;