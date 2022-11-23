import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { CaptionDoc } from '../../components/doc/galleria/caption/default';

const GalleriaCaptionDemo = () => {
    const docs = [
        {
            id: 'default',
            label: 'Caption',
            component: CaptionDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Caption</title>
                <meta name="description" content="Caption displays a description for an item." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Caption</span>
                    </h1>
                    <p>Caption displays a description for an item.</p>
                </div>

                <DocActions github="galleria/caption.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaCaptionDemo;
