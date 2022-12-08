import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/dropdown/apidoc';
import { BasicDoc } from '../../components/doc/dropdown/basicdoc';
import { EditableDoc } from '../../components/doc/dropdown/editabledoc';
import { GroupedDoc } from '../../components/doc/dropdown/groupeddoc';
import { ImportDoc } from '../../components/doc/dropdown/importdoc';
import { ScrollLazyDoc } from '../../components/doc/dropdown/scrolllazydoc';
import { TemplatingDoc } from '../../components/doc/dropdown/templatingdoc';
import { ValidationDoc } from '../../components/doc/dropdown/validationdoc';
import { VirtualScrollDoc } from '../../components/doc/dropdown/virtualscrolldoc';

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
        },
        {
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
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
