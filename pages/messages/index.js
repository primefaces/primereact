import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/messages/importdoc';
import { SeveritiesDoc } from '../../components/doc/messages/severitiesdoc';
import { DynamicDoc } from '../../components/doc/messages/dynamicdoc';
import { TemplateDoc } from '../../components/doc/messages/templatedoc';
import { ApiDoc } from '../../components/doc/messages/apidoc';
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
            id: 'severities',
            label: 'Severities',
            component: SeveritiesDoc
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
                    id: 'showingmessages',
                    label: 'Showing Messages'
                },
                {
                    id: 'clearingmessages',
                    label: 'Clearing Messages'
                },
                {
                    id: 'replacingmessages',
                    label: 'Replacing Messages'
                },
                {
                    id: 'closable',
                    label: 'Closable'
                },
                {
                    id: 'sticky',
                    label: 'Sticky'
                },
                {
                    id: 'propertiesmessages',
                    label: 'Properties of Messages'
                },
                {
                    id: 'event',
                    label: 'Events of Messages'
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
                <title>React Messages Component</title>
                <meta name="description" content="Messages is used to display inline messages with various severities." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Messages</h1>
                    <p>Messages is used to display inline messages with various severities.</p>
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
