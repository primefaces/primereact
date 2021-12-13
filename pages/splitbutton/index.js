import React, { Component } from 'react';
import { SplitButton } from '../../components/lib/splitbutton/SplitButton';
import { Toast } from '../../components/lib/toast/Toast';
import { SplitButtonDoc } from '../../components/doc/splitbutton';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import Link from 'next/link';

export default class SplitButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.toast.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            },
            {   label: 'Upload',
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

        this.save = this.save.bind(this);
    }

    save() {
        this.toast.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <div>
                <Head>
                <title>React SplitButton Component</title>
                <meta name="description" content="SplitButton groups a set of commands in an overlay with a default command." />
            </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                    </div>

                    <DocActions github="splitbutton/index.js" />
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el}></Toast>

                    <div className="card">
                        <h5>Basic</h5>
                        <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items}></SplitButton>

                        <h5>Severities</h5>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-mr-2"></SplitButton>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-secondary p-mr-2"></SplitButton>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-success p-mr-2"></SplitButton>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-info p-mr-2"></SplitButton>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-warning p-mr-2"></SplitButton>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-help p-mr-2"></SplitButton>
                        <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-danger p-mr-2"></SplitButton>
                    </div>
                </div>

                <SplitButtonDoc />
            </div>
        )
    }
}
