import React, { Component } from 'react';
import { TabMenu } from '../../components/tabmenu/TabMenu';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TabMenuDoc } from './TabMenuDoc';
import AppDemoActions from '../../AppDemoActions';

export class TabMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 3
        }

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
                    <AppDemoActions github="tabmenu/TabMenuDemo.js"/>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Default</h5>
                        <TabMenu model={this.items} />
                    </div>

                    <div className="card">
                        <h5>Programmatic</h5>
                        <div className="p-pt-2 p-pb-4">
                            <Button onClick={() => this.setState({ activeIndex: 0 })} className="p-button-text" label="Activate 1st" />
                            <Button onClick={() => this.setState({ activeIndex: 1 })} className="p-button-text" label="Activate 2nd" />
                            <Button onClick={() => this.setState({ activeIndex: 2 })} className="p-button-text" label="Activate 3rd" />
                        </div>

                        <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    </div>
                </div>

                <TabMenuDoc />
            </div>
        );
    }
}
