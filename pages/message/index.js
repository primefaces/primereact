import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/message/importdoc';
import { SeveritiesDoc } from '../../components/doc/message/severitiesdoc';
import { TemplateDoc } from '../../components/doc/message/templatedoc';
import { ValidationDoc } from '../../components/doc/message/validationdoc';
import { FormLayoutDoc } from '../../components/doc/message/formlayoutdoc';
import { ApiDoc } from '../../components/doc/message/apidoc';
import { AccessibilityDoc } from '../../components/doc/message/accessibilitydoc';
import { StyleDoc } from '../../components/doc/message/styledoc';
import { BasicDoc } from '../../components/doc/message/basicdoc';

const MessageDemo = () => {
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
            id: 'severities',
            label: 'Severities',
            component: SeveritiesDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
        },
        {
            id: 'formlayout',
            label: 'Form Layout',
            component: FormLayoutDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'styling',
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
            component: ApiDoc,
            children: [
                {
                    id: 'messageapi',
                    label: 'Message API'
                },
                {
                    id: 'severitiesapi',
                    label: 'Severities'
                },

                {
                    id: 'messagecomponent',
                    label: 'Message Component'
                },
                {
                    id: 'properties',
                    label: 'Properties'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Message Component</title>
                <meta name="description" content="Message is used to display inline message with various severities." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Message</h1>
                    <p>Message is used to display inline message with various severities.</p>
                </div>
                <DocActions github="message/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MessageDemo;
