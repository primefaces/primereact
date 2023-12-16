import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/scrollpanel/accessibilitydoc';
import { BasicDoc } from '@/components/doc/scrollpanel/basicdoc';
import { CustomDemo } from '@/components/doc/scrollpanel/customdoc';
import { ImportDoc } from '@/components/doc/scrollpanel/importdoc';
import { PTDoc } from '@/components/doc/scrollpanel/pt/ptdoc';
import { Wireframe } from '@/components/doc/scrollpanel/pt/wireframe';
import { StyledDoc } from '@/components/doc/scrollpanel/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/scrollpanel/theming/tailwinddoc';

const ScrollPanelDemo = () => {
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
            id: 'custom',
            label: 'Custom',
            component: CustomDemo
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
            id: 'pt.scrollpanel.options',
            label: 'ScrollPanel PT Options',
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
        <DocComponent
            title="React ScrollPanel Component"
            header="ScrollPanel"
            description="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar."
            componentDocs={docs}
            apiDocs={['ScrollPanel']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default ScrollPanelDemo;
