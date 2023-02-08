import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/confirmpopup/accessibilitydoc';
import { BasicDoc } from '../../components/doc/confirmpopup/basicdoc';
import { DeclarativeDoc } from '../../components/doc/confirmpopup/declarativedoc';
import { ImportDoc } from '../../components/doc/confirmpopup/importdoc';
import { StyleDoc } from '../../components/doc/confirmpopup/styledoc';
import { ConfirmPopup } from '../../components/lib/confirmpopup/ConfirmPopup';

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
        }
    ];

    return (
        <>
            <DocComponent
                title="React Confirmation Popup Component"
                header="ConfirmPopup"
                description="ConfirmPopup is an easy to use and customizable Confirmation API using a popover."
                componentDocs={docs}
                apiDocs={[{ name: 'ConfirmPopup', pathname: '/modules/confirmpopup.html' }]}
            />
            <ConfirmPopup />
        </>
    );
};

export default ConfirmPopupDemo;
