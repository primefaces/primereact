import React from 'react';
import { Panel } from '../../components/lib/panel/Panel';
import PanelDoc from '../../components/doc/panel';
import { Ripple } from '../../components/lib/ripple/Ripple';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const PanelDemo = () => {

    const template = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} pl-1`;

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

    return (
        <div>
            <Head>
                <title>React Panel Component</title>
                <meta name="description" content="Panel is a grouping component providing with content toggle feature." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Panel</h1>
                    <p>Panel is a grouping component providing with content toggle feature.</p>
                </div>
                <DocActions github="panel/index.js" />
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
                <Panel headerTemplate={template} toggleable>
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

export default PanelDemo;
