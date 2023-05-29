import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { useState } from 'react';

const createClient = () => {
    const id = Math.floor(Math.random() * 1000000);

    return { id, name: `Client ${id}` };
};

export function DynamicDoc(props) {
    const code = {
        basic: `
<TabView
    closeMode="manual"
    onTabClose={(e) => setDynamicTabs([...dynamicTabs.slice(0, e.index), ...dynamicTabs.slice(e.index + 1)])}
>
    {dynamicTabs.map((tab) => (
        <TabPanel key={tab.id} header={tab.name} closable>
            <p>Name: {tab.name}</p>
        </TabPanel>
    ))}
</TabView>
        `,
        javascript: `
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';

const createClient = () => {
    const id = Math.floor(Math.random() * 1000000);
    return { id, name: \`Client \${id}\` };
};

export default function DynamicDemo() {
    const [dynamicTabs, setDynamicTabs] = useState([createClient(), createClient(), createClient()]);

    return (
        <div className="card">
            <div className="flex flex-wrap gap-2 mb-3">
                <Button onClick={() => setDynamicTabs([...dynamicTabs, createClient()])} className="p-button-text" label="Add" />
            </div>
            <TabView closeMode="manual" onTabClose={(e) => setDynamicTabs([...dynamicTabs.slice(0, e.index), ...dynamicTabs.slice(e.index + 1)])}>
                {dynamicTabs.map((tab) => (
                    <TabPanel key={tab.id} header={tab.name} closable>
                        <p>Name: {tab.name}</p>
                    </TabPanel>
                ))}
            </TabView>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';

const createClient = () => {
    const id = Math.floor(Math.random() * 1000000);
    return { id, name: \`Client \${id}\` };
};

export default function DynamicDemo() {
    const [dynamicTabs, setDynamicTabs] = useState([createClient(), createClient(), createClient()]);

    return (
        <div className="card">
            <div className="flex flex-wrap gap-2 mb-3">
                <Button onClick={() => setDynamicTabs([...dynamicTabs, createClient()])} className="p-button-text" label="Add" />
            </div>
            <TabView closeMode="manual" onTabClose={(e) => setDynamicTabs([...dynamicTabs.slice(0, e.index), ...dynamicTabs.slice(e.index + 1)])}>
                {dynamicTabs.map((tab) => (
                    <TabPanel key={tab.id} header={tab.name} closable>
                        <p>Name: {tab.name}</p>
                    </TabPanel>
                ))}
            </TabView>
        </div>
    )
}
        `
    };

    const [dynamicTabs, setDynamicTabs] = useState([createClient(), createClient(), createClient()]);

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    It is possible to have dynamic tabs by generating the children <i>TabPanel</i> components using standard React techniques. If the tabs are closable, set <i>closeMode</i> to "manual" and manage the children in the <i>onTabClose</i> event.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap gap-2 mb-3">
                    <Button onClick={() => setDynamicTabs([...dynamicTabs, createClient()])} className="p-button-text" label="Add" />
                </div>
                <TabView closeMode="manual" onTabClose={(e) => setDynamicTabs([...dynamicTabs.slice(0, e.index), ...dynamicTabs.slice(e.index + 1)])}>
                    {dynamicTabs.map((tab) => (
                        <TabPanel key={tab.id} header={tab.name} closable>
                            <p>Name: {tab.name}</p>
                        </TabPanel>
                    ))}
                </TabView>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
