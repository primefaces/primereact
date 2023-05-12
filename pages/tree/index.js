import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tree/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tree/basicdoc';
import { ContextMenuDoc } from '../../components/doc/tree/contextmenudoc';
import { EventsDoc } from '../../components/doc/tree/eventsdoc';
import { ImportDoc } from '../../components/doc/tree/importdoc';
import { LazyDoc } from '../../components/doc/tree/lazydoc';
import { ControlledDoc } from '../../components/doc/tree/controlleddoc';
import { CheckboxSelectionDoc } from '../../components/doc/tree/selection/checkboxselectiondoc';
import { SingleSelectionDoc } from '../../components/doc/tree/selection/singleselectiondoc';
import { StyleDoc } from '../../components/doc/tree/styledoc';
import { TemplateDoc } from '../../components/doc/tree/templatedoc';
import { MultipleSelectionDoc } from '../../components/doc/tree/selection/multipleselectiondoc';
import { DragDropDoc } from '../../components/doc/tree/dragdropdoc';
import { FilterDoc } from '../../components/doc/tree/filterdoc';

const TreeDemo = () => {
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
            id: 'selection',
            label: 'Selection',
            children: [
                {
                    id: 'singleselection',
                    label: 'Single',
                    component: SingleSelectionDoc
                },
                {
                    id: 'multipleselection',
                    label: 'Multiple',
                    component: MultipleSelectionDoc
                },

                {
                    id: 'checkboxselection',
                    label: 'Checkbox',
                    component: CheckboxSelectionDoc
                }
            ]
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'dragdrop',
            label: 'DragDrop',
            component: DragDropDoc
        },
        {
            id: 'contextmenu',
            label: 'ContextMenu',
            component: ContextMenuDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
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

    return <DocComponent title="React Tree Component" header="Tree" description="Tree is used to display hierarchical data." componentDocs={docs} apiDocs={['Tree', 'TreeNode']} />;
};

export default TreeDemo;
