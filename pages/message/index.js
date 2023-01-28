import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/message/accessibilitydoc';
import { BasicDoc } from '../../components/doc/message/basicdoc';
import { ImportDoc } from '../../components/doc/message/importdoc';
import { SeverityDoc } from '../../components/doc/message/severitydoc';
import { StyleDoc } from '../../components/doc/message/styledoc';
import { TemplateDoc } from '../../components/doc/message/templatedoc';
import { ValidationDoc } from '../../components/doc/message/validationdoc';

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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'form',
            label: 'Form',
            component: ValidationDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            doc: [{ name: 'Message', pathname: '/modules/message.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Message Component</title>
                <meta name="description" content="Message component displays information related to another element such as invalid input." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Message</h1>
                    <p>Message component displays information related to another element such as invalid input.</p>
                </div>
                <DocActions github="/message" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MessageDemo;
