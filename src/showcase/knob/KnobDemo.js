import React, {Component} from 'react';
import {Knob} from '../../components/knob/Knob';
import {AppInlineHeader} from '../../AppInlineHeader';
import {KnobDoc} from './KnobDoc';

export class KnobDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1 : 0,
            value2 : 50,
            value3 : 75,
            value4 : 10,
            value5 : 40,
            value6 : 60,
            value7 : 40,
            value8 : 60,
            value9 : 50,
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="knob" showInputStyle>
                        <h1>Knob</h1>
                        <p>Knob is a form component to define number inputs with a dial.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-grid p-formgrid p-text-center">
                            <div className="p-field p-col-12 p-md-4">
                                <h5>Basic</h5>
                                <Knob value={this.state.value1} onChange={(e)=>this.setState({value1: e.value})}/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5>Readonly</h5>
                                <Knob value={this.state.value2} readOnly/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5>Disabled</h5>
                                <Knob value={this.state.value3} disabled/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5 className="p-mt-3">Min/Max</h5>
                                <Knob value={this.state.value4} min={-50} max={50} onChange={(e)=>this.setState({value4: e.value})}/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5 className="p-mt-3">Step</h5>
                                <Knob value={this.state.value5} step={10} onChange={(e)=>this.setState({value5: e.value})}/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5 className="p-mt-3">Template</h5>
                                <Knob value={this.state.value6} valueTemplate={"{value}%"} onChange={(e)=>this.setState({value6: e.value})}/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5 className="p-mt-3">Stroke</h5>
                                <Knob value={this.state.value7} strokeWidth={5} onChange={(e)=>this.setState({value7: e.value})}/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5 className="p-mt-3">Size</h5>
                                <Knob value={this.state.value8} size={200} onChange={(e)=>this.setState({value8: e.value})}/>
                            </div>
                            <div className="p-field p-col-12 p-md-4">
                                <h5 className="p-mt-3">Color</h5>
                                <Knob value={this.state.value9} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e)=>this.setState({value9: e.value})}/>
                            </div>
                        </div>
                    </div>
                </div>

                <KnobDoc/>
            </div>
        )
    }
}
