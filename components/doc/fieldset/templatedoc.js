import { Fieldset } from '../../lib/fieldset/Fieldset';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const legendTemplate = (
        <div className="text-primary" style={{ fontSize: '1.5rem' }}>
            Custom Legend
        </div>
    );

    const code = {
        basic: `
<Fieldset legend={legendTemplate}>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</Fieldset>
        `,
        javascript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function TemplateDoc() {
    const legendTemplate = <div className='text-primary' style={{ fontSize: '1.5rem' }}>Custom Legend</div>;

    return (
        <div className="card flex justify-content-center">
            <Fieldset legend={legendTemplate}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </Fieldset>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function TemplateDoc() {
    const legendTemplate = <div className='text-primary' style={{ fontSize: '1.5rem' }}>Custom Legend</div>;

    return (
        <div className="card flex justify-content-center">
            <Fieldset legend={legendTemplate}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </Fieldset>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Fieldset legend={legendTemplate}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
