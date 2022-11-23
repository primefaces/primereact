import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { AutoPlayDemoDoc } from '../../components/doc/galleria/autoplay/default';

const GalleriaAutoPlayDemo = () => {
    const docs = [
        {
            id: 'autoplay',
            label: 'AutoPlay',
            component: AutoPlayDemoDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - AutoPlay</title>
                <meta name="description" content="AutoPlay mode is used to implement slideshows." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>AutoPlay</span>
                    </h1>
                    <p>AutoPlay mode is used to implement slideshows.</p>
                </div>

                <DocActions github="galleria/autoplay.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaAutoPlayDemo;
