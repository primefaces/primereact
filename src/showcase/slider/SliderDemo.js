import React, { Component } from 'react';
import { Slider } from '../../components/slider/Slider';
import { InputText } from '../../components/inputtext/InputText';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SliderDoc } from './SliderDoc';
import './SliderDemo.scss';
import AppDemoActions from '../../AppDemoActions';

export class SliderDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: null,
            value2: 50,
            value3: 20,
            value4: 30.5,
            value5: [20,80],
            value6: 50
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="slider">
                        <h1>Slider</h1>
                        <p>Slider is a component to provide input using dragging of a handle.</p>
                    </AppInlineHeader> 
                    <AppDemoActions github="slider/SliderDemo.js" />
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

                        <h5>Decimal Step: {this.state.value4}</h5>
                        <Slider value={this.state.value4} onChange={(e) => this.setState({ value4: e.value })} step={0.5} />

                        <h5>Range: [{this.state.value5[0]}, {this.state.value5[1]}]</h5>
                        <Slider value={this.state.value5} onChange={(e) => this.setState({ value5: e.value })} range />

                        <h5>Vertical: {this.state.value6}</h5>
                        <Slider value={this.state.value6} onChange={(e) => this.setState({ value6: e.value })} orientation="vertical" />
                    </div>
                </div>

                <SliderDoc />
            </div>
        );
    }
}
