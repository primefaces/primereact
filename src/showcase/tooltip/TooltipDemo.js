import React, { Component } from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { Knob } from '../../components/knob/Knob';
import { Slider } from '../../components/slider/Slider';
import { Badge } from '../../components/badge/Badge';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TooltipDoc } from './TooltipDoc';
import AppDemoActions from '../../AppDemoActions';
import './TooltipDemo.scss';

export class TooltipDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saveBtnTooltipText: 'Click to proceed',
            knobValue: 60,
            sliderValue: 20,
            count: 0
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tooltip">
                        <h1>Tooltip</h1>
                        <p>Tooltip functionality is integrated within various PrimeReact components.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="tooltip/TooltipDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Positions</h5>
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-3">
                                <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                            </div>
                        </div>

                        <h5>Focus and Blur</h5>
                        <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                        <h5>Dynamic Tooltip</h5>
                        <div className="p-d-flex p-ai-center">
                            <Button type="button" label="Save" icon="pi pi-check" tooltip={this.state.saveBtnTooltipText} onClick={() => this.setState({saveBtnTooltipText: 'Completed'})} />

                            <Tooltip target=".knob" content={`${this.state.knobValue}%`} />
                            <Knob className="knob p-ml-3" value={this.state.knobValue} onChange={(e) => this.setState({ knobValue: e.value})} showValue={false} />

                            <Tooltip target=".slider>.p-slider-handle" content={`${this.state.sliderValue}%`} position="top" event="focus" />
                            <Slider className="slider p-ml-3" value={this.state.sliderValue} onChange={(e) => this.setState({ sliderValue: e.value })} style={{ width: '14rem' }} />
                        </div>

                        <h5>MouseTrack</h5>
                        <div className="p-d-flex p-ai-center">
                            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                            <img className="logo p-ml-2" alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                        </div>

                        <h5>AutoHide</h5>
                        <div className="p-d-flex p-ai-center">
                            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                            <Tooltip target=".tooltip-button" autoHide={false}>
                                <div className="p-d-flex p-ai-center">
                                    <span style={{minWidth: '5rem'}}>Count: {this.state.count}</span>
                                    <Button type="button" icon="pi pi-plus" onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))} className="p-button-rounded p-button-success p-ml-2"></Button>
                                    <Button type="button" icon="pi pi-minus" onClick={() => this.setState((prevState) => ({ count: prevState.count - 1 }))} className="p-button-rounded p-button-danger p-ml-2"></Button>
                                </div>
                            </Tooltip>
                            <Button className="tooltip-button p-ml-2" type="button" label="Save" icon="pi pi-check" />
                        </div>

                        <h5>Template</h5>
                        <div className="p-d-flex p-ai-center">
                            <Tooltip target=".custom-tooltip-btn">
                                <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                            </Tooltip>

                            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
                        </div>

                        <h5>Target</h5>
                        <div className="p-d-flex p-ai-center">
                            <Tooltip target=".custom-target-icon" />

                            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge" data-pr-tooltip="No notifications" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '2rem', cursor: 'pointer' }}>
                                <Badge severity="danger"></Badge>
                            </i>
                        </div>

                        <h5>Color</h5>
                        <div className="p-d-flex p-ai-center p-flex-wrap">
                            <Button label="Blue" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Blue" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
                            <Button label="Green" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Green" tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
                            <Button label="Yellow" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Yellow" tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
                            <Button label="Cyan" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Cyan" tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
                            <Button label="Pink" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Pink" tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
                            <Button label="Indigo" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Indigo" tooltipOptions={{ className: 'indigo-tooltip', position: 'top' }} />
                            <Button label="Teal" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Teal" tooltipOptions={{ className: 'teal-tooltip', position: 'top' }} />
                            <Button label="Blue Gray" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Blue Gray" tooltipOptions={{ className: 'bluegray-tooltip', position: 'top' }} />
                            <Button label="Purple" className="p-button-secondary p-button-outlined p-mr-3 p-mb-2" tooltip="Purple" tooltipOptions={{ className: 'purple-tooltip', position: 'top' }} />
                        </div>
                    </div>
                </div>

                <TooltipDoc />
            </div>
        )
    }
}
