import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/panelmenu/accessibilitydoc';
import { ApiDoc } from '../../components/doc/panelmenu/apidoc';
import { BasicDoc } from '../../components/doc/panelmenu/basicdoc';
import { ImportDoc } from '../../components/doc/panelmenu/importdoc';
import { MultipleDoc } from '../../components/doc/panelmenu/multipledoc';
import { StyleDoc } from '../../components/doc/panelmenu/styledoc';

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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
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
            component: ApiDoc
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
                <DocActions github="/panelmenu" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PanelMenuDemo;
