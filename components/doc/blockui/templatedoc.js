import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useState } from 'react';
import { BlockUI } from '../../../components/lib/blockui/BlockUI';
import { Panel } from '../../../components/lib/panel/Panel';

export function TemplateDoc(props) {
    const [blocked, setBlocked] = useState(true);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    const code = {
        basic: `
<BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
    <Panel header="Prime React News">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </Panel>
</BlockUI>
<div className="mt-3 flex flex-column align-items-center">
    <h3>Continue reading?</h3>
    <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
</div>
        `,
        javascript: `
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const [blocked, setBlocked] = useState(false);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    return (
       <div className="card">
            <BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                <Panel header="Prime React News">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
            <div className="mt-3 flex flex-column align-items-center">
                <h3>Continue reading?</h3>
                <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    return (
       <div className="card">
            <BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                <Panel header="Prime React News">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
            <div className="mt-3 flex flex-column align-items-center">
                <h3>Continue reading?</h3>
                <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content can be placed inside the modal layer using the <i>template</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                    <Panel header="Prime React News">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel>
                </BlockUI>
                <div className="mt-3 flex flex-column align-items-center">
                    <h3>Continue reading?</h3>
                    <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
