import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/carousel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/carousel/basicdoc';
import { CircularDoc } from '../../components/doc/carousel/circulardoc';
import { ImportDoc } from '../../components/doc/carousel/importdoc';
import { NumScrollDoc } from '../../components/doc/carousel/numscrolldoc';
import { ResponsiveDoc } from '../../components/doc/carousel/responsivedoc';
import { StyleDoc } from '../../components/doc/carousel/styledoc';
import { VerticalDoc } from '../../components/doc/carousel/verticaldoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const CarouselDemo = () => {
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
            id: 'circular',
            label: 'Circular',
            component: CircularDoc
        },
        {
            id: 'numscroll',
            label: 'Num Scroll',
            component: NumScrollDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
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
            doc: [{ name: 'Carousel', pathname: '/modules/carousel.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Carousel Component</title>
                <meta name="description" content="Carousel is a content slider featuring various customization options." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Carousel</h1>
                        <p>Carousel is a content slider featuring various customization options.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CarouselDemo;
