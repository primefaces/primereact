import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ItemThumbnailsDoc } from '../../components/doc/galleria/navigator/itemthumbnails';
import { ItemWithoutThumbnailsDoc } from '../../components/doc/galleria/navigator/itemwithouthumbnails';
import { ItemHoverDoc } from '../../components/doc/galleria/navigator/hover';
import { IndicatorsDoc } from '../../components/doc/galleria/navigator/indicators';

const GalleriaNavigatorDemo = () => {
    const docs = [
        {
            id: 'itemthumbnails',
            label: 'Item Navigators and Thumbnails',
            component: ItemThumbnailsDoc
        },
        {
            id: 'itemwithouthumbnails',
            label: 'Item Navigators without Thumbnails',
            component: ItemWithoutThumbnailsDoc
        },
        {
            id: 'itemhover',
            label: 'Item Navigators on Hover',
            component: ItemHoverDoc
        },
        {
            id: 'indicators',
            label: 'Item Navigators and Indicators',
            component: IndicatorsDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Navigator</title>
                <meta name="description" content="Combining item navigators, thumbnails and indicators provide various UI alternatives." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Navigator</span>
                    </h1>
                    <p>Combining item navigators, thumbnails and indicators provide various UI alternatives.</p>
                </div>

                <DocActions github="galleria/navigator.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaNavigatorDemo;
