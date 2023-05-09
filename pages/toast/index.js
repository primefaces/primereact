import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/toast/accessibilitydoc';
import { BasicDoc } from '../../components/doc/toast/basicdoc';
import { ImportDoc } from '../../components/doc/toast/importdoc';
import { MultipleDoc } from '../../components/doc/toast/multipledoc';
import { PositionDoc } from '../../components/doc/toast/positiondoc';
import { SeverityDoc } from '../../components/doc/toast/severitydoc';
import { StickyDoc } from '../../components/doc/toast/stickydoc';
import { StyleDoc } from '../../components/doc/toast/styledoc';
import { TemplateDoc } from '../../components/doc/toast/templatedoc';

const ToastDemo = () => {
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
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
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

    return <DocComponent title="React Toast Component" header="Toast" description="Toast is used to display messages in an overlay." componentDocs={docs} apiDocs={['Toast']} />;
};

export default ToastDemo;
