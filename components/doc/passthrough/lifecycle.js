import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function LifeCyleDoc(props) {
    const code = {
        basic: `
<Panel header="Header" pt={panelPT}>
    Content
</Panel>
        `,
        javascript: `
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function LifeCyleDemo() {
    const panelPt = {
        hooks: {
            useMountEffect: () => {
                //panel mounted
            },
            useUnmountEffect: () => {
                //panel unmounted
            }
    };

    return (
        <div className="card">
            <Panel header="Header" pt={panelPT}>
                Content
            </Panel>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function LifeCyleDemo() {
    const panelPt = {
        hooks: {
            useMountEffect: () => {
                //panel mounted
            },
            useUnmountEffect: () => {
                //panel unmounted
            }
    };
    
    return (
        <div className="card">
            <Panel header="Header" pt={panelPT}>
                Content
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
                    Lifecycle hooks of components are exposed as pass through using the <i>hooks</i> property so that callback functions can be registered. Available callbacks are <i>useMountEffect</i>, <i>useUpdateEffect</i>, <i>useUnmountEffect</i>
                    . Refer to the React.js documentation for detailed information about lifecycle hooks.
                </p>
            </DocSectionText>

            <DocSectionCode code={code} />
        </>
    );
}
