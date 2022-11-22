import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ResponsiveDoc } from '../../components/doc/galleria/responsive/defaultdoc';

const GalleriaResponsiveDemo = () => {
    const docs = [
        {
            id: 'default',
            label: 'Responsive',
            component: ResponsiveDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Responsive</title>
                <meta name="description" content="Galleria responsiveness is defined with the responsiveOptions property." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Responsive</span>
                    </h1>
                    <p>
                        Galleria responsiveness is defined with the <b>responsiveOptions</b> property.
                    </p>
                </div>

                <DocActions github="galleria/responsive.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaResponsiveDemo;
