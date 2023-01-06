import { TabMenu } from '../../lib/tabmenu/TabMenu';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    const code = {
        basic: `
<TabMenu model={items} />
        `,
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function BasicDoc() {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <TabMenu model={items} />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function BasicDoc() {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <TabMenu model={items} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    TabMenu requires a collection of menuitems as its model and can either be used as a Controlled or Uncontrolled component. In uncontrolled mode, only <i>model</i> is required. Initial active item can be provided using the
                    activeIndex property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the active item, prefer to use the component as controlled.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TabMenu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
