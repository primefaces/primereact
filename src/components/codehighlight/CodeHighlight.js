import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CodeHighlight extends Component {

    static defaultProps = {
        className: null
    }
    
    static propTypes = {
        className: PropTypes.string
    }

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