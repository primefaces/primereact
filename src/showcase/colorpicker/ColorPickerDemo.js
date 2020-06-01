import React, { Component } from 'react';
import { ColorPicker } from '../../components/colorpicker/ColorPicker';
import AppContentContext from '../../AppContentContext';
import { ColorPickerDoc } from './ColorPickerDoc';

export class ColorPickerDemo extends Component {

    constructor() {
        super();
        this.state = {
            color1: null,
            color2: '1976D2'
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("colorPicker")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Inline</h3>
                    <ColorPicker inline={true} value={this.state.color1} onChange={(e) => this.setState({ color1: e.value })}></ColorPicker>
                    <p style={{ 'marginTop': '.5em' }}>Selected Color: <span style={{ 'display': 'inline-block', 'width': '32px', 'height': '32px', 'verticalAlign': 'middle', 'backgroundColor': '#' + this.state.color1 }}></span> {this.state.color1} </p>

                    <h3>Overlay</h3>
                    <ColorPicker value={this.state.color2} onChange={(e) => this.setState({ color2: e.value })}></ColorPicker>
                    <p style={{ 'marginTop': '.5em' }}>Selected Color: <span style={{ 'color': '#' + this.state.color2 }}>{this.state.color2}</span></p>
                </div>

                <ColorPickerDoc />
            </div>
        )
    }
}
