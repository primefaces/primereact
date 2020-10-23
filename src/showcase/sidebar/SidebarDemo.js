import React, { Component } from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SidebarDoc } from './SidebarDoc';

export class SidebarDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFullScreen: false,
            visibleCustomToolbar: false
        };
    }

    render() {
        const customIcons = (
            <React.Fragment>
                <button className="p-sidebar-icon p-link p-mr-1">
                    <span className="pi pi-print" />
                </button>
                <button className="p-sidebar-icon p-link p-mr-1">
                    <span className="pi pi-arrow-right" />
                </button>
            </React.Fragment>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="sidebar">
                        <h1>Sidebar</h1>
                        <p>Sidebar is a panel component displayed as an overlay.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({ visibleLeft: false })}>
                            <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                            <Button type="button" onClick={() => this.setState({ visibleLeft: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                            <Button type="button" onClick={() => this.setState({ visibleLeft: false })} label="Cancel" className="p-button-secondary" />
                        </Sidebar>

                        <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={() => this.setState({ visibleRight: false })}>
                            <h1 style={{ fontWeight: 'normal' }}>Right Sidebar</h1>
                            <Button type="button" onClick={() => this.setState({ visibleRight: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                            <Button type="button" onClick={() => this.setState({ visibleRight: false })} label="Cancel" className="p-button-secondary" />
                        </Sidebar>

                        <Sidebar visible={this.state.visibleTop} position="top" baseZIndex={1000000} onHide={() => this.setState({ visibleTop: false })}>
                            <h1 style={{ fontWeight: 'normal' }}>Top Sidebar</h1>
                            <Button type="button" onClick={() => this.setState({ visibleTop: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                            <Button type="button" onClick={() => this.setState({ visibleTop: false })} label="Cancel" className="p-button-secondary" />
                        </Sidebar>

                        <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ visibleBottom: false })}>
                            <h1 style={{ fontWeight: 'normal' }}>Bottom Sidebar</h1>
                            <Button type="button" onClick={() => this.setState({ visibleBottom: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                            <Button type="button" onClick={() => this.setState({ visibleBottom: false })} label="Cancel" className="p-button-secondary" />
                        </Sidebar>

                        <Sidebar visible={this.state.visibleFullScreen} fullScreen baseZIndex={1000000} onHide={() => this.setState({ visibleFullScreen: false })}>
                            <h1 style={{ fontWeight: 'normal' }}>Full Screen Sidebar</h1>
                            <Button type="button" onClick={() => this.setState({ visibleFullScreen: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                            <Button type="button" onClick={() => this.setState({ visibleFullScreen: false })} label="Cancel" className="p-button-secondary" />
                        </Sidebar>

                        <Sidebar visible={this.state.visibleCustomToolbar} baseZIndex={1000000} onHide={() => this.setState({ visibleCustomToolbar: false })} icons={customIcons}>
                            <h1 style={{ fontWeight: 'normal' }}>Sidebar with custom icons</h1>
                            <Button type="button" onClick={() => this.setState({ visibleCustomToolbar: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                            <Button type="button" onClick={() => this.setState({ visibleCustomToolbar: false })} label="Cancel" className="p-button-secondary" />
                        </Sidebar>

                        <Button icon="pi pi-arrow-right" onClick={() => this.setState({ visibleLeft: true })} className="p-mr-2" />
                        <Button icon="pi pi-arrow-left" onClick={() => this.setState({ visibleRight: true })} className="p-mr-2" />
                        <Button icon="pi pi-arrow-down" onClick={() => this.setState({ visibleTop: true })} className="p-mr-2" />
                        <Button icon="pi pi-arrow-up" onClick={() => this.setState({ visibleBottom: true })} className="p-mr-2" />
                        <Button icon="pi pi-th-large" onClick={() => this.setState({ visibleFullScreen: true })} className="p-mr-2" />
                        <Button icon="pi pi-plus" onClick={() => this.setState({ visibleCustomToolbar: true })} />
                    </div>
                </div>

                <SidebarDoc />

            </div>
        )
    }
}
