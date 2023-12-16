import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/fileupload/accessibilitydoc';
import { AdvancedDoc } from '@/components/doc/fileupload/advanceddoc';
import { AutoDoc } from '@/components/doc/fileupload/autodoc';
import { BasicDoc } from '@/components/doc/fileupload/basicdoc';
import { CustomUploadDoc } from '@/components/doc/fileupload/customuploaddoc';
import { ImportDoc } from '@/components/doc/fileupload/importdoc';
import { PTDoc } from '@/components/doc/fileupload/pt/ptdoc';
import { Wireframe } from '@/components/doc/fileupload/pt/wireframe';
import { TemplateDoc } from '@/components/doc/fileupload/templatedoc';
import { StyledDoc } from '@/components/doc/fileupload/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/fileupload/theming/tailwinddoc';

const FileUploadDemo = () => {
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
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'custom',
            label: 'Custom Upload',
            component: CustomUploadDoc
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
            id: 'pt.fileupload.options',
            label: 'FileUpload PT Options',
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
            title="React Upload Component"
            header="FileUpload"
            description="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations."
            componentDocs={docs}
            apiDocs={['FileUpload']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default FileUploadDemo;
