import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRenderer = (item, itemIndex) => (
        <a className="p-menuitem-link flex align-items-center gap-2" onClick={() => setActiveIndex(itemIndex)}>
            <img alt={item.name} src={`https://primefaces.org/cdn/primevue/images/avatar/${item.image}`} style={{ width: '32px' }} />
            <span className="font-bold">{item.name}</span>
        </a>
    );

    const items = [
        {
            name: 'Amy Elsner',
            image: 'amyelsner.png',
            template: (item) => itemRenderer(item, 0)
        },
        {
            name: 'Anna Fali',
            image: 'annafali.png',
            template: (item) => itemRenderer(item, 1)
        },
        {
            name: 'Asiya Javayant',
            image: 'asiyajavayant.png',
            template: (item) => itemRenderer(item, 2)
        }
    ];

    const code = {
        basic: `
<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        `,
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function TemplateDemo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRenderer = (item, itemIndex) => (
        <a className="p-menuitem-link flex align-items-center gap-2" onClick={() => setActiveIndex(itemIndex)}>
            <img alt={item.name} src={\`https://primefaces.org/cdn/primevue/images/avatar/\${item.image}\`} style={{ width: '32px' }} />
            <span className="font-bold">{item.name}</span>
        </a>
    );

    const items = [
        {
            name: 'Amy Elsner',
            image: 'amyelsner.png',
            template: (item) => itemRenderer(item, 0)
        },
        {
            name: 'Anna Fali',
            image: 'annafali.png',
            template: (item) => itemRenderer(item, 1)
        },
        {
            name: 'Asiya Javayant',
            image: 'asiyajavayant.png',
            template: (item) => itemRenderer(item, 2)
        }
    ];


    return (
        <div className="card">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function TemplateDemo() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemRenderer = (item, itemIndex) => (
        <a className="p-menuitem-link flex align-items-center gap-2" onClick={() => setActiveIndex(itemIndex)}>
            <img alt={item.name} src={\`https://primefaces.org/cdn/primevue/images/avatar/\${item.image}\`} style={{ width: '32px' }} />
            <span className="font-bold">{item.name}</span>
        </a>
    );

    const items = [
        {
            name: 'Amy Elsner',
            image: 'amyelsner.png',
            template: (item) => itemRenderer(item, 0)
        },
        {
            name: 'Anna Fali',
            image: 'annafali.png',
            template: (item) => itemRenderer(item, 1)
        },
        {
            name: 'Asiya Javayant',
            image: 'asiyajavayant.png',
            template: (item) => itemRenderer(item, 2)
        }
    ];

    return (
        <div className="card">
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
                    TabMenu offers item customization with the items <i>template</i> property that receives the item instance and returns an element.
                </p>
            </DocSectionText>
            <div className="card">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
