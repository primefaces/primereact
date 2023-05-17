import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/fieldset/accessibilitydoc';
import { BasicDoc } from '../../components/doc/fieldset/basicdoc';
import { ImportDoc } from '../../components/doc/fieldset/importdoc';
import { PTDoc } from '../../components/doc/fieldset/pt/ptdoc';
import { Wireframe } from '../../components/doc/fieldset/pt/wireframe';
import { StyleDoc } from '../../components/doc/fieldset/styledoc';
import { TemplateDoc } from '../../components/doc/fieldset/templatedoc';
import { ToggleableDoc } from '../../components/doc/fieldset/toggleabledoc';

const FieldsetDemo = () => {
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
            id: 'toggleable',
            label: 'Toggleable',
            component: ToggleableDoc
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
            id: 'pt.fieldset.options',
            label: 'Fieldset PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Fieldset Component" header="Fieldset" description="Fieldset is a grouping component with a content toggle feature." componentDocs={docs} apiDocs={['Fieldset']} ptDocs={ptDocs} />;
};

export default FieldsetDemo;
