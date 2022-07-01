import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const SplitButtonDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export class SplitButtonDemo extends Component {

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
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
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
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
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
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Primary" model={items} className="mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Raised Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Rounded Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-rounded mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-rounded p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-rounded p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-rounded p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-rounded p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-rounded p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-rounded p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-text p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-text p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-text p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-text p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-text p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-text p-button-danger mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-text p-button-plain mr-2 mb-2"></SplitButton>

                <h5>Raised Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-raised p-button-plain p-button-text mr-2 mb-2"></SplitButton>

                <h5>Outlined Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Sizes</h5>
                <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
                <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
                <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
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
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Primary" model={items} className="mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Raised Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Rounded Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-rounded mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-rounded p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-rounded p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-rounded p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-rounded p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-rounded p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-rounded p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-text p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-text p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-text p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-text p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-text p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-text p-button-danger mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-text p-button-plain mr-2 mb-2"></SplitButton>

                <h5>Raised Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-raised p-button-plain p-button-text mr-2 mb-2"></SplitButton>

                <h5>Outlined Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Sizes</h5>
                <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
                <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
                <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/splitbutton/splitbutton.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { SplitButton } = primereact.splitbutton;
const { Toast } = primereact.toast;

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
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
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Primary" model={items} className="mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Raised Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Rounded Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-rounded mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-rounded p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-rounded p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-rounded p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-rounded p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-rounded p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-rounded p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-text p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-text p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-text p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-text p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-text p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-text p-button-danger mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-text p-button-plain mr-2 mb-2"></SplitButton>

                <h5>Raised Text Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-raised p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-raised p-button-secondary p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-raised p-button-success p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-raised p-button-info p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-raised p-button-warning p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-raised p-button-help p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-raised p-button-danger p-button-text mr-2 mb-2"></SplitButton>
                <SplitButton label="Plain" model={items} className="p-button-raised p-button-plain p-button-text mr-2 mb-2"></SplitButton>

                <h5>Outlined Buttons</h5>
                <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>

                <h5>Sizes</h5>
                <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
                <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
                <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { SplitButton } from 'primereact/splitbutton';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/splitbutton/splitbutton.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
<CodeHighlight lang="js">
{`
export const SplitButtonDemo = () => {

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:(e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:(e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

        return (
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>
        )
    }
}

`}
</CodeHighlight>

                    <h5>MenuModel API</h5>
                    <p>SplitButton uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.</p>

                    <h5>Severity</h5>
                    <p>Different color options are available as severity levels.</p>

                    <ul>
                        <li>.p-button-secondary</li>
                        <li>.p-button-success</li>
                        <li>.p-button-info</li>
                        <li>.p-button-warning</li>
                        <li>.p-button-danger</li>
                    </ul>

<CodeHighlight>
{`
<SplitButton label="Primary" />
<SplitButton label="Secondary" className="p-button-secondary" model={items} />
<SplitButton label="Success" className="p-button-success" model={items} />
<SplitButton label="Info" className="p-button-info" model={items} />
<SplitButton label="Warning" className="p-button-warning" model={items} />
<SplitButton label="Danger" className="p-button-danger" model={items} />

`}
</CodeHighlight>

                    <h5>Raised and Rounded Buttons</h5>
                    <p>SplitButton can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
<CodeHighlight>
{`
<SplitButton label="Proceed" className="p-button-raised p-button-rounded" model={items} />
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the component.</td>
                                </tr>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Text of the button.</td>
                                </tr>
                                <tr>
                                    <td>icon</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the icon.</td>
                                </tr>
                                <tr>
                                    <td>model</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>MenuModel instance to define the overlay items.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>ClassName of the component.</td>
                                </tr>
                                <tr>
                                    <td>buttonClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>ClassName of the button.</td>
                                </tr>
                                <tr>
                                    <td>menuStyle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the overlay menu.</td>
                                </tr>
                                <tr>
                                    <td>menuClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>ClassName class of the overlay menu.</td>
                                </tr>
                                <tr>
                                    <td>menuButtonClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>ClassName of the menu dropdown button.</td>
                                </tr>
                                <tr>
                                    <td>buttonProps</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Props for the main button, any prop is passed implicity to the button element.</td>
                                </tr>
                                <tr>
                                    <td>menuButtonProps</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Props for the dropdown button, any prop is passed implicity to the dropdown button element.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>tooltip</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                </tr>
                                <tr>
                                    <td>buttonTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Template of the default button.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                                <tr>
                                    <td>dropdownIcon</td>
                                    <td>string</td>
                                    <td>pi pi-chevron-down</td>
                                    <td>Icon class of the dropdown icon.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onClick</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when main button is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes hidden.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-splitbutton</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-splitbutton-button</td>
                                    <td>Dropdown button.</td>
                                </tr>
                                <tr>
                                    <td>p-menu</td>
                                    <td>Overlay menu.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>SplitButton component renders two native button elements, main button uses the label property to define <i>aria-label</i> by default which can be customized with <i>buttonProps</i>.
                    Dropdown button requires an explicit definition to describe it using <i>menuButtonProps</i> option and also includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button.</p>

                    <p>The popup overlay uses <i>menu</i> role on the list and each action item has a <i>menuitem</i> role with an <i>aria-label</i> as the menuitem label. The id of the menu refers to the <i>aria-controls</i> of the dropdown button.</p>
<CodeHighlight>
{`
<SplitButton buttonProps={{'aria-label': 'Default Action'}} menuButtonProps={{'aria-label': 'More Options'}} />
`}
</CodeHighlight>
                    <h6>Main Button Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Activates the button.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Activates the button.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Menu Button Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Toggles the visibility of the menu.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Opens the menu and moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Opens the menu and moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Menu Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Actives the menuitem, closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the menu and sets focus on the menu button.</td>
                                </tr>
                                <tr>
                                    <td><i>down arrow</i></td>
                                    <td>Moves focus to the next item, if it is the last one then first item receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>up arrow</i></td>
                                    <td>Moves focus to the previous item, if it is the first one then last item receives the focus.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first item.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last item.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'SplitButtonDemo', sources: sources })
                }
            </TabView >
        </div>
    )
})

export default SplitButtonDoc;
