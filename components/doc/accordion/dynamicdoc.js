import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Accordion, AccordionTab } from '@/components/lib/accordion/Accordion';
import { useState } from 'react';

export function DynamicDoc(props) {
    const [tabs] = useState([
        {
            header: 'Dynamic I',
            children: (
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )
        },
        {
            header: 'Dynamic II',
            children: (
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )
        },
        {
            header: 'Dynamic III',
            disabled: true
        }
    ]);

    const createDynamicTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };

    const code = {
        basic: `
 <Accordion>{createDynamicTabs()}</Accordion>
        `,
        javascript: `
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DynamicDemo() {
    const [tabs] = useState([
        {
            header: 'Dynamic I',
            children: (
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )
        },
        {
            header: 'Dynamic II',
            children: (
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )
        },
        {
            header: 'Dynamic III',
            disabled: true
        }
    ]);

    const createDynamicTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };

    return (
        <div className="card">
             <Accordion>{createDynamicTabs()}</Accordion>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DynamicDemo() {
    const [tabs] = useState([
        {
            header: 'Dynamic I',
            children: (
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )
        },
        {
            header: 'Dynamic II',
            children: (
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )
        },
        {
            header: 'Dynamic III',
            disabled: true
        }
    ]);

    const createDynamicTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };
    
    return (
        <div className="card">
            <Accordion>{createDynamicTabs()}</Accordion>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Accordion tabs can be generated dynamically using code.</p>
            </DocSectionText>
            <div className="card">
                <Accordion>{createDynamicTabs()}</Accordion>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
