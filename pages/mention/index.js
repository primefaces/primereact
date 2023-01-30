import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/mention/accessibilitydoc';
import { AutoDoc } from '../../components/doc/mention/autodoc';
import { BasicDoc } from '../../components/doc/mention/basicdoc';
import { DisabledDoc } from '../../components/doc/mention/disableddoc';
import { FloatLabelDoc } from '../../components/doc/mention/floatlabeldoc';
import { ImportDoc } from '../../components/doc/mention/importdoc';
import { InvalidDoc } from '../../components/doc/mention/invaliddoc';
import { StyleDoc } from '../../components/doc/mention/styledoc';
import { TriggersDoc } from '../../components/doc/mention/triggersdoc';
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
            doc: [{ name: 'Mention', pathname: '/modules/mention.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Mention Component</title>
                <meta name="description" content="Mention component is used to refer someone or something." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Mention</h1>
                        <p>Mention component is used to refer someone or something.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MentionDemo;
