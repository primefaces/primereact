import { Fieldset } from '../../lib/fieldset/Fieldset';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ToggleableDoc(props) {
    const code = {
        basic: `
<Fieldset legend="Header" toggleable>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Fieldset>
        `,
        javascript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function ToggleableDoc() {

    return (
        <div className="card">
            <Fieldset legend="Header" toggleable>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Fieldset>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function ToggleableDoc() {

    return (
        <div className="card">
            <Fieldset legend="Header" toggleable>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Fieldset>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Content of the fieldset can be expanded and collapsed using <i>toggleable</i> option. A toggleable fieldset can either be used as a Controlled or Uncontrolled component. In controlled mode, <i>collapsed</i> and <i>onToggle</i>{' '}
                    properties need to be defined to control the collapsed state.
                </p>
            </DocSectionText>
            <div className="card">
                <Fieldset legend="Header" toggleable>
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
