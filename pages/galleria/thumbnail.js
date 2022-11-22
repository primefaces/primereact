import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { PositionedRightDoc } from '../../components/doc/galleria/thumbnail/right';
import { PositionedTopDoc } from '../../components/doc/galleria/thumbnail/top';
import { PositionedBottomDoc } from '../../components/doc/galleria/thumbnail/bottom';
import { PositionedLeftDoc } from '../../components/doc/galleria/thumbnail/left';

const GalleriaThumbnailDemo = () => {
    const docs = [
        {
            id: 'positionbottom',
            label: 'Positioned at Bottom',
            component: PositionedBottomDoc
        },
        {
            id: 'positionleft',
            label: 'Positioned at Left',
            component: PositionedLeftDoc
        },
        {
            id: 'positionright',
            label: 'Positioned at Right',
            component: PositionedRightDoc
        },
        {
            id: 'positiontop',
            label: 'Positioned at Top',
            component: PositionedTopDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Thumbnail</title>
                <meta name="description" content="Thumbnails represent a smaller version of the actual content." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Thumbnail</span>
                    </h1>
                    <p>Thumbnails represent a smaller version of the actual content.</p>
                </div>

                <DocActions github="galleria/thumbnail.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaThumbnailDemo;
