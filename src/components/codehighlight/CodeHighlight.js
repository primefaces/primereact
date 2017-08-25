import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import highlight from 'highlight.js';
import './CodeHighlight.css'
import classNames from 'classnames';

export class CodeHighlight extends Component {
    static defaultProps = {
        className:null,
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

        let codeClass=classNames("hljs ",this.props.className);

        return <pre style={this.props.style}>
            <code ref={el=>this.code=el} className={codeClass}>
                {this.props.children}
            </code>
        </pre>;


    }
}