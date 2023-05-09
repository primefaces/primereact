import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/divider/accessibilitydoc';
import { BasicDoc } from '../../components/doc/divider/basicdoc';
import { ContentDoc } from '../../components/doc/divider/contentdoc';
import { ImportDoc } from '../../components/doc/divider/importdoc';
import { LoginDoc } from '../../components/doc/divider/logindoc';
import { StyleDoc } from '../../components/doc/divider/styledoc';
import { TypeDoc } from '../../components/doc/divider/typedoc';
import { VerticalDoc } from '../../components/doc/divider/verticaldoc';
import { PTDoc } from '../../components/doc/divider/pt/ptdoc';
import { Wireframe } from '../../components/doc/divider/pt/wireframe';

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
            id: 'content',
            label: 'Content',
            component: ContentDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'login',
            label: 'Login',
            component: LoginDoc
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

    return <DocComponent title="React Divider Component" header="Divider" description="Divider is used to separate contents." componentDocs={docs} apiDocs={['Divider']} ptDocs={ptDocs} />;
};

export default DividerDemo;
