import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/confirmdialog/accessibilitydoc';
import { BasicDoc } from '@/components/doc/confirmdialog/basicdoc';
import { DeclarativeDoc } from '@/components/doc/confirmdialog/declarativedoc';
import { HeadlessDoc } from '@/components/doc/confirmdialog/headlessdoc';
import { ImportDoc } from '@/components/doc/confirmdialog/importdoc';
import { PositionDoc } from '@/components/doc/confirmdialog/positiondoc';
import { PTDoc } from '@/components/doc/confirmdialog/pt/ptdoc';
import { Wireframe } from '@/components/doc/confirmdialog/pt/wireframe';
import { ResponsiveDoc } from '@/components/doc/confirmdialog/responsivedoc';
import { TemplateDoc } from '@/components/doc/confirmdialog/templatedoc';
import { StyledDoc } from '@/components/doc/confirmdialog/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/confirmdialog/theming/tailwinddoc';
import { ConfirmDialog } from '@/components/lib/primereact.all';

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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
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
            id: 'pt.confirmdialog.options',
            label: 'ConfirmDialog PT Options',
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
                title="React Confirmation Dialog Component"
                header="ConfirmDialog"
                description="ConfirmDialog is an easy to use and customizable Confirmation API using a dialog."
                componentDocs={docs}
                apiDocs={['ConfirmDialog']}
                ptDocs={ptDocs}
                themingDocs={themingDocs}
            />
            <ConfirmDialog />
        </>
    );
};

export default ConfirmDialogDemo;
