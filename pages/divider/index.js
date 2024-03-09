import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/divider/accessibilitydoc';
import { BasicDoc } from '@/components/doc/divider/basicdoc';
import { ContentDoc } from '@/components/doc/divider/contentdoc';
import { ImportDoc } from '@/components/doc/divider/importdoc';
import { LoginDoc } from '@/components/doc/divider/logindoc';
import { PTDoc } from '@/components/doc/divider/pt/ptdoc';
import { Wireframe } from '@/components/doc/divider/pt/wireframe';
import { TailwindDoc } from '@/components/doc/divider/theming/tailwinddoc';
import { TypeDoc } from '@/components/doc/divider/typedoc';
import { VerticalDoc } from '@/components/doc/divider/verticaldoc';
import { StyledDoc } from '@/components/doc/fieldset/theming/styleddoc';

const DividerDemo = () => {
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
            id: 'type',
            label: 'Type',
            component: TypeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'content',
            label: 'Content',
            component: ContentDoc
        },
        {
            id: 'login',
            label: 'Login',
            component: LoginDoc
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
            id: 'pt.divider.options',
            label: 'Divider PT Options',
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

    return <DocComponent title="React Divider Component" header="Divider" description="Divider is used to separate contents." componentDocs={docs} apiDocs={['Divider']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default DividerDemo;
