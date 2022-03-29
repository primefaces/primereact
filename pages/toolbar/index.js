import React from 'react';
import { Toolbar } from '../../components/lib/toolbar/Toolbar';
import { Button } from '../../components/lib/button/Button';
import { SplitButton } from '../../components/lib/splitbutton/SplitButton';
import ToolbarDoc from '../../components/doc/toolbar';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import Link from 'next/link';

const ToolbarDemo = () => {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            template: (item, options) => {
                return (
                    <Link href="/fileupload">
                        <a className={options.className} target={item.target}>
                            <span className="p-menuitem-icon pi pi-upload"></span>
                            <span className="p-menuitem-text">{item.label}</span>
                        </a>
                    </Link>
                );
            }
        }
    ];


    const leftContents = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="mr-2" />
            <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
            <i className="pi pi-bars p-toolbar-separator mr-2" />
            <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );

    return (
        <div>
            <Head>
                <title>React Toolbar Component</title>
                <meta name="description" content="Toolbar is a grouping component for buttons and other content." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Toolbar</h1>
                    <p>Toolbar is a grouping component for buttons and other content.</p>
                </div>
                <DocActions github="toolbar/index.js" />
            </div>

            <div className="content-section implementation">
                <Toolbar left={leftContents} right={rightContents} />
            </div>

            <ToolbarDoc />
        </div>
    );
}

export default ToolbarDemo;
