import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ProgrammaticDoc } from '../../components/doc/galleria/programmatic/default';

const GalleriaProgrammaticDemo = () => {
    const docs = [
        {
            id: 'default',
            label: 'Galeria Programmatic',
            component: ProgrammaticDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Programmatic</title>
                <meta name="description" content="Galleria can be controlled programmatically using the activeIndex property." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Programmatic</span>
                    </h1>
                    <p>
                        Galleria can be controlled programmatically using the <b>activeIndex</b> property.
                    </p>
                </div>

                <DocActions github="galleria/programmatic.js" />
            </div>
            <div className="content-section doc button-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaProgrammaticDemo;
