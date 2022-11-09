import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/dropdown/importdoc';
import { ApiDoc } from '../../components/doc/dropdown/apidoc';
import { BasicDoc } from '../../components/doc/dropdown/basicdoc';
import { EditableDoc } from '../../components/doc/dropdown/editabledoc';
import { GroupedDoc } from '../../components/doc/dropdown/groupeddoc';
import { TemplatingDoc } from '../../components/doc/dropdown/templatingdoc';
import { VirtualScrollDoc } from '../../components/doc/dropdown/virtualscrolldoc';
import { ScrollLazyDoc } from '../../components/doc/dropdown/scrolllazydoc';

const DropdownDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'editable',
            label: 'Editable',
            component: EditableDoc
        },
        {
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDoc
        },
        {
            id: 'Templating',
            label: 'Advanced with Templating, Filtering and Clear Icon',
            component: TemplatingDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll (100000 Items)',
            component: VirtualScrollDoc
        },
        {
            id: 'scrolllazy',
            label: 'Virtual Scroll (100000 Items) and Lazy',
            component: ScrollLazyDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Select Component</title>
                <meta name="description" content="Dropdown also known as Select, is used to choose an item from a collection of options." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Dropdown</h1>
                    <p>Dropdown also known as Select, is used to choose an item from a collection of options.</p>
                </div>
                <DocActions github="dropdown/index.js" />
            </div>

            <div className="content-section doc dropdown-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DropdownDemo;
