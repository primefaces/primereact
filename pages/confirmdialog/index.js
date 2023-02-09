import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/confirmdialog/accessibilitydoc';
import { BasicDoc } from '../../components/doc/confirmdialog/basicdoc';
import { DeclarativeDoc } from '../../components/doc/confirmdialog/declarativedoc';
import { ImportDoc } from '../../components/doc/confirmdialog/importdoc';
import { PositionDoc } from '../../components/doc/confirmdialog/positiondoc';
import { StyleDoc } from '../../components/doc/confirmdialog/styledoc';
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
        }
    ];

    return (
        <>
            <DocComponent
                title="React Confirmation Dialog Component"
                header="ConfirmDialog"
                description="ConfirmDialog is an easy to use and customizable Confirmation API using a dialog."
                componentDocs={docs}
                apiDocs={[{ name: 'ConfirmDialog', pathname: '/modules/confirmdialog.html' }]}
            />
            <ConfirmDialog />
        </>
    );
};

export default ConfirmDialogDemo;
