import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import { useState } from 'react';

export function ControlledDoc(props) {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    const code = {
        basic: `
<Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" />
<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

export default function ControlledDemo() {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div className="card">
            <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" />
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function ControlledDemo() {
    const [activeIndex, setActiveIndex] = useState<number>(3);
    const items: MenuItem[] = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div className="card">
            <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" />
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    In controlled mode, a binding to <i>activeIndex</i> property along with <i>onTabChange</i> event are needed to manage the active item.
                </p>
            </DocSectionText>
            <div className="card">
                <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" />
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
