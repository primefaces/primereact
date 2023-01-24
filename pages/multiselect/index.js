import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/multiselect/accessibilitydoc';
import { ApiDoc } from '../../components/doc/multiselect/apidoc';
import { BasicDoc } from '../../components/doc/multiselect/basicdoc';
import { ChipsDoc } from '../../components/doc/multiselect/chipsdoc';
import { DisabledDoc } from '../../components/doc/multiselect/disableddoc';
import { EagerDoc } from '../../components/doc/multiselect/eagerdoc';
import { FilterDoc } from '../../components/doc/multiselect/filterdoc';
import { FloatLabelDoc } from '../../components/doc/multiselect/floatlabeldoc';
import { GroupedDoc } from '../../components/doc/multiselect/groupeddoc';
import { ImportDoc } from '../../components/doc/multiselect/importdoc';
import { InvalidDoc } from '../../components/doc/multiselect/invaliddoc';
import { LazyDoc } from '../../components/doc/multiselect/lazydoc';
import { StyleDoc } from '../../components/doc/multiselect/styledoc';
import { TemplateDoc } from '../../components/doc/multiselect/templatedoc';
import { FormikDoc } from '../../components/doc/multiselect/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/multiselect/validation/hookformdoc';

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
            id: 'chips',
            label: 'Chips',
            component: ChipsDoc
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
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'virtual',
            label: 'Virtual Scroll (100K Items)',
            // TO DO: Add a description
            description: '',
            children: [
                {
                    id: 'eager',
                    label: 'Eager',
                    component: EagerDoc
                },
                {
                    id: 'lazy',
                    label: 'Lazy',
                    component: LazyDoc
                }
            ]
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
