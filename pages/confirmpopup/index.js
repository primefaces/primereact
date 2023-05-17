import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/confirmpopup/accessibilitydoc';
import { BasicDoc } from '../../components/doc/confirmpopup/basicdoc';
import { DeclarativeDoc } from '../../components/doc/confirmpopup/declarativedoc';
import { ImportDoc } from '../../components/doc/confirmpopup/importdoc';
import { PTDoc } from '../../components/doc/confirmpopup/pt/ptdoc';
import { Wireframe } from '../../components/doc/confirmpopup/pt/wireframe';
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

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.confirmpopup.options',
            label: 'ConfirmPopup PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return (
        <>
            <DocComponent
                title="React Confirmation Popup Component"
                header="ConfirmPopup"
                description="ConfirmPopup is an easy to use and customizable Confirmation API using a popover."
                componentDocs={docs}
                apiDocs={['ConfirmPopup']}
                ptDocs={ptDocs}
            />
            <ConfirmPopup />
        </>
    );
};

export default ConfirmPopupDemo;
