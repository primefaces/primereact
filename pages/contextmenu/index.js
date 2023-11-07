import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/contextmenu/pt/ptdoc';
import { Wireframe } from '../../components/doc/contextmenu/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/contextmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/contextmenu/basicdoc';
import { DocumentDoc } from '../../components/doc/contextmenu/documentdoc';
import { ImportDoc } from '../../components/doc/contextmenu/importdoc';
import { StyleDoc } from '../../components/doc/contextmenu/styledoc';
import { TailwindDoc } from '../../components/doc/contextmenu/theming/tailwinddoc';
import { StyledDoc } from '../../components/doc/contextmenu/theming/styleddoc';

const ContextMenuDemo = () => {
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
            id: 'document',
            label: 'Document',
            component: DocumentDoc
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
            id: 'pt.contextmenu.options',
            label: 'ContextMenu PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="React ContextMenu Component"
            header="ContextMenu"
            description="ContextMenu displays an overlay menu on right click of its target."
            componentDocs={docs}
            apiDocs={['ContextMenu', 'MenuItem']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default ContextMenuDemo;
