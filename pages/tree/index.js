import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tree/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tree/basicdoc';
import { ContextMenuDoc } from '../../components/doc/tree/contextmenudoc';
import { DragAndDropDoc } from '../../components/doc/tree/draganddropdoc';
import { TreeEventsDoc } from '../../components/doc/tree/eventsdoc';
import { LenientFilterDoc } from '../../components/doc/tree/filter/lenientfilterdoc';
import { StrictFilterDoc } from '../../components/doc/tree/filter/strictfilterdoc';
import { ImportDoc } from '../../components/doc/tree/importdoc';
import { LazyDoc } from '../../components/doc/tree/lazydoc';
import { ProgrammaticDoc } from '../../components/doc/tree/programmaticdoc';
import { CheckboxSelectionDoc } from '../../components/doc/tree/selection/checkboxselectiondoc';
import { MultipleSelectionWithKeyDoc } from '../../components/doc/tree/selection/multipleselectionwithkeydoc';
import { MultipleSelectionWithoutKeyDoc } from '../../components/doc/tree/selection/multipleselectionwithoutkeydoc';
import { SingleSelectionDoc } from '../../components/doc/tree/selection/singleselectiondoc';
import { StyleDoc } from '../../components/doc/tree/styledoc';
import { TemplateDoc } from '../../components/doc/tree/templatedoc';

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
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
        },
        {
            id: 'selection',
            label: 'Selection',
            description: 'Tree supports "single", "multiple" and "checkbox" as selection modes.',
            children: [
                {
                    id: 'singleselection',
                    label: 'Single',
                    component: SingleSelectionDoc
                },
                {
                    id: 'multipleselectionwithkey',
                    label: 'Multiple Selection with MetaKey',
                    component: MultipleSelectionWithKeyDoc
                },
                {
                    id: 'multipleselectionwithoutkey',
                    label: 'Multiple Selection without MetaKey',
                    component: MultipleSelectionWithoutKeyDoc
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
            component: TreeEventsDoc
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
            id: 'draganddrop',
            label: 'Drag and Drop',
            component: DragAndDropDoc
        },
        {
            id: 'contextmenu',
            label: 'ContextMenu',
            component: ContextMenuDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            description: 'Filtering updates the node based on the constraints.',
            children: [
                {
                    id: 'lenientfilter',
                    label: 'Lenient Filter',
                    component: LenientFilterDoc
                },
                {
                    id: 'strictfilter',
                    label: 'Strict Filter',
                    component: StrictFilterDoc
                }
            ]
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

    return <DocComponent title="React Tree Component" header="Tree" description="Tree is used to display hierarchical data." componentDocs={docs} apiDocs={[{ name: 'Tree', pathname: '/modules/tree.html' }]} />;
};

export default TreeDemo;
