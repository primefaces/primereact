import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/tristatecheckbox/accessibilitydoc';
import { BasicDoc } from '@/components/doc/tristatecheckbox/basicdoc';
import { DisabledDoc } from '@/components/doc/tristatecheckbox/disableddoc';
import { FilledDoc } from '@/components/doc/tristatecheckbox/filleddoc';
import { ImportDoc } from '@/components/doc/tristatecheckbox/importdoc';
import { InvalidDoc } from '@/components/doc/tristatecheckbox/invaliddoc';
import { PTDoc } from '@/components/doc/tristatecheckbox/pt/ptdoc';
import { Wireframe } from '@/components/doc/tristatecheckbox/pt/wireframe';
import { StyledDoc } from '@/components/doc/tristatecheckbox/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/tristatecheckbox/theming/tailwinddoc';

const TriStateCheckboxDemo = () => {
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
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
            id: 'pt.tristatecheckbox.options',
            label: 'TriStateCheckbox PT Options',
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
            title="React TriStateCheckbox Component"
            header="TriStateCheckbox"
            description="TriStateCheckbox is an extension to the Checkbox component with an additional state."
            componentDocs={docs}
            apiDocs={['TriStateCheckbox']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default TriStateCheckboxDemo;
