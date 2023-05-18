import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/message/pt/ptdoc';
import { Wireframe } from '../../components/doc/message/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/message/accessibilitydoc';
import { BasicDoc } from '../../components/doc/message/basicdoc';
import { ImportDoc } from '../../components/doc/message/importdoc';
import { SeverityDoc } from '../../components/doc/message/severitydoc';
import { StyleDoc } from '../../components/doc/message/styledoc';
import { TemplateDoc } from '../../components/doc/message/templatedoc';
import { ValidationDoc } from '../../components/doc/message/validationdoc';

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
            id: 'style',
            label: 'Style',
            component: StyleDoc
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

    return <DocComponent title="React Message Component" header="Message" description="Message component displays information related to another element such as invalid input." componentDocs={docs} apiDocs={['Message']} ptDocs={ptDocs} />;
};

export default MessageDemo;
