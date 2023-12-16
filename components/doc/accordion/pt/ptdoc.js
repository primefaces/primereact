import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Accordion, AccordionTab } from '@/components/lib/accordion/Accordion';

export function PTDoc(props) {
    const tabs = [
        { title: 'Header 1', content: 'Tab 1 Content' },
        { title: 'Header 2', content: 'Tab 2 Content' },
        { title: 'Header 3', content: 'Tab 3 Content' }
    ];

    const panelClassName = (parent, index) => {
        if (parent.state.activeIndex === index) return 'bg-primary';
    };

    const code = {
        basic: `
<Accordion activeIndex={0}>
    {tabs.map((tab, i) => {
        return (
            <AccordionTab
                key={i}
                pt={{
                    headerAction: ({ parent }) => ({
                        className: panelClassName(parent, i)
                    })
                }}
                header={tab.title}>
                <p className="m-0">
                    {tab.content}
                </p>
            </AccordionTab>
        )
    })}
</Accordion>
        `,
        javascript: `
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function PTDemo() {
    const tabs = [
        { title: 'Header 1', content: 'Tab 1 Content' },
        { title: 'Header 2', content: 'Tab 2 Content' },
        { title: 'Header 3', content: 'Tab 3 Content' }
    ];

    const panelClassName = (parent, index) => {
        if (parent.state.activeIndex === index) return 'bg-primary';
    };

    return (
        <div className="card">
            <Accordion activeIndex={0}>
                {tabs.map((tab, i) => {
                    return (
                        <AccordionTab
                            key={i}
                            pt={{
                                headerAction: ({ parent }) => ({
                                    className: panelClassName(parent, i)
                                })
                            }}
                            header={tab.title}>
                            <p className="m-0">
                                {tab.content}
                            </p>
                        </AccordionTab>
                    )
                })}
            </Accordion>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function PTDemo() {
    const tabs = [
        { title: 'Header 1', content: 'Tab 1 Content' },
        { title: 'Header 2', content: 'Tab 2 Content' },
        { title: 'Header 3', content: 'Tab 3 Content' }
    ];

    const panelClassName = (parent, index) => {
        if (parent.state.activeIndex === index) return 'bg-primary';
    };
    
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                {tabs.map((tab, i) => {
                    return (
                        <AccordionTab
                            key={i}
                            pt={{
                                headerAction: ({ parent }) => ({
                                    className: panelClassName(parent, i)
                                })
                            }}
                            header={tab.title}>
                            <p className="m-0">
                                {tab.content}
                            </p>
                        </AccordionTab>
                    )
                })}
            </Accordion>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Accordion activeIndex={0}>
                    {tabs.map((tab, i) => {
                        return (
                            <AccordionTab
                                key={i}
                                pt={{
                                    headerAction: ({ parent }) => ({
                                        className: panelClassName(parent, i)
                                    })
                                }}
                                header={tab.title}
                            >
                                <p className="m-0">{tab.content}</p>
                            </AccordionTab>
                        );
                    })}
                </Accordion>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
