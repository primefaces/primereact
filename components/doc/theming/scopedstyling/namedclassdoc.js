import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Panel } from '@/components/lib/panel/Panel';

export function NamedClassDoc(props) {
    const code1 = {
        basic: `
/* .custompanel.css */
.mypanel .p-panel-header {
    background-color: #07c4e8;
    color: #ffffff;
}
        `
    };

    const code2 = {
        basic: `
import React from 'react';
import { Panel } from 'primereact/panel';
import './custompanel.css';

export default function PanelDemo() {
    return (
        <Panel header="Named ClassName" className="mypanel">
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
                    A named class is bound to the <i>className</i> property of a component and the CSS is included with an import. Note that, the css still is still bundled globally so prefer this approach if your application doesn't have a built-in
                    solution to do CSS scoping.
                </p>
            </DocSectionText>
            <div className="card">
                <Panel header="Named ClassName" className="mypanel">
                    <p className="m-0">
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
