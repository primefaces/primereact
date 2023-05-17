import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/messages/pt/ptdoc';
import { Wireframe } from '../../components/doc/messages/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/messages/accessibilitydoc';
import { BasicDoc } from '../../components/doc/messages/basicdoc';
import { ClosableDoc } from '../../components/doc/messages/closeabledoc';
import { DynamicDoc } from '../../components/doc/messages/dynamicdoc';
import { ImportDoc } from '../../components/doc/messages/importdoc';
import { SeverityDoc } from '../../components/doc/messages/severitydoc';
import { StickyDoc } from '../../components/doc/messages/stickydoc';
import { StyleDoc } from '../../components/doc/messages/styledoc';
import { TemplateDoc } from '../../components/doc/messages/templatedoc';

const MessagesDemo = () => {
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'closabledoc',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'stickydoc',
            label: 'Sticky',
            component: StickyDoc
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
            id: 'pt.messages.options',
            label: 'Messages PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Messages Component" header="Messages" description="Messages component is used to display inline messages." componentDocs={docs} apiDocs={['Messages']} ptDocs={ptDocs} />;
};

export default MessagesDemo;
