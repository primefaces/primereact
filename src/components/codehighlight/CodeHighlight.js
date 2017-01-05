import React, {Component} from 'react';

export class CodeHighlight extends Component {

    static defaultProps = {
        className: null
    }
    
    static propTypes = {
        className: React.PropTypes.string
    }

    static defaultProps = {
        className: null
    }

    static propTypes = {
        className: React.PropTypes.string
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