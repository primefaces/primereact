import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/toast/importdoc';
import { ApiDoc } from '../../components/doc/toast/apidoc';
import { AccessibilityDoc } from '../../components/doc/toast/accessibilitydoc';
import { StyleDoc } from '../../components/doc/toast/styledoc';
import { SeveritiesDoc } from '../../components/doc/toast/severitiesdoc';
import { PositionDoc } from '../../components/doc/toast/positiondoc';
import { TemplateDoc } from '../../components/doc/toast/templatedoc';
import { StickyDoc } from '../../components/doc/toast/stickydoc';
import { MultipleDoc } from '../../components/doc/toast/multipledoc';
import { BasicDoc } from '../../components/doc/toast/basicdoc';

const ToastDemo = () => {
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
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
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
                    id: 'showingmessages',
                    label: 'Showing Messages'
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
                    id: 'positionapi',
                    label: 'Position'
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
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'event',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Toast Component</title>
                <meta name="description" content="Toast is used to display messages in an overlay." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Toast</h1>
                    <p>Toast is used to display messages in an overlay.</p>
                </div>
                <DocActions github="toast/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToastDemo;
