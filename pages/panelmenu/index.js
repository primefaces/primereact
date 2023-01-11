import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { BasicDoc } from '../../components/doc/panelmenu/basicdoc';
import { ImportDoc } from '../../components/doc/panelmenu/importdoc';
import { ApiDoc } from '../../components/doc/panelmenu/apidoc';
import { AccessibilityDoc } from '../../components/doc/panelmenu/accessibilitydoc';
import { StyleDoc } from '../../components/doc/panelmenu/styledoc';
import { ControlledDoc } from '../../components/doc/panelmenu/controlleddoc';

const PanelMenuDemo = () => {
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
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React PanelMenu Component</title>
                <meta name="description" content="PanelMenu is a hybrid of accordion-tree components." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>PanelMenu</h1>
                    <p>PanelMenu is a hybrid of accordion-tree components.</p>
                </div>
                <DocActions github="panelmenu/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PanelMenuDemo;
