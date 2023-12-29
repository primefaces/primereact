import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Fieldset } from '@/components/lib/fieldset/Fieldset';
import { Avatar } from '@/components/lib/avatar/Avatar';

export function TemplateDoc(props) {
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    const code = {
        basic: `
<Fieldset legend={legendTemplate}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
        `,
        javascript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    return (
        <div className="card">
            <Fieldset legend={legendTemplate}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    return (
        <div className="card">
            <Fieldset legend={legendTemplate}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Legend section can also be defined with custom content instead of primitive values.</p>
            </DocSectionText>
            <div className="card">
                <Fieldset legend={legendTemplate}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Fieldset>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
