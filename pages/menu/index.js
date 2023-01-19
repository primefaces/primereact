import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/menu/importdoc';
import { BasicDoc } from '../../components/doc/menu/basicdoc';
import { GroupDoc } from '../../components/doc/menu/groupdoc';
import { PopupDoc } from '../../components/doc/menu/popupdoc';
import { TemplateDoc } from '../../components/doc/menu/templatedoc';
import { ApiDoc } from '../../components/doc/menu/apidoc';
import { AccessibilityDoc } from '../../components/doc/menu/accessibilitydoc';
import { StyleDoc } from '../../components/doc/menu/styledoc';

const MenuDemo = () => {
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
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Menu Component</title>
                <meta name="description" content="Menu is a navigation/command component that supports dynamic and static positioning." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Menu</h1>
                    <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                </div>
                <DocActions github="menu/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default MenuDemo;
