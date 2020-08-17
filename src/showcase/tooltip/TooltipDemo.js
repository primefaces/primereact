import React, { Component } from 'react';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TooltipDoc } from './TooltipDoc';

export class TooltipDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saveBtnTooltipText: 'Click to proceed'
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

                        <h5>Button</h5>
                        <Button type="button" label="Save" icon="pi pi-check" tooltip={this.state.saveBtnTooltipText} onClick={() => this.setState({saveBtnTooltipText: 'Completed'})} />

                        <h5>MouseTrack</h5>
                        <div className="p-d-flex p-ai-center">
                            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                            <img className="logo p-ml-2" alt="logo" src="showcase/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                        </div>
                    </div>
                </div>

                <TooltipDoc />
            </div>
        )
    }
}
