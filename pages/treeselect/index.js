import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/treeselect/accessibilitydoc';
import { BasicDoc } from '../../components/doc/treeselect/basicdoc';
import { CheckboxDoc } from '../../components/doc/treeselect/checkboxdoc';
import { DisabledDoc } from '../../components/doc/treeselect/disableddoc';
import { FilterDoc } from '../../components/doc/treeselect/filterdoc';
import { FloatLabelDoc } from '../../components/doc/treeselect/floatlabeldoc';
import { FormikDoc } from '../../components/doc/treeselect/form/formikdoc';
import { HookFormDoc } from '../../components/doc/treeselect/form/hookformdoc';
import { ImportDoc } from '../../components/doc/treeselect/importdoc';
import { InvalidDoc } from '../../components/doc/treeselect/invaliddoc';
import { MultipleDoc } from '../../components/doc/treeselect/multipledoc';
import { ProgrammaticDoc } from '../../components/doc/treeselect/programmaticdoc';
import { StyleDoc } from '../../components/doc/treeselect/styledoc';

const TreeSelectDemo = () => {
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
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
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
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'TreeSelect', pathname: '/modules/treeselect.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React TreeSelect Component</title>
                <meta name="description" content="TreeSelect is a form component to choose from hierarchical data." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>TreeSelect</h1>
                        <p>TreeSelect is a form component to choose from hierarchical data.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeSelectDemo;
