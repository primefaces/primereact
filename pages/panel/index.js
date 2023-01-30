import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/panel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/panel/basicdoc';
import { ImportDoc } from '../../components/doc/panel/importdoc';
import { StyleDoc } from '../../components/doc/panel/styledoc';
import { TemplateDoc } from '../../components/doc/panel/templatedoc';
import { ToggleableDoc } from '../../components/doc/panel/toggleabledoc';

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
            doc: [{ name: 'Panel', pathname: '/modules/panel.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Panel Component</title>
                <meta name="description" content="Panel is a container component with an optional content toggle feature." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Panel</h1>
                        <p>Panel is a container component with an optional content toggle feature.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PanelDemo;
