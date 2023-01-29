import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/confirmpopup/accessibilitydoc';
import { BasicDoc } from '../../components/doc/confirmpopup/basicdoc';
import { DeclarativeDoc } from '../../components/doc/confirmpopup/declarativedoc';
import { ImportDoc } from '../../components/doc/confirmpopup/importdoc';
import { StyleDoc } from '../../components/doc/confirmpopup/styledoc';

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
            id: 'declarative',
            label: 'Declarative',
            component: DeclarativeDoc
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
            doc: [{ name: 'ConfirmPopup', pathname: '/modules/confirmpopup.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Confirmation Popup Component</title>
                <meta name="description" content="ConfirmPopup is an easy to use and customizable Confirmation API using a popover." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>ConfirmPopup</h1>
                        <p>ConfirmPopup is an easy to use and customizable Confirmation API using a popover.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ConfirmPopupDemo;
