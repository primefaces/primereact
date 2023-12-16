import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/scrolltop/accessibilitydoc';
import { BasicDoc } from '@/components/doc/scrolltop/basicdoc';
import { ElementDoc } from '@/components/doc/scrolltop/elementdoc';
import { ImportDoc } from '@/components/doc/scrolltop/importdoc';
import { PTDoc } from '@/components/doc/scrolltop/pt/ptdoc';
import { Wireframe } from '@/components/doc/scrolltop/pt/wireframe';
import { StyledDoc } from '@/components/doc/scrolltop/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/scrolltop/theming/tailwinddoc';

const ScrollTopDemo = () => {
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
            id: 'element',
            label: 'Element',
            component: ElementDoc
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
            id: 'pt.scrolltop.options',
            label: 'ScrollTop PT Options',
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
            title="React ScrollTop Component"
            header="ScrollTop"
            description="ScrollTop gets displayed when it gets into viewport and used to navigate back to the top of the page."
            componentDocs={docs}
            apiDocs={['ScrollTop']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default ScrollTopDemo;
