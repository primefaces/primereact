import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
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
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Image', pathname: '/modules/image.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Image Component</title>
                <meta name="description" content="Displays a single image with preview and tranformation options." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Image</h1>
                        <p>Displays a single image with preview and tranformation options.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ImageDemo;
