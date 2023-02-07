import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/fieldset/accessibilitydoc';
import { BasicDoc } from '../../components/doc/fieldset/basicdoc';
import { ImportDoc } from '../../components/doc/fieldset/importdoc';
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

    return <DocComponent title="React Fieldset Component" header="Fieldset" description="Fieldset is a grouping component with a content toggle feature." componentDocs={docs} apiDocs={[{ name: 'Fieldset', pathname: '/modules/fieldset.html' }]} />;
};

export default FieldsetDemo;
