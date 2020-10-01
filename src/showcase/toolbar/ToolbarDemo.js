import React, { Component } from 'react';
import { Toolbar } from '../../components/toolbar/Toolbar';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { SplitButton } from '../../components/splitbutton/SplitButton';
import { ToolbarDoc } from './ToolbarDoc';

export class ToolbarDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
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
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];
    }

    render() {
        const leftContents = (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-mr-2" />
                <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                <i className="pi pi-bars p-toolbar-separator p-mr-2" />
                <SplitButton label="Save" icon="pi pi-check" model={this.items} className="p-button-warning"></SplitButton>
            </React.Fragment>
        );

        const rightContents = (
            <React.Fragment>
                <Button icon="pi pi-search" className="p-mr-2" />
                <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </React.Fragment>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="toolbar" showInputStyle>
                        <h1>Toolbar</h1>
                        <p>Toolbar is a grouping component for buttons and other content.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toolbar left={leftContents} right={rightContents} />
                </div>

                <ToolbarDoc/>
            </div>
        );
    }
}
