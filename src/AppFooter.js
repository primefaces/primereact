import React, { Component } from 'react';

export class AppFooter extends Component {

    constructor() {
        super();

        this.version = require('../package.json') && require('../package.json').version;
    }

    render() {
        return (
            <div className="content-section layout-footer clearfix">
                <span>PrimeReact {this.version} by <a href="http://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeTek</a></span>
                <div className="footer-links">
                    <a href="https://github.com/primefaces/primereact"><i className=" icon-github fa fa-github-square"></i></a>
                    <a href="https://twitter.com/primereact"><i className="icon-twitter fa fa-twitter-square"></i></a>
                </div>
            </div>
        );
    }
}

export default AppFooter;
