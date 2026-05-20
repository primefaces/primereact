import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/bottomnavigation/accessibilitydoc';
import { BasicDoc } from '@/components/doc/bottomnavigation/basicdoc';
import { ControlledDoc } from '@/components/doc/bottomnavigation/controlleddoc';
import { DisplayDoc } from '@/components/doc/bottomnavigation/displaydoc';
import { ImportDoc } from '@/components/doc/bottomnavigation/importdoc';
import { Wireframe } from '@/components/doc/bottomnavigation/pt/wireframe';
import { TemplateDoc } from '@/components/doc/bottomnavigation/templatedoc';
import { StyledDoc } from '@/components/doc/bottomnavigation/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/bottomnavigation/theming/tailwinddoc';

const BottomNavigationDemo = () => {
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
            id: 'display',
            label: 'Display',
            component: DisplayDoc
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.bottomnavigation.options',
            label: 'BottomNavigation PT Options',
            component: DocApiTable
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
        <DocComponent
            title="React Bottom Navigation Component"
            header="Bottom Navigation"
            description="BottomNavigation is a compact navigation component designed for switching between primary application destinations."
            componentDocs={docs}
            apiDocs={['BottomNavigation', 'MenuItem']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default BottomNavigationDemo;
