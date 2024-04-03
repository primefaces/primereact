import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/editor/accessibilitydoc';
import { BasicDoc } from '@/components/doc/editor/basicdoc';
import { ImportDoc } from '@/components/doc/editor/importdoc';
import { Wireframe } from '@/components/doc/editor/pt/wireframe';
import { QuillDoc } from '@/components/doc/editor/quilldoc';
import { ReadOnlyDoc } from '@/components/doc/editor/readonlydoc';
import { TemplateDoc } from '@/components/doc/editor/templatedoc';
import { StyledDoc } from '@/components/doc/editor/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/editor/theming/tailwinddoc';

const EditorDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'quill',
            label: 'Quill',
            component: QuillDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'readOnly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            id: 'pt.editor.options',
            label: 'Editor PT Options',
            component: DocApiTable
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

    return <DocComponent title="React Editor Component" header="Editor" description="Editor is rich text editor component based on Quill." componentDocs={docs} apiDocs={['Editor']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default EditorDemo;
