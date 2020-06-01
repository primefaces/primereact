import React, { Component } from 'react';
import { Chips } from '../../components/chips/Chips';
import AppContentContext from '../../AppContentContext';
import { ChipsDoc } from './ChipsDoc';

export class ChipsDemo extends Component {

    constructor() {
        super();
        this.state = {
            values1: [],
            values2: [],
            values3: []
        };
    }

    customChip(item) {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chips</h1>
                        <p>Chips is used to enter multiple values on an input field.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("chips")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation p-fluid">
                    <h3>Basic</h3>
                    <Chips value={this.state.values1} onChange={(e) => this.setState({ values1: e.value })}></Chips>

                    <h3>Comma Separator</h3>
                    <Chips value={this.state.values2} onChange={(e) => this.setState({ values2: e.value })} separator=','></Chips>

                    <h3>Template</h3>
                    <Chips value={this.state.values3} onChange={(e) => this.setState({ values3: e.value })} max={5} itemTemplate={this.customChip}></Chips>
                </div>

                <ChipsDoc />
            </div>
        )
    }
}
