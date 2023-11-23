import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/splitter/accessibilitydoc';
import { HorizontalDoc } from '@/components/doc/splitter/horizontaldoc';
import { ImportDoc } from '@/components/doc/splitter/importdoc';
import { NestedDoc } from '@/components/doc/splitter/nesteddoc';
import { PTDoc } from '@/components/doc/splitter/pt/ptdoc';
import { Wireframe } from '@/components/doc/splitter/pt/wireframe';
import { SizeDoc } from '@/components/doc/splitter/sizedoc';
import { StyledDoc } from '@/components/doc/splitter/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/splitter/theming/tailwinddoc';
import { VerticalDoc } from '@/components/doc/splitter/verticaldoc';

const SplitterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'nested',
            label: 'Nested',
            component: NestedDoc
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
            id: 'pt.splitter.options',
            label: 'Splitter PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.splitterpanel.options',
            label: 'SplitterPanel PT Options',
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

    return <DocComponent title="React Splitter Component" header="Splitter" description="Splitter is utilized to separate and resize panels." componentDocs={docs} apiDocs={['Splitter', 'SplitterPanel']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default SplitterDemo;
