import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/confirmpopup/accessibilitydoc';
import { BasicDoc } from '@/components/doc/confirmpopup/basicdoc';
import { DeclarativeDoc } from '@/components/doc/confirmpopup/declarativedoc';
import { ImportDoc } from '@/components/doc/confirmpopup/importdoc';
import { PTDoc } from '@/components/doc/confirmpopup/pt/ptdoc';
import { Wireframe } from '@/components/doc/confirmpopup/pt/wireframe';
import { StyledDoc } from '@/components/doc/confirmpopup/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/confirmpopup/theming/tailwinddoc';
import { ConfirmPopup } from '@/components/lib/confirmpopup/ConfirmPopup';
import { TemplateDoc } from '@/components/doc/confirmpopup/templatedoc';
import { HeadlessDoc } from '@/components/doc/confirmpopup/headlessdoc';

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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'headless',
            label: 'Headless',
            component: HeadlessDoc
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

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
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
                themingDocs={themingDocs}
            />
            <ConfirmPopup />
        </>
    );
};

export default ConfirmPopupDemo;
