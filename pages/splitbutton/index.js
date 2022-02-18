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
                        <SplitButton label="Save" icon="pi pi-plus"  onClick={this.save} model={this.items}></SplitButton>

                        <h5>Severities</h5>
                        <SplitButton label="Primary" model={this.items} className="mr-2 mb-2"></SplitButton>
                        <SplitButton label="Secondary" model={this.items} className="p-button-secondary mr-2 mb-2"></SplitButton>
                        <SplitButton label="Success" model={this.items} className="p-button-success mr-2 mb-2"></SplitButton>
                        <SplitButton label="Info" model={this.items} className="p-button-info mr-2 mb-2"></SplitButton>
                        <SplitButton label="Warning" model={this.items} className="p-button-warning mr-2 mb-2"></SplitButton>
                        <SplitButton label="Help" model={this.items} className="p-button-help mr-2 mb-2"></SplitButton>
                        <SplitButton label="Danger" model={this.items} className="p-button-danger mr-2 mb-2"></SplitButton>

                        <h5>Raised Buttons</h5>
                        <SplitButton label="Primary" model={this.items} className="p-button-raised mr-2 mb-2"></SplitButton>
                        <SplitButton label="Secondary" model={this.items} className="p-button-raised p-button-secondary mr-2 mb-2"></SplitButton>
                        <SplitButton label="Success" model={this.items} className="p-button-raised p-button-success mr-2 mb-2"></SplitButton>
                        <SplitButton label="Info" model={this.items} className="p-button-raised p-button-info mr-2 mb-2"></SplitButton>
                        <SplitButton label="Warning" model={this.items} className="p-button-raised p-button-warning mr-2 mb-2"></SplitButton>
                        <SplitButton label="Help" model={this.items} className="p-button-raised p-button-help mr-2 mb-2"></SplitButton>
                        <SplitButton label="Danger" model={this.items} className="p-button-raised p-button-danger mr-2 mb-2"></SplitButton>

                        <h5>Rounded Buttons</h5>
                        <SplitButton label="Primary" model={this.items} className="p-button-rounded mr-2 mb-2"></SplitButton>
                        <SplitButton label="Secondary" model={this.items} className="p-button-rounded p-button-secondary mr-2 mb-2"></SplitButton>
                        <SplitButton label="Success" model={this.items} className="p-button-rounded p-button-success mr-2 mb-2"></SplitButton>
                        <SplitButton label="Info" model={this.items} className="p-button-rounded p-button-info mr-2 mb-2"></SplitButton>
                        <SplitButton label="Warning" model={this.items} className="p-button-rounded p-button-warning mr-2 mb-2"></SplitButton>
                        <SplitButton label="Help" model={this.items} className="p-button-rounded p-button-help mr-2 mb-2"></SplitButton>
                        <SplitButton label="Danger" model={this.items} className="p-button-rounded p-button-danger mr-2 mb-2"></SplitButton>

                        <h5>Text Buttons</h5>
                        <SplitButton label="Primary" model={this.items} className="p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Secondary" model={this.items} className="p-button-text p-button-secondary mr-2 mb-2"></SplitButton>
                        <SplitButton label="Success" model={this.items} className="p-button-text p-button-success mr-2 mb-2"></SplitButton>
                        <SplitButton label="Info" model={this.items} className="p-button-text p-button-info mr-2 mb-2"></SplitButton>
                        <SplitButton label="Warning" model={this.items} className="p-button-text p-button-warning mr-2 mb-2"></SplitButton>
                        <SplitButton label="Help" model={this.items} className="p-button-text p-button-help mr-2 mb-2"></SplitButton>
                        <SplitButton label="Danger" model={this.items} className="p-button-text p-button-danger mr-2 mb-2"></SplitButton>
                        <SplitButton label="Plain" model={this.items} className="p-button-text p-button-plain mr-2 mb-2"></SplitButton>

                        <h5>Raised Text Buttons</h5>
                        <SplitButton label="Primary" model={this.items} className="p-button-raised p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Secondary" model={this.items} className="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Success" model={this.items} className="p-button-raised p-button-success p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Info" model={this.items} className="p-button-raised p-button-info p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Warning" model={this.items} className="p-button-raised p-button-warning p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Help" model={this.items} className="p-button-raised p-button-help p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Danger" model={this.items} className="p-button-raised p-button-danger p-button-text mr-2 mb-2"></SplitButton>
                        <SplitButton label="Plain" model={this.items} className="p-button-raised p-button-plain p-button-text mr-2 mb-2"></SplitButton>

                        <h5>Outlined Buttons</h5>
                        <SplitButton label="Primary" model={this.items} className="p-button-outlined mr-2 mb-2"></SplitButton>
                        <SplitButton label="Secondary" model={this.items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
                        <SplitButton label="Success" model={this.items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
                        <SplitButton label="Info" model={this.items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
                        <SplitButton label="Warning" model={this.items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
                        <SplitButton label="Help" model={this.items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
                        <SplitButton label="Danger" model={this.items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>

                        <h5>Sizes</h5>
                        <SplitButton label="Small" model={this.items} className="p-button-sm mr-2 mb-2" />
                        <SplitButton label="Normal" model={this.items} className="mr-2 mb-2" />
                        <SplitButton label="Large" model={this.items} className="p-button-lg mr-2 mb-2" />
                    </div>
                </div>

                <SplitButtonDoc />
            </div>
        )
    }
}
