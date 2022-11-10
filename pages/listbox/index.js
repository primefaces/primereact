import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/listbox/apidoc';
import { AdvancedDoc } from '../../components/doc/listbox/advanceddoc';
import { GroupedDoc } from '../../components/doc/listbox/groupeddoc';
import { ImportDoc } from '../../components/doc/listbox/importdoc';
import { SingleDoc } from '../../components/doc/listbox/singledoc';
import { VirtualScrollDoc } from '../../components/doc/listbox/virtualscrolldoc';

const ListBoxDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'single',
            label: 'Single',
            component: SingleDoc
        },
        {
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDoc
        },
        {
            id: 'advanced',
            label: 'Advanced with Templating, Filtering and Multiple Selection',
            component: AdvancedDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll (100000 Items)',
            component: VirtualScrollDoc
        },
        {
            id: 'ApiDoc',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React ListBox Component</title>
                <meta name="description" content="ListBox is used to select one or more values from a list of items." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ListBox</h1>
                    <p>ListBox is used to select one or more values from a list of items.</p>
                </div>

                <DocActions github="listbox/index.js" />
            </div>

            <div className="content-section doc multiselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ListBoxDemo;
