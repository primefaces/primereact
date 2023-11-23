import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/picklist/accessibilitydoc';
import { BasicDoc } from '@/components/doc/picklist/basicdoc';
import { FilterDoc } from '@/components/doc/picklist/filterdoc';
import { ImportDoc } from '@/components/doc/picklist/importdoc';
import { PTDoc } from '@/components/doc/picklist/pt/ptdoc';
import { Wireframe } from '@/components/doc/picklist/pt/wireframe';
import { StyledDoc } from '@/components/doc/picklist/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/picklist/theming/tailwinddoc';

const PickListDemo = () => {
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
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
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
            id: 'pt.picklist.options',
            label: 'PickList PT Options',
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

    return <DocComponent title="React PickList Component" header="PickList" description="PickList is used to reorder items between different lists.." componentDocs={docs} apiDocs={['PickList']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default PickListDemo;
