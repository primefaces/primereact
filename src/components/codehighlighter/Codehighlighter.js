import React, {Component} from 'react';

export class CodeHighlighter extends Component {

    componentDidMount() {
        window.Prism.highlightElement(this.code);
    }

    render() {
        return (
            <pre>
                <code ref={(el) => this.code = el} className={this.props.className}>
                    {this.props.children}
                </code>
            </pre>
        );
    }
}

CodeHighlighter.defaultProps = {
    className: null
}