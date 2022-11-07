import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { BasicDoc } from '../../components/doc/treeselect/basicdoc';
import { MultipleDoc } from '../../components/doc/treeselect/multipledoc';
import { CheckDoc } from '../../components/doc/treeselect/checkdoc';
import { FilterDoc } from '../../components/doc/treeselect/filterdoc';
import { InitialDoc } from '../../components/doc/treeselect/initialdoc';
import { ProgrammaticDoc } from '../../components/doc/treeselect/programmaticdoc';
import { ApiDoc } from '../../components/doc/treeselect/apidoc';

const TreeSelectDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'check',
            label: 'Check',
            component: CheckDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'initial',
            label: 'Initial Value',
            component: InitialDoc
        },
        {
            id: 'programmatic',
            label: 'Programmatic Control',
            component: ProgrammaticDoc
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
                <title>React TreeSelect Component</title>
                <meta name="description" content="TreeSelect is a form component to choose from hierarchical data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeSelect</h1>
                    <p>TreeSelect is a form component to choose from hierarchical data.</p>
                </div>

                <DocActions github="treeselect/index.js" />
            </div>
            <div className="content-section doc treeselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeSelectDemo;
