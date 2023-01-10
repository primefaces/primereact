import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/tabview/importdoc';
import { BasicDoc } from '../../components/doc/tabview/basicdoc';
import { ControlledDoc } from '../../components/doc/tabview/controlleddoc';
import { DisabledDoc } from '../../components/doc/tabview/disableddoc';
import { HeaderIconDoc } from '../../components/doc/tabview/headericondoc';
import { TemplateDoc } from '../../components/doc/tabview/templatedoc';
import { ClosableDoc } from '../../components/doc/tabview/closabledoc';
import { ScrollableDoc } from '../../components/doc/tabview/scrollabledoc';
import { ApiDoc } from '../../components/doc/tabview/apidoc';
import { AccessibilityDoc } from '../../components/doc/tabview/accessibilitydoc';
import { StylingDoc } from '../../components/doc/tabview/stylingdoc';

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
            id: 'headericons',
            label: 'Header Icons',
            component: HeaderIconDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'slosable',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDoc
        },
        {
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
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
                },
                {
                    id: 'methods',
                    label: 'Methods'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Tabs Component</title>
                <meta name="description" content="TabView is a container component to group content with tabs." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>TabView</h1>
                    <p>TabView is a container component to group content with tabs.</p>
                </div>
                <DocActions github="tabview/index.js" />
            </div>

            <div className="content-section doc dataview-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TabViewDemo;
