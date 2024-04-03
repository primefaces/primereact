import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputtextarea/accessibilitydoc';
import { AutoResizeDoc } from '@/components/doc/inputtextarea/autoresizedoc';
import { BasicDoc } from '@/components/doc/inputtextarea/basicdoc';
import { DisabledDoc } from '@/components/doc/inputtextarea/disableddoc';
import { FilledDoc } from '@/components/doc/inputtextarea/filleddoc';
import { FloatLabelDoc } from '@/components/doc/inputtextarea/floatlabeldoc';
import { ImportDoc } from '@/components/doc/inputtextarea/importdoc';
import { InvalidDoc } from '@/components/doc/inputtextarea/invaliddoc';
import { KeyFilterDoc } from '@/components/doc/inputtextarea/keyfilterdoc';
import { Wireframe } from '@/components/doc/inputtextarea/pt/wireframe';
import { StyledDoc } from '@/components/doc/inputtextarea/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inputtextarea/theming/tailwinddoc';

const InputTextareaDemo = () => {
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
            id: 'autoresize',
            label: 'Auto Resize',
            component: AutoResizeDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
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
            id: 'pt.inputtextarea.options',
            label: 'InputTextarea PT Options',
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
            title="React Textarea Component"
            header="InputTextarea"
            description="InputTextarea adds styling and autoResize functionality to standard textarea element."
            componentDocs={docs}
            apiDocs={['InputTextarea']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default InputTextareaDemo;
