import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { UsingConfirmPopupDoc } from '../../components/doc/confirmpopup/usingdoc';
import { BasicDoc } from '../../components/doc/confirmpopup/basicdoc';
import { ImportDoc } from '../../components/doc/confirmpopup/importdoc';
import { ApiDoc } from '../../components/doc/confirmpopup/apidoc';

const ConfirmPopupDemo = () => {
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
            id: 'using',
            label: 'Using ConfirmPopup tag',
            component: UsingConfirmPopupDoc
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
                <title>React Confirmation Popup Component</title>
                <meta name="description" content="ConfirmPopup displays a confirmation overlay displayed relatively to its target." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>ConfirmPopup</h1>
                    <p>ConfirmPopup displays a confirmation overlay displayed relatively to its target.</p>
                </div>
                <DocActions github="confirmpopup/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ConfirmPopupDemo;
