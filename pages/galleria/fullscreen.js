import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { WithThumbnailsDoc } from '../../components/doc/galleria/fullscreen/withthumbnails';
import { WithoutThumbnailsDoc } from '../../components/doc/galleria/fullscreen/withoutthumbnails';
import { CustomContentDoc } from '../../components/doc/galleria/fullscreen/custom';

const GalleriaFullScreenDemo = () => {
    const docs = [
        {
            id: 'custom',
            label: 'With Thumbnails',
            component: WithThumbnailsDoc
        },
        {
            id: 'custom',
            label: 'Without Thumbnails',
            component: WithoutThumbnailsDoc
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: CustomContentDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - FullScreen</title>
                <meta name="description" content="In fullscreen mode content covers the whole page over a mask." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>FullScreen</span>
                    </h1>
                    <p>In fullscreen mode content covers the whole page over a mask.</p>
                </div>

                <DocActions github="galleria/fullscreen.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaFullScreenDemo;
