import React, { Component } from 'react';
import { Panel } from '../../components/panel/Panel';
import { AppInlineHeader } from '../../AppInlineHeader';
import { PanelDoc } from './PanelDoc';
import { Ripple } from '../../components/ripple/Ripple';
import AppDemoActions from '../../AppDemoActions';

export class PanelDemo extends Component {

    constructor(props) {
        super(props);

        this.renderHeaderTemplate = this.renderHeaderTemplate.bind(this);
    }

    renderHeaderTemplate(options) {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} p-jc-start`;
        const titleClassName = `${options.titleClassName} p-pl-1`;

        return (
            <div className={className}>
                <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
                <span className={titleClassName}>
                    Header
                </span>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="panel">
                        <h1>Panel</h1>
                        <p>Panel is a grouping component providing with content toggle feature.</p>
                    </AppInlineHeader> 
                    <AppDemoActions github="panel/PanelDemo.js" />
                </div>

                <div className="content-section implementation">
                    <h5>Regular</h5>
                    <Panel header="Header">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>

                    <h5>Toggleable</h5>
                    <Panel header="Header" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>

                    <h5>Template</h5>
                    <Panel headerTemplate={this.renderHeaderTemplate} toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </div>

                <PanelDoc></PanelDoc>
            </div>
        )
    }
}
