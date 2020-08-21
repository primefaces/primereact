import React, { Component } from 'react';
import { Slider } from '../../components/slider/Slider';
import { InputText } from '../../components/inputtext/InputText';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SliderDoc } from './SliderDoc';
import './SliderDemo.scss';

export class SliderDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            value2: 50,
            value3: 20,
            value4: [20,80],
            value5: 50
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="slider" showInputStyle>
                        <h1>Slider</h1>
                        <p>Slider is a component to provide input using dragging of a handle.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation slider-demo">
                    <div className="card">
                        <h5>Basic: {this.state.value1}</h5>
                        <Slider value={this.state.value1} onChange={(e) => this.setState({ value1: e.value })} />

                        <h5>Input: {this.state.value2}</h5>
                        <InputText value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />
                        <Slider value={this.state.value2} onChange={(e) => this.setState({ value2: e.value })} />

                        <h5>Step: {this.state.value3}</h5>
                        <Slider value={this.state.value3} onChange={(e) => this.setState({ value3: e.value })} step={20} />

                        <h5>Range: [{this.state.value4[0]}, {this.state.value4[1]}]</h5>
                        <Slider value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} range />

                        <h5>Vertical: {this.state.value5}</h5>
                        <Slider value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} orientation="vertical" />
                    </div>
                </div>

                <SliderDoc />
            </div>
        );
    }
}
