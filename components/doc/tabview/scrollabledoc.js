import { useState } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ScrollableDoc(props) {
    const tabs = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));
    const code = {
        basic: `
<TabView scrollable>
    {tabs.map((tab) => {
        return (
            <TabPanel key={tab.title} header={tab.title}>
                <p className="m-0">{tab.content}</p>
            </TabPanel>
        );
    })}
</TabView>
        `,
        javascript: `
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

export default function ScrollableDemo() {
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))

    return (
        <div className="card">
            <TabView scrollable>
                {tabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

export default function ScrollableDemo() {
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))
    
    return (
        <div className="card">
            <TabView scrollable>
                {tabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Adding <i>scrollable</i> property displays navigational buttons at each side to scroll between tabs.
                </p>
            </DocSectionText>
            <div className="card">
                <TabView scrollable>
                    {tabs.map((tab) => {
                        return (
                            <TabPanel key={tab.title} header={tab.title}>
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
