import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TabPanel, TabView } from '@/components/lib/tabview/TabView';

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
<TabView>
    {tabs.map((tab, i) => {
        return (
            <TabPanel
                pt={{
                    headerAction: ({ parent }) => ({
                        className: panelClassName(parent, i)
                    })
                }}
                key={i} header={tab.title}>
                <p className="m-0">{tab.content}</p>
            </TabPanel>
        )
    })}
</TabView>
        `,
        javascript: `
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function PTDemo() {
    const tabs = [
        { title: 'Header 1', content: 'Tab 1 Content' },
        { title: 'Header 2', content: 'Tab 2 Content' },
        { title: 'Header 3', content: 'Tab 3 Content' }
    ];

    const panelClassName = (parent, index) => {
        if (parent.state.activeIndex === index)
            return 'bg-primary'
    }

    return (
        <div className="card">
            <TabView>
                {tabs.map((tab, i) => {
                    return (
                        <TabPanel
                            pt={{
                                headerAction: ({ parent }) => ({
                                    className: panelClassName(parent, i)
                                })
                            }}
                            key={i} header={tab.title}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    )
                })}
            </TabView>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function PTDemo() {
    const tabs = [
        { title: 'Header 1', content: 'Tab 1 Content' },
        { title: 'Header 2', content: 'Tab 2 Content' },
        { title: 'Header 3', content: 'Tab 3 Content' }
    ];

    const panelClassName = (parent, index) => {
        if (parent.state.activeIndex === index)
            return 'bg-primary'
    }

    return (
        <div className="card">
            <TabView>
                {tabs.map((tab, i) => {
                    return (
                        <TabPanel
                            pt={{
                                headerAction: ({ parent }) => ({
                                    className: panelClassName(parent, i)
                                })
                            }}
                            key={i} header={tab.title}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    )
                })}
            </TabView>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <TabView>
                    {tabs.map((tab, i) => {
                        return (
                            <TabPanel
                                pt={{
                                    headerAction: ({ parent }) => ({
                                        className: panelClassName(parent, i)
                                    })
                                }}
                                key={i}
                                header={tab.title}
                            >
                                <p className="m-0">{tab.content}</p>
                            </TabPanel>
                        );
                    })}
                </TabView>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
