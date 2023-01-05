import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/treeselect/apidoc';
import { BasicDoc } from '../../components/doc/treeselect/basicdoc';
import { CheckboxDoc } from '../../components/doc/treeselect/checkboxdoc';
import { FilterDoc } from '../../components/doc/treeselect/filterdoc';
import { DefaultDoc } from '../../components/doc/treeselect/defaultdoc';
import { MultipleDoc } from '../../components/doc/treeselect/multipledoc';
import { ProgrammaticDoc } from '../../components/doc/treeselect/programmaticdoc';
import { HookFormDoc } from '../../components/doc/treeselect/validation/hookformdoc';
import { FormikDoc } from '../../components/doc/treeselect/validation/formikdoc';
import { FloatLabelDoc } from '../../components/doc/treeselect/floatlabeldoc';
import { InvalidDoc } from '../../components/doc/treeselect/invaliddoc';
import { DisabledDoc } from '../../components/doc/treeselect/disableddoc';

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
            label: 'Checkbox',
            component: CheckboxDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'default',
            label: 'Default Value',
            component: DefaultDoc
        },
        {
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
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
