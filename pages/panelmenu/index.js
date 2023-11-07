import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/panelmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/panelmenu/basicdoc';
import { ImportDoc } from '../../components/doc/panelmenu/importdoc';
import { MultipleDoc } from '../../components/doc/panelmenu/multipledoc';
import { PTDoc } from '../../components/doc/panelmenu/pt/ptdoc';
import { Wireframe } from '../../components/doc/panelmenu/pt/wireframe';
import { StyleDoc } from '../../components/doc/panelmenu/styledoc';
import { StyledDoc } from '../../components/doc/panelmenu/theming/styleddoc';
import { TailwindDoc } from '../../components/doc/panelmenu/theming/tailwinddoc';

const PanelMenuDemo = () => {
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
            id: 'pt.panelmenu.options',
            label: 'PanelMenu PT Options',
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

    return <DocComponent title="React PanelMenu Component" header="PanelMenu" description="PanelMenu is a hybrid of accordion-tree components." componentDocs={docs} apiDocs={['PanelMenu', 'MenuItem']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default PanelMenuDemo;
