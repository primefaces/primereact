import React, { useRef } from 'react';
import { SpeedDial } from '../../components/lib/speeddial/SpeedDial';
import { Tooltip } from '../../components/lib/tooltip/Tooltip';
import { Toast } from '../../components/lib/toast/Toast';
import SpeedDialDoc from '../../components/doc/speeddial';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import Link from 'next/link';

const SpeedDialDemo = () => {

    const toast = useRef(null);

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            template: (item, options) => {
                return (
                    <Link href="/fileupload">
                        <a className={options.className} data-pr-tooltip={item.label}>
                            <span className="p-speeddial-action-icon pi pi-upload"></span>
                        </a>
                    </Link>
                )
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

    return (
        <div>
            <Head>
                <title>React Speed Dial Component</title>
                <meta name="description" content="When pressed, a floating action button can display multiple primary actions that can be performed on a page." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Speed Dial</h1>
                    <p>When pressed, a floating action button can display multiple primary actions that can be performed on a page.</p>
                </div>

                <DocActions github="speeddial/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast} />

                <div className="card">
                    <h5>Linear</h5>
                    <div className="speeddial-linear-demo" style={{ position: 'relative', height: '500px' }}>
                        <SpeedDial model={items} direction="up" />
                        <SpeedDial model={items} direction="down" />
                        <SpeedDial model={items} direction="left" />
                        <SpeedDial model={items} direction="right" />
                    </div>
                </div>

                <div className="card">
                    <h5>Circle, Semi-Circle and Quarter-Circle</h5>
                    <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                        <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                        <SpeedDial model={items} radius={80} direction="up" type="semi-circle" />
                        <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
                        <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
                        <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
                        <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                        <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                        <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                        <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
                    </div>
                </div>

                <div className="card">
                    <h5>Tooltip</h5>
                    <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
                        <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                        <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

                        <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                        <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
                    </div>
                </div>

                <div className="card">
                    <h5>Transition Duration, Icon and No Rotate Animation</h5>
                    <div className="speeddial-delay-demo" style={{ position: 'relative', height: '350px' }}>
                        <SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
                    </div>
                </div>

                <div className="card">
                    <h5>Mask</h5>
                    <div className="speeddial-mask-demo" style={{ position: 'relative', height: '350px' }}>
                        <SpeedDial model={items} direction="up" mask />
                    </div>
                </div>
            </div>

            <SpeedDialDoc />
        </div>
    )
}

export default SpeedDialDemo;
