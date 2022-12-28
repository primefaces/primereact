import { useState } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ScrollableDoc(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));
    const code = {
        basic: `
<div className="card ">
    <div className="py-2">
        <Button onClick={() => setActiveIndex(0)} className="p-button-text mr-1" label="Activate 1st" />
        <Button onClick={() => setActiveIndex(29)} className="p-button-text mr-1" label="Activate 30th" />
        <Button onClick={() => setActiveIndex(49)} className="p-button-text" label="Activate 50th" />
    </div>
    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} scrollable>
        {scrollableTabs.map((tab) => {
            return (
                <TabPanel key={tab.title} header={tab.title}>
                    <p>{tab.content}</p>
                </TabPanel>
            );
        })}
    </TabView>
</div>
        `,
        javascript: `
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import './TabViewDemo.css';

export default function ScrollableDoc() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))

    return (
        <div className="card ">
            <div className="py-2">
                <Button onClick={() => setActiveIndex(0)} className="p-button-text mr-1" label="Activate 1st" />
                <Button onClick={() => setActiveIndex(29)} className="p-button-text mr-1" label="Activate 30th" />
                <Button onClick={() => setActiveIndex(49)} className="p-button-text" label="Activate 50th" />
            </div>

            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} scrollable>
                {scrollableTabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <p>{tab.content}</p>
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
import { Button } from 'primereact/button';
import './TabViewDemo.css';

export default function ScrollableDoc() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))
    
    return (
        <div className="card ">
            <div className="py-2">
                <Button onClick={() => setActiveIndex(0)} className="p-button-text mr-1" label="Activate 1st" />
                <Button onClick={() => setActiveIndex(29)} className="p-button-text mr-1" label="Activate 30th" />
                <Button onClick={() => setActiveIndex(49)} className="p-button-text" label="Activate 50th" />
            </div>          
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} scrollable>
                {scrollableTabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <p>{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>
    )
}
        `,
        extFiles: {
            'TabViewDemo.css': `
/* TabViewDemo.css */

.tabview-demo .p-tabview p {
    line-height: 1.5;
    margin: 0;
}
`
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>In controlled mode, activeIndex and onTabChange properties need to be defined to control the state.</p>
            </DocSectionText>
            <div className="card ">
                <div className="py-2">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text mr-1" label="Activate 1st" />
                    <Button onClick={() => setActiveIndex(29)} className="p-button-text mr-1" label="Activate 30th" />
                    <Button onClick={() => setActiveIndex(49)} className="p-button-text" label="Activate 50th" />
                </div>

                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} scrollable>
                    {scrollableTabs.map((tab) => {
                        return (
                            <TabPanel key={tab.title} header={tab.title}>
                                <p>{tab.content}</p>
                            </TabPanel>
                        );
                    })}
                </TabView>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
