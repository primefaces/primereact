import React, { Component } from 'react';
import { Sidebar } from '../../components/lib/sidebar/Sidebar';
import { Button } from '../../components/lib/button/Button';
import { SidebarDoc } from '../../components/doc/sidebar';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class SidebarDemo extends Component {

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
                <Head>
                    <title>React Sidebar Component</title>
                    <meta name="description" content="Sidebar is a panel component displayed as an overlay." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h3>Sidebar</h3>
                        <p>Sidebar is a panel component displayed as an overlay.</p>
                    </div>
                    <DocActions github="sidebar/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <Sidebar visible={this.state.visibleLeft} onHide={() => this.setState({ visibleLeft: false })}>
                            <h3>Left Sidebar</h3>
                        </Sidebar>

                        <Sidebar visible={this.state.visibleRight} position="right" onHide={() => this.setState({ visibleRight: false })}>
                            <h3>Right Sidebar</h3>
                        </Sidebar>

                        <Sidebar visible={this.state.visibleTop} position="top" onHide={() => this.setState({ visibleTop: false })}>
                            <h3>Top Sidebar</h3>
                        </Sidebar>

                        <Sidebar visible={this.state.visibleBottom} position="bottom" onHide={() => this.setState({ visibleBottom: false })}>
                            <h3>Bottom Sidebar</h3>
                        </Sidebar>

                        <Sidebar visible={this.state.visibleFullScreen} fullScreen onHide={() => this.setState({ visibleFullScreen: false })}>
                            <h3>Full Screen Sidebar</h3>
                        </Sidebar>

                        <Sidebar visible={this.state.visibleCustomToolbar} onHide={() => this.setState({ visibleCustomToolbar: false })} icons={customIcons}>
                            <h3>Sidebar with custom icons</h3>
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
