import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Inplace } from '../../../lib/inplace/Inplace';
import { InplaceDisplay } from '../../../lib/inplace/Inplace';
import { InplaceContent } from '../../../lib/inplace/Inplace';

export function PTDoc(props) {
    const code = {
        basic: `
<Inplace
    pt={{
        display: { className: 'bg-primary' }
    }}
>
    <InplaceDisplay>View Content</InplaceDisplay>
    <InplaceContent>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </InplaceContent>
</Inplace>
        `,
        javascript: `
import React from 'react'; 
import { Inplace } from 'primereact/inplace';

export default function PTDemo() {
    return (
        <div className="card">
            <Inplace
                pt={{
                    display: { className: 'bg-primary' }
                }}
            >
                <InplaceDisplay>View Content</InplaceDisplay>
                <InplaceContent>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </InplaceContent>
            </Inplace>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Inplace } from 'primereact/inplace';

export default function PTDemo() {
    return (
        <div className="card">
            <Inplace
                pt={{
                    display: { className: 'bg-primary' }
                }}
            >
                <InplaceDisplay>View Content</InplaceDisplay>
                <InplaceContent>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </InplaceContent>
            </Inplace>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Inplace
                    pt={{
                        display: { className: 'bg-primary' }
                    }}
                >
                    <InplaceDisplay>View Content</InplaceDisplay>
                    <InplaceContent>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </InplaceContent>
                </Inplace>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
