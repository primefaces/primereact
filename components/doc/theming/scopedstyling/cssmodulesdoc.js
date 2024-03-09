import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Panel } from '@/components/lib/panel/Panel';
import panelDemoModule from './paneldemo.module.css';

export function CSSModulesDoc(props) {
    const code1 = {
        basic: `
/* paneldemo.module.css */
.mypanel > [class~="p-panel-header"] {
    background-color: #07c4e8;
    color: #ffffff;
}
        `
    };

    const code2 = {
        basic: `
import React from 'react';
import { Panel } from 'primereact/panel';
import panelDemoModule from './paneldemo.module.css';

export default function PanelDemo() {
    return (
        <Panel header="CSS Module" className={stylesModule.mypanel}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Panel>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    CSS modules allow importing a css file to your react component and refer the classes inside using a variable. Unfortunately CSS modules do not support cascaded classes to be applied to external components however attribute
                    selectors can be used as a common workaround until PrimeReact exposes component internals via new properties. NextJS has built-in support for CSS modules allowing css files with <i>.module.css</i> suffix to be interpreted as
                    modules.
                </p>
            </DocSectionText>
            <div className="card">
                <Panel header="CSS Module" className={panelDemoModule.mypanel}>
                    <p className="p-0 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
            </div>
            <DocSectionCode code={code1} hideToggleCode import hideStackBlitz />
            <DocSectionCode code={code2} hideToggleCode import hideStackBlitz />
        </>
    );
}
