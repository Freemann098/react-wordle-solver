import { Component } from "react";

class TableBodyComponent extends Component {

    render() {
        const words = this.props.words;

        const rows = words.map((row, index) => {
            return (
                <li key={index}>
                    {row.word}
                </li>
            );
        });

        return (
            <ul>{rows}</ul>
        );
    }
}

export default TableBodyComponent;