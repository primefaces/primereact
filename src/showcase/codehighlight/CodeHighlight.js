import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';

export class CodeHighlight extends Component {
    
    static defaultProps = {
        className: null,
        style: null
    };

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        if(Prism) {
            Prism.highlightElement(this.codeElement);
        }
    }

    render() {
        return (
            <pre style={this.props.style}>
                <code ref={el => this.codeElement = el} className={this.props.className}>
                    {this.props.children}
                </code>
            </pre>
        );
    }
}