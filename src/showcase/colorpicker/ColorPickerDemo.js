import React, { Component } from 'react';
import { ColorPicker } from '../../components/colorpicker/ColorPicker';
import { ColorPickerDoc } from './ColorPickerDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class ColorPickerDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color1: null,
            color2: '1976D2'
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="colorPicker">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Inline</h5>
                        <ColorPicker value={this.state.color1} onChange={(e) => this.setState({ color1: e.value })} inline></ColorPicker>

                        <h5>Overlay</h5>
                        <ColorPicker value={this.state.color2} onChange={(e) => this.setState({ color2: e.value })}></ColorPicker>
                    </div>
                </div>

                <ColorPickerDoc />
            </div>
        )
    }
}
