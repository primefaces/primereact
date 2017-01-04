import React, { Component } from 'react';
import { Spinner } from '../../components/spinner/Spinner';

export class SpinnerDemo extends Component {

    constructor() {
        super();
        this.state = {};

        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeMinMax = this.onChangeMinMax.bind(this);
        this.onChangeStep = this.onChangeStep.bind(this);
    }

    onChangeBasic(e) {
        this.setState({ value: e.value });
    }

    onChangeMinMax(e) {
        this.setState({ value2: e.value });
    }

    onChangeStep(e) {
        this.setState({ value3: e.value });
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Spinner</h1>
                        <p>Spinner is an input component to provide a numerical input.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic: {this.state.value}</h3>
                    <Spinner value={this.state.value} size={30} onChange={this.onChangeBasic} />

                    <h3>Min/Max: {this.state.value2}</h3>
                    <Spinner value={this.state.value2} size={30} onChange={this.onChangeMinMax} min={0} max={100} />

                    <h3>Step: {this.state.value3}</h3>
                    <Spinner value={this.state.value3} size={30} onChange={this.onChangeStep} step={0.25} />

                    <h3>Disabled</h3>
                    <Spinner value={this.state.value4} size={30} disabled={true} />
                </div>
            </div>
        );
    }
}