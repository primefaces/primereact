import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/image/accessibilitydoc';
import { BasicDoc } from '../../components/doc/image/basicdoc';
import { ImportDoc } from '../../components/doc/image/importdoc';
import { PreviewDoc } from '../../components/doc/image/previewdoc';
import { StyleDoc } from '../../components/doc/image/styledoc';
import { TemplateDoc } from '../../components/doc/image/templatedoc';
import { ThumbnailDoc } from '../../components/doc/image/thumbnaildoc';

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

    return <DocComponent title="React Image Component" header="Image" description="Displays a single image with preview and tranformation options." componentDocs={docs} apiDocs={[{ name: 'Image', pathname: '/modules/image.html' }]} />;
};

export default ImageDemo;
