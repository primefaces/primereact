import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { TabMenu } from '../../lib/tabmenu/TabMenu';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ProgrammaticDoc(props) {
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
<div className="pt-2 pb-4">
    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
    <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
</div>
<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        `,
        javascript: `
import { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

export default function ProgrammaticDoc() {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="pt-2 pb-4">
                <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
            </div>

            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

export default function ProgrammaticDoc() {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="pt-2 pb-4">
                <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
            </div>

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
                    In controlled mode, <i>activeIndex</i> and <i>onTabChange</i> properties must be defined along with the model.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="pt-2 pb-4">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                    <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
                </div>

                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
