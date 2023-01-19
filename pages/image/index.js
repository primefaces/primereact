import Head from 'next/head';
import Link from 'next/link';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/image/importdoc';
import { BasicDoc } from '../../components/doc/image/basicdoc';
import { PreviewDoc } from '../../components/doc/image/previewdoc';
import { ThumbnailDoc } from '../../components/doc/image/thumbnaildoc';
import { TemplateDoc } from '../../components/doc/image/templatedoc';
import { ApiDoc } from '../../components/doc/image/apidoc';
import { AccessibilityDoc } from '../../components/doc/image/accessibilitydoc';
import { StyleDoc } from '../../components/doc/image/styledoc';

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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Image Component</title>
                <meta name="description" content="Displays a single image with preview and tranformation options." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <div className="feature-intro">
                        <h1>Image</h1>
                        <p>Displays a single image with preview and tranformation options.</p>
                    </div>
                </div>
                <DocActions github="image/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ImageDemo;
