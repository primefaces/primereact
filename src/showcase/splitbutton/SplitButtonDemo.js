import React, { Component } from 'react';
import { SplitButton } from '../../components/splitbutton/SplitButton';
import { Toast } from '../../components/toast/Toast';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SplitButtonDoc } from './SplitButtonDoc';

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="splitButton">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                    </AppInlineHeader>
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
