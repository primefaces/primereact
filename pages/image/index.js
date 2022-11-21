import Head from 'next/head';
import Link from 'next/link';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/image/importdoc';
import { BasicDoc } from '../../components/doc/image/basicdoc';
import { PreviewDoc } from '../../components/doc/image/previewdoc';
import { ThumbnailDoc } from '../../components/doc/image/thumbnaildoc';
import { TemplatingDoc } from '../../components/doc/image/templatingdoc';
import { ApiDoc } from '../../components/doc/image/apidoc';

const ImageDemo = () => {
    // const contextPath = getConfig().publicRuntimeConfig.contextPath;
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
            label: 'Preview and Zoom',
            component: PreviewDoc
        },
        {
            id: 'thumbnail',
            label: 'Thumbnail',
            component: ThumbnailDoc
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Image Component</title>
                <meta name="description" content="Displays an image with preview and tranformation options." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <div className="feature-intro">
                        <h1>Image</h1>
                        <p>
                            Displays an image with preview and tranformation options. For multiple image, see <Link href="/galleria">Galleria</Link>.
                        </p>
                    </div>
                </div>
                <DocActions github="image/index.js" />
            </div>

            {/* <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <Image src={`${contextPath}/images/galleria/galleria7.jpg`} alt="Image" width="250" />

                    <h5>Preview and Zoom</h5>
                    <Image src={`${contextPath}/images/galleria/galleria12.jpg`} alt="Image" width="250" preview />

                    <h5>Thumbnail</h5>
                    <Image src={`${contextPath}/images/galleria/galleria14s.jpg`} zoomSrc={`${contextPath}/images/galleria/galleria14.jpg`} alt="Image" width="80" height="60" preview />
                </div>
            </div>

            <ImageDoc></ImageDoc> */}

            <div className="content-section doc button-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ImageDemo;
