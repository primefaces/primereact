import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/panel/importdoc';
import { BasicDoc } from '../../components/doc/panel/basicdoc';
import { ToggleableDoc } from '../../components/doc/panel/toggleabledoc';
import { TemplateDoc } from '../../components/doc/panel/templatedoc';
import { ApiDoc } from '../../components/doc/panel/apidoc';
import { AccessibilityDoc } from '../../components/doc/panel/accessibilitydoc';
import { StyleDoc } from '../../components/doc/panel/styledoc';

const PanelDemo = () => {
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
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
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
                <title>React Panel Component</title>
                <meta name="description" content="Panel is a grouping component providing with content toggle feature." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Panel</h1>
                    <p>Panel is a grouping component providing with content toggle feature.</p>
                </div>
                <DocActions github="panel/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PanelDemo;
