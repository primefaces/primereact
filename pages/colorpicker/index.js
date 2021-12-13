import React, { Component } from 'react';
import { ColorPicker } from '../../components/lib/colorpicker/ColorPicker';
import { ColorPickerDoc } from '../../components/doc/colorpicker';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class ColorPickerDemo extends Component {

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
                <Head>
                    <title>React ColorPicker Component</title>
                    <meta name="description" content="ColorPicker is an input component to select a color." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ColorPicker</h1>
                        <p>ColorPicker is an input component to select a color.</p>
                    </div>
                    <DocActions github="colorpicker/index.js" />
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
