import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/tabmenu/importdoc';
import { BasicDoc } from '../../components/doc/tabmenu/basicdoc';
import { ControlledDoc } from '../../components/doc/tabmenu/controlleddoc';
import { ApiDoc } from '../../components/doc/tabmenu/apidoc';
import { AccessibilityDoc } from '../../components/doc/tabmenu/accessibilitydoc';
import { StyleDoc } from '../../components/doc/tabmenu/styledoc';

const TabMenuDemo = () => {
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
                <title>React TabMenu Component</title>
                <meta name="description" content="TabMenu is a navigation/command component that displays items as tab headers." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>TabMenu</h1>
                    <p>TabMenu is a navigation/command component that displays items as tab headers.</p>
                </div>
                <DocActions github="tabmenu/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TabMenuDemo;
