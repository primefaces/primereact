import React, { Component } from 'react';
import { BlockUI } from '../../components/lib/blockui/BlockUI';
import { Button } from '../../components/lib/button/Button';
import { Panel } from '../../components/lib/panel/Panel';
import { BlockUIDoc } from '../../components/doc/blockui';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class BlockUIDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blockedPanel: false,
            blockedDocument: false
        };

        this.blockPanel = this.blockPanel.bind(this);
        this.unblockPanel = this.unblockPanel.bind(this);
        this.blockDocument = this.blockDocument.bind(this);
    }

    blockDocument() {
        this.setState({
            blockedDocument: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    blockedDocument: false
                });
            }, 3000);
        });
    }

    blockPanel() {
        this.setState({
            blockedPanel: true
        });
    }

    unblockPanel() {
        this.setState({
            blockedPanel: false
        });
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React BlockUI Component</title>
                    <meta name="description" content="BlockUI can either block other components or the whole page." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>BlockUI</h1>
                        <p>BlockUI can either block other components or the whole page.</p>
                    </div>

                    <DocActions github="blockui/index.js" />
                </div>

                <div className="content-section implementation blockui-demo">
                    <div className="card">
                        <h5>Document</h5>
                        <BlockUI blocked={this.state.blockedDocument} fullScreen />

                        <Button type="button" label="Block" onClick={this.blockDocument} />

                        <h5>Panel</h5>
                        <Button type="button" label="Block" onClick={this.blockPanel} />
                        <Button type="button" label="Unblock" onClick={this.unblockPanel} />

                        <BlockUI blocked={this.state.blockedPanel}>
                            <Panel header="Basic" style={{ marginTop: '20px' }}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </BlockUI>

                        <BlockUI blocked={this.state.blockedPanel} template={<i className="pi pi-lock" style={{'fontSize': '3rem'}} />}>
                            <Panel header="Template" style={{ marginTop: '20px' }}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Panel>
                        </BlockUI>
                    </div>
                </div>

                <BlockUIDoc />
            </div>
        )
    }
}
