import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/image/accessibilitydoc';
import { BasicDoc } from '@/components/doc/image/basicdoc';
import { ImportDoc } from '@/components/doc/image/importdoc';
import { PreviewDoc } from '@/components/doc/image/previewdoc';
import { PTDoc } from '@/components/doc/image/pt/ptdoc';
import { Wireframe } from '@/components/doc/image/pt/wireframe';
import { TemplateDoc } from '@/components/doc/image/templatedoc';
import { StyledDoc } from '@/components/doc/image/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/image/theming/tailwinddoc';
import { ThumbnailDoc } from '@/components/doc/image/thumbnaildoc';

const ImageDemo = () => {
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
            id: 'preview',
            label: 'Preview',
            component: PreviewDoc
        },
        {
            id: 'thumbnail',
            label: 'Thumbnail',
            component: ThumbnailDoc
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
            id: 'pt.image.options',
            label: 'Image PT Options',
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

    return <DocComponent title="React Image Component" header="Image" description="Displays a single image with preview and tranformation options." componentDocs={docs} apiDocs={['Image']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default ImageDemo;
