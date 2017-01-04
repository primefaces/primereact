import React, {Component} from 'react';
import prismjs from 'prismjs/prism.js';

export class Codehighlighter extends Component {

    componentDidMount() {
        prismjs.highlightElement(this.code);
        console.log(this.code);
    }

    componentDidUpdate() {
        prismjs.highlightElement(this.code);
    }

    render() {
        console.log(this.props.children);
        return (
            <div>
                <pre>
                    <code ref={(el) => this.code = el} className={this.props.className}>
                        {this.props.children}
                    </code>
                </pre>
            </div>
        );
    }
}

Codehighlighter.defaultProps = {
    children: null,
    className: null
}