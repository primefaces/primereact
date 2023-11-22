import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Panel } from '@/components/lib/panel/Panel';
import { useRef } from 'react';

export function ToggleableDoc(props) {
    const ref = useRef(null);
    const code = {
        basic: `
<Panel header="Header" toggleable>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function ToggleableDemo() {
    const ref = useRef(null);
    return (
        <Button label="Toggle" className="m-2" onClick={() => ref.current.toggle()} />
        <Button label="Expand" className="m-2" onClick={() => ref.current.expand()} />
        <Button label="Collapse" className="m-2" onClick={() => ref.current.collapse()} />
        <Panel ref={ref} header="Header" toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function ToggleableDemo() {
    const ref = useRef<Panel>(null);
    return (
        <Button label="Toggle" className="m-2" onClick={() => ref.current?.toggle()} />
        <Button label="Expand" className="m-2" onClick={() => ref.current?.expand()} />
        <Button label="Collapse" className="m-2" onClick={() => ref.current?.collapse()} />
        <Panel ref={ref} header="Header" toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Content of the panel can be expanded and collapsed when <i>toggleable</i> option is enabled. A toggleable panel can either be used as a Controlled or Uncontrolled component. In controlled mode a binding to <i>collapsed</i>{' '}
                    property along with <i>onToggle</i> event are needed to manage the content state.
                </p>
            </DocSectionText>
            <div className="card">
                <Button label="Toggle" className="m-2" onClick={() => ref.current.toggle()} />
                <Button label="Expand" className="m-2" onClick={() => ref.current.expand()} />
                <Button label="Collapse" className="m-2" onClick={() => ref.current.collapse()} />

                <Panel ref={ref} header="Header" toggleable>
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
