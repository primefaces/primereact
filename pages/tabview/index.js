import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/tabview/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tabview/basicdoc';
import { ClosableDoc } from '../../components/doc/tabview/closabledoc';
import { ControlledDoc } from '../../components/doc/tabview/controlleddoc';
import { DisabledDoc } from '../../components/doc/tabview/disableddoc';
import { HeaderIconDoc } from '../../components/doc/tabview/headericondoc';
import { ImportDoc } from '../../components/doc/tabview/importdoc';
import { ScrollableDoc } from '../../components/doc/tabview/scrollabledoc';
import { StyleDoc } from '../../components/doc/tabview/styledoc';
import { TemplateDoc } from '../../components/doc/tabview/templatedoc';

const TabViewDemo = () => {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'headericon',
            label: 'Header Icon',
            component: HeaderIconDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'closable',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDoc
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
            doc: [
                { name: 'TabView', pathname: '/modules/tabview.html' },
                { name: 'TabPanel', pathname: '/classes/tabview.TabPanel.html' }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Tabs Component</title>
                <meta name="description" content="TabView is a container component to group content with tabs." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>TabView</h1>
                        <p>TabView is a container component to group content with tabs.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TabViewDemo;
