import { AccessibilityDoc } from '../../components/doc/accordion/accessibilitydoc';
import { BasicDoc } from '../../components/doc/accordion/basicdoc';
import { ControlledDoc } from '../../components/doc/accordion/controlleddoc';
import { DisabledDoc } from '../../components/doc/accordion/disableddoc';
import { ImportDoc } from '../../components/doc/accordion/importdoc';
import { MultipleDoc } from '../../components/doc/accordion/multipledoc';
import { StyleDoc } from '../../components/doc/accordion/styledoc';
import { TemplateDoc } from '../../components/doc/accordion/templatedoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const AccordionDemo = () => {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
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

    return <DocComponent title="React Accordion Component" header="Accordion" description="Accordion groups a collection of contents in tabs." componentDocs={docs} apiDocs={['Accordion', 'AccordionTab']} />;
};

export default AccordionDemo;
