import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/tabmenu/importdoc';
import { DefaultDoc } from '../../components/doc/tabmenu/defaultdoc';
import { ProgrammaticDoc } from '../../components/doc/tabmenu/programmaticdoc';
import { ApiDoc } from '../../components/doc/tabmenu/apidoc';

const TabMenuDemo = () => {
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
            id: 'Programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
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
