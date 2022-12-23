import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/tabview/importdoc';
import { DefaultDoc } from '../../components/doc/tabview/defaultdoc';
import { ProgrammaticDoc } from '../../components/doc/tabview/programmaticdoc';
import { DisabledDoc } from '../../components/doc/tabview/disableddoc';
import { HeaderIconDoc } from '../../components/doc/tabview/headericondoc';
import { CustomHeaderDoc } from '../../components/doc/tabview/customheaderdoc';
import { ClosableDoc } from '../../components/doc/tabview/closabledoc';
import { ScrollableDoc } from '../../components/doc/tabview/scrollabledoc';
import { ApiDoc } from '../../components/doc/tabview/apidoc';

const TabViewDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDoc
        },
        {
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
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
            id: 'customheader',
            label: 'Custom Headers',
            component: CustomHeaderDoc
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
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'propertiesfortabpanel',
                    label: 'Properties For TabPanel'
                },
                {
                    id: 'propertiesfortabview',
                    label: 'Properties For TabView'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'methods',
                    label: 'Methods'
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
