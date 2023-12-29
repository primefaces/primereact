import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Accordion, AccordionTab } from '@/components/lib/accordion/Accordion';
import { useState } from 'react';

export function DynamicDoc(props) {
    const [tabs] = useState([
        {
            header: 'Title I',
            children: <p className="m-0">Content 1</p>
        },
        {
            header: 'Title II',
            children: <p className="m-0">Content 2 </p>
        },
        {
            header: 'Title III',
            children: <p className="m-0">Content 3 </p>
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
            header: 'Title I',
            children: <p className="m-0">Content 1</p>
        },
        {
            header: 'Title II',
            children: <p className="m-0">Content 2 </p>
        },
        {
            header: 'Title III',
            children: <p className="m-0">Content 3 </p>
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
            header: 'Title I',
            children: <p className="m-0">Content 1</p>
        },
        {
            header: 'Title II',
            children: <p className="m-0">Content 2 </p>
        },
        {
            header: 'Title III',
            children: <p className="m-0">Content 3 </p>
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
                <Accordion activeIndex={0}>{createDynamicTabs()}</Accordion>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
