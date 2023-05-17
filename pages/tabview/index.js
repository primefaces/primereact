import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tabview/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tabview/basicdoc';
import { ClosableDoc } from '../../components/doc/tabview/closabledoc';
import { ControlledDoc } from '../../components/doc/tabview/controlleddoc';
import { DisabledDoc } from '../../components/doc/tabview/disableddoc';
import { HeaderIconDoc } from '../../components/doc/tabview/headericondoc';
import { ImportDoc } from '../../components/doc/tabview/importdoc';
import { ScrollableDoc } from '../../components/doc/tabview/scrollabledoc';
import { StyleDoc } from '../../components/doc/tabview/styledoc';
import { TemplateDoc } from '../../components/doc/tabview/templatedoc';
import { Wireframe } from '../../components/doc/tabview/pt/wireframe';
import { PTDoc } from '../../components/doc/tabview/pt/ptdoc';
import DocApiTable from '../../components/doc/common/docapitable';

const TabViewDemo = () => {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'headericon',
            label: 'Header Icon',
            component: HeaderIconDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'closable',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDoc
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
            id: 'pt.tabview.options',
            label: 'TabView PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.tabpanel.options',
            label: 'TabPanel PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Tabs Component" header="TabView" description="TabView is a container component to group content with tabs." componentDocs={docs} apiDocs={['TabView', 'TabPanel']} ptDocs={ptDocs} ptDescription="" />;
};

export default TabViewDemo;
