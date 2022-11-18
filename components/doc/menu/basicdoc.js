import { Menu } from '../../lib/menu/Menu';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    let items = [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];
    const code = {
        basic: `
<Menu model={items} />        
`,
        javascript: `
import { Menu } from 'primereact/menu';

export default function BasicDoc() {
    let items = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'}
    ];

    return (
        <Menu model={items} />
    )
}
        `,
        typescript: `
import { Menu } from 'primereact/menu';

export default function BasicDoc() {
    let items = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'}
    ];

    return (
        <Menu model={items} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Menu requires a collection of menuitems as its model.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
