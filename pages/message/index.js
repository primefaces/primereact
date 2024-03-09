import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/message/accessibilitydoc';
import { BasicDoc } from '@/components/doc/message/basicdoc';
import { ImportDoc } from '@/components/doc/message/importdoc';
import { PTDoc } from '@/components/doc/message/pt/ptdoc';
import { Wireframe } from '@/components/doc/message/pt/wireframe';
import { SeverityDoc } from '@/components/doc/message/severitydoc';
import { TemplateDoc } from '@/components/doc/message/templatedoc';
import { StyledDoc } from '@/components/doc/message/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/message/theming/tailwinddoc';
import { ValidationDoc } from '@/components/doc/message/validationdoc';

const MessageDemo = () => {
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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'form',
            label: 'Form',
            component: ValidationDoc
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
            id: 'pt.message.options',
            label: 'Message PT Options',
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
            title="React Message Component"
            header="Message"
            description="Message component displays information related to another element such as invalid input."
            componentDocs={docs}
            apiDocs={['Message']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default MessageDemo;
