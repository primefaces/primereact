import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/messages/importdoc';
import { SeverityDoc } from '../../components/doc/messages/severitydoc';
import { DynamicDoc } from '../../components/doc/messages/dynamicdoc';
import { TemplateDoc } from '../../components/doc/messages/templatedoc';
import { ApiDoc } from '../../components/doc/messages/apidoc';
import { AccessibilityDoc } from '../../components/doc/messages/accessibilitydoc';
import { StyleDoc } from '../../components/doc/messages/styledoc';
import { BasicDoc } from '../../components/doc/messages/basicdoc';
import { ClosableDoc } from '../../components/doc/messages/closeabledoc';
import { StickyDoc } from '../../components/doc/messages/stickydoc';

const MessagesDemo = () => {
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'closabledoc',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'stickydoc',
            label: 'Sticky',
            component: StickyDoc
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
                <title>React Messages Component</title>
                <meta name="description" content="Messages component is used to display inline messages" />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Messages</h1>
                    <p>Messages component is used to display inline messages.</p>
                </div>
                <DocActions github="messages/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MessagesDemo;
