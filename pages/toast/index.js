import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/toast/importdoc';
import { SeveritiesDoc } from '../../components/doc/toast/severitiesdoc';
import { PositionDoc } from '../../components/doc/toast/positiondoc';
import { OptionsDoc } from '../../components/doc/toast/optionsdoc';
import { ClearDoc } from '../../components/doc/toast/cleardoc';
import { CustomDoc } from '../../components/doc/toast/customdoc';
import { ApiDoc } from '../../components/doc/toast/apidoc';

const ToastDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
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
            id: 'options',
            label: 'Options',
            component: OptionsDoc
        },
        {
            id: 'clear',
            label: 'Clear',
            component: ClearDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
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
