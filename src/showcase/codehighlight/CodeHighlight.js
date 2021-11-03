import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';

export class CodeHighlight extends Component {

    static defaultProps = {
        lang: 'jsx',
        style: null
    };

    static propTypes = {
        lang: PropTypes.string,
        style: PropTypes.object
    };

    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        if (Prism) {
            Prism.highlightElement(this.codeElement);
        }
    }

    render() {
        const languageClassName = `language-${this.props.lang}`;

        return (
            <pre style={this.props.style}>
                <code ref={el => this.codeElement = el} className={languageClassName}>
                    {this.props.children}&nbsp;
                </code>
            </pre>
        );
    }
}
