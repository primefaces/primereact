import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/confirmdialog/apidoc';
import { BasicDoc } from '../../components/doc/confirmdialog/basicdoc';
import { ImportDoc } from '../../components/doc/confirmdialog/importdoc';
import { PositionDoc } from '../../components/doc/confirmdialog/positiondoc';
import { UsingConfirmDialogDoc } from '../../components/doc/confirmdialog/usingdoc';
import { ConfirmDialog } from '../../components/lib/confirmdialog/ConfirmDialog';

const ConfirmDialogDemo = () => {
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
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'using',
            label: 'Using ConfirmDialog tag',
            component: UsingConfirmDialogDoc
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
                <title>React Confirmation Dialog Component</title>
                <meta name="description" content="ConfirmDialog uses a Dialog UI with confirmDialog method or ConfirmDialog tag" />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>ConfirmDialog</h1>
                    <p>
                        ConfirmDialog uses a Dialog UI with <b>confirmDialog</b> method or <b>&lt;ConfirmDialog&gt;</b> tag.
                    </p>
                </div>
                <DocActions github="confirmdialog/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
                <ConfirmDialog />
            </div>
        </div>
    );
};

export default ConfirmDialogDemo;
