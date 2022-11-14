import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/multiselect/apidoc';
import { ImportDoc } from '../../components/doc/multiselect/importdoc';
import { BasicDoc } from '../../components/doc/multiselect/basicdoc';
import { ChipsDoc } from '../../components/doc/multiselect/chipsdoc';
import { InlineDoc } from '../../components/doc/multiselect/inlinedoc';
import { GroupedDoc } from '../../components/doc/multiselect/groupeddoc';
import { AdvancedDoc } from '../../components/doc/multiselect/advanceddoc';
import { VirtualDoc } from '../../components/doc/multiselect/virtualdoc';
import { VirtualLazyDoc } from '../../components/doc/multiselect/virtuallazydoc';

const MultiSelectDemo = () => {
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
            id: 'inline',
            label: 'Inline, flex, itemClassName',
            component: InlineDoc
        },
        {
            id: 'chips',
            label: 'Chips',
            component: ChipsDoc
        },
        {
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDoc
        },
        {
            id: 'advanced',
            label: 'Advanced with Templating and Filtering',
            component: AdvancedDoc
        },
        {
            id: 'virtual',
            label: 'Virtual Scroll (100000 Items)',
            component: VirtualDoc
        },
        {
            id: 'virtual',
            label: 'Virtual Scroll (100000 Items) and Lazy',
            component: VirtualLazyDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React MultiSelect Component</title>
                <meta name="description" content="MultiSelect is used to select multiple items from a collection." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>MultiSelect</h1>
                    <p>MultiSelect is used to select multiple items from a collection.</p>
                </div>

                <DocActions github="multiselect/index.js" />
            </div>
            <div className="content-section doc multiselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MultiSelectDemo;
