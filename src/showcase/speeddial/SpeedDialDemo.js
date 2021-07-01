import React, { Component } from 'react';
import { SpeedDial } from '../../components/speeddial/SpeedDial';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { Toast } from '../../components/toast/Toast';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SpeedDialDoc } from './SpeedDialDoc';
import AppDemoActions from '../../AppDemoActions';
import './SpeedDialDemo.scss'

export class SpeedDialDemo extends Component {

    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.toast.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.toast.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.toast.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="speedDial">
                        <h1>Speed Dial</h1>
                        <p>TODO</p>
                    </AppInlineHeader>

                    <AppDemoActions github="speeddial/SpeedDialDemo.js" />
                </div>


                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Linear</h5>
                        <div className="speeddial-linear-demo" style={{ position: 'relative', height: '500px' }}>
                            <SpeedDial model={this.items} direction="up" />
                            <SpeedDial model={this.items} direction="down" />
                            <SpeedDial model={this.items} direction="left" />
                            <SpeedDial model={this.items} direction="right" />
                        </div>
                    </div>


                    <div className="card">
                        <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                        <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                            <SpeedDial model={this.items} radius={80} type="circle" />
                            <SpeedDial model={this.items} radius={80} direction="up" type="semi-circle" />
                            <SpeedDial model={this.items} radius={80} direction="down" type="semi-circle" />
                            <SpeedDial model={this.items} radius={80} direction="left" type="semi-circle" />
                            <SpeedDial model={this.items} radius={80} direction="right" type="semi-circle" />
                            <SpeedDial model={this.items} radius={120} direction="up-left" type="quarter-circle" />
                            <SpeedDial model={this.items} radius={120} direction="up-right" type="quarter-circle" />
                            <SpeedDial model={this.items} radius={120} direction="down-left" type="quarter-circle" />
                            <SpeedDial model={this.items} radius={120} direction="down-right" type="quarter-circle" />
                        </div>
                    </div>

                    <div className="card">
                        <h5>Tooltip</h5>
                        <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '300px' }}>
                            <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                            <SpeedDial model={this.items} direction="up" className="speeddial-right" />

                            <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                            <SpeedDial model={this.items} direction="up" className="speeddial-left" />
                        </div>
                    </div>

                    <div className="card">
                        <h5>Transition Duration, Icon and No Rotate Animation</h5>
                        <div className="speeddial-delay-demo" style={{ position: 'relative', height: '300px' }}>
                            <SpeedDial model={this.items} direction="up" transitionDuration={80} showIcon="pi pi-bars" hideIcon="pi pi-times"/>
                        </div>
                    </div>
                </div>

                <SpeedDialDoc />
            </div>
        )
    }
}
