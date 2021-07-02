import React, { Component } from 'react';

export class DockDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div style={{height: '800px'}}>
                <h1>TODO</h1>
            </div>
        )
    }
}
