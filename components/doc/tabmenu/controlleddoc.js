import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import { useState } from 'react';

export function ControlledDoc(props) {
    const [activeIndex, setActiveIndex] = useState(1);
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
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
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
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
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
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
                <div className="flex flex-wrap justify-content-end gap-2 mb-3">
                    <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" />
                    <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" />
                    <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" />
                </div>
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
