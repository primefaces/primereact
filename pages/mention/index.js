import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/mention/apidoc';
import { AccessibilityDoc } from '../../components/doc/mention/accessibilitydoc';
import { StylingDoc } from '../../components/doc/mention/stylingdoc';
import { ImportDoc } from '../../components/doc/mention/importdoc';
import { BasicDoc } from '../../components/doc/mention/basicdoc';
import { TriggersDoc } from '../../components/doc/mention/triggersdoc';
import { AutoDoc } from '../../components/doc/mention/autodoc';
import { FloatLabelDoc } from '../../components/doc/mention/floatlabeldoc';
import { DisabledDoc } from '../../components/doc/mention/disableddoc';
import { InvalidDoc } from '../../components/doc/mention/invaliddoc';
import { FormikDoc } from '../../components/doc/mention/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/mention/validation/hookformdoc';

const MentionDemo = () => {
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
            id: 'auto',
            label: 'Auto Resize',
            component: AutoDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'triggers',
            label: 'Triggers',
            component: TriggersDoc
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
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
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
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Mention Component</title>
                <meta name="description" content="Mention component is used to refer someone or something." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Mention</h1>
                    <p>Mention component is used to refer someone or something.</p>
                </div>

                <DocActions github="mention/index.js" />
            </div>

            <div className="content-section doc multiselect-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MentionDemo;
