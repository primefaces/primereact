import React, { useState, useEffect } from 'react';
import { BlockUI } from '../../components/lib/blockui/BlockUI';
import { Button } from '../../components/lib/button/Button';
import { Panel } from '../../components/lib/panel/Panel';
import BlockUIDoc from '../../components/doc/blockui';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const BlockUIDemo = () => {

    const [blockedPanel, setBlockedPanel] = useState(false);
    const [blockedDocument, setBlockedDocument] = useState(false);

    useEffect(() => {
        if (blockedDocument) {
            setTimeout(() => {
                setBlockedDocument(false);
            }, 3000);
        }
    }, [blockedDocument])

    const blockDocument = () => {
        setBlockedDocument(true);
    }

    const blockPanel = () => {
        setBlockedPanel(true);
    }

    const unblockPanel = () => {
        setBlockedPanel(false);
    }

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
                    <BlockUI blocked={blockedDocument} fullScreen />

                    <Button type="button" label="Block" onClick={blockDocument} />

                    <h5>Panel</h5>
                    <Button type="button" label="Block" onClick={blockPanel} />
                    <Button type="button" label="Unblock" onClick={unblockPanel} />

                    <BlockUI blocked={blockedPanel}>
                        <Panel header="Basic" style={{ marginTop: '20px' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Panel>
                    </BlockUI>

                    <BlockUI blocked={blockedPanel} template={<i className="pi pi-lock" style={{ 'fontSize': '3rem' }} />}>
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

export default BlockUIDemo;
