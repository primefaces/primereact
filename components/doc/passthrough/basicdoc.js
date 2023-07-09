import { Panel } from '../../lib/panel/Panel';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const code = {
        basic: `
<Panel
    header="Header"
    toggleable
    pt={{
        header: { className: 'bg-primary' },
        title: { className: 'text-white' },
        toggler: { className: 'text-white hover:bg-primary-reverse' }
    }}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
        `,
        javascript: `
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <div className="card">
            <Panel
                header="Header"
                toggleable
                pt={{
                    header: { className: 'bg-primary' },
                    title: { className: 'text-white' },
                    toggler: { className: 'text-white hover:bg-primary-reverse' }
                }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <div className="card">
            <Panel
                header="Header"
                toggleable
                pt={{
                    header: { className: 'bg-primary' },
                    title: { className: 'text-white' },
                    toggler: { className: 'text-white hover:bg-primary-reverse' }
                }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Each component has a special <i>pt</i> property to define an object with keys corresponding to the available DOM elements. Each value is also an object to define the arbitrary properties to apply to the element such as styling,
                    aria, data-* or custom attributes. Every component documentation has a dedicated section to document the available section names exposed via PT.
                </p>
                <p>Example below styles a Panel component with PrimeFlex CSS library.</p>
            </DocSectionText>
            <div className="card">
                <Panel
                    header="Header"
                    toggleable
                    pt={{
                        header: { className: 'bg-primary' },
                        title: { className: 'text-white' },
                        toggler: { className: 'text-white hover:bg-primary-reverse' }
                    }}
                >
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
