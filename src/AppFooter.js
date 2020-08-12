import React, { Component } from 'react';

export class AppFooter extends Component {

    constructor() {
        super();

        this.version = require('../package.json') && require('../package.json').version;
    }

    render() {
        return (
            <div className="layout-footer">
                <div className="layout-footer-left">
                    <span>PrimeReact {this.version} by </span>
                    <a href="http://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeTek</a>
                </div>

                <div className="layout-footer-right">
                    <a href="https://github.com/primefaces/primereact" className="p-mr-3">
                        <i className="pi pi-github"></i>
                    </a>
                    <a href="https://twitter.com/primereact">
                        <i className="pi pi-twitter"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default AppFooter;
