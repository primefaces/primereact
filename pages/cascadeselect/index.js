import { AccessibilityDoc } from '@/components/doc/cascadeselect/accessibilitydoc';
import { BasicDoc } from '@/components/doc/cascadeselect/basicdoc';
import { ClearIconDoc } from '@/components/doc/cascadeselect/clearicondoc';
import { DisabledDoc } from '@/components/doc/cascadeselect/disableddoc';
import { FilledDoc } from '@/components/doc/cascadeselect/filleddoc';
import { FloatLabelDoc } from '@/components/doc/cascadeselect/floatlabeldoc';
import { ImportDoc } from '@/components/doc/cascadeselect/importdoc';
import { InvalidDoc } from '@/components/doc/cascadeselect/invaliddoc';
import { LoadingDoc } from '@/components/doc/cascadeselect/loadingdoc';
import { Wireframe } from '@/components/doc/cascadeselect/pt/wireframe';
import { TemplateDoc } from '@/components/doc/cascadeselect/templatedoc';
import { StyledDoc } from '@/components/doc/cascadeselect/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/cascadeselect/theming/tailwinddoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const CascadeSelectDemo = () => {
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
            id: 'loadingstate',
            label: 'Loading State',
            component: LoadingDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'clearicon',
            label: 'Clear Icon',
            component: ClearIconDoc
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
            id: 'pt.cascadeselect.options',
            label: 'CascadeSelect PT Options',
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
            title="React CascadeSelect Component"
            header="CascadeSelect"
            description="CascadeSelect is a form component to select a value from a nested structure of options."
            componentDocs={docs}
            apiDocs={['CascadeSelect']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default CascadeSelectDemo;
