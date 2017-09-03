import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import highlight from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

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
        highlight.initHighlighting.called = false;
        this.highlightCode();
    }

    highlightCode() {
        const domNode = ReactDOM.findDOMNode(this.code);
        highlight.highlightBlock(domNode);
    }

    render() {
        return <pre style={this.props.style}>
                <code ref={el=>this.code=el} className={this.props.className}>
                    {this.props.children}
                </code>
               </pre>
    }
}