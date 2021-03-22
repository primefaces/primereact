import React, { Component } from 'react';
import { TabMenu } from '../../components/tabmenu/TabMenu';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TabMenuDoc } from './TabMenuDoc';

export class TabMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tabMenu">
                        <h1>TabMenu</h1>
                        <p>Menu is a navigation/command component that displays items as tab headers.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <TabMenu model={this.items} />
                    </div>
                </div>

                <TabMenuDoc />
            </div>
        );
    }
}
