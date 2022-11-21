import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/carousel/importdoc';
import { BasicDoc } from '../../components/doc/carousel/basicdoc';
import { ApiDoc } from '../../components/doc/carousel/apidoc';
import { CircularDoc } from '../../components/doc/carousel/circulardoc';
import { VerticalDoc } from '../../components/doc/carousel/verticaldoc';
import { NumScrollDoc } from '../../components/doc/carousel/numscrolldoc';
import { ResponsiveOptionsDoc } from '../../components/doc/carousel/responsivedoc';

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
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'numscroll',
            label: 'NumScroll',
            component: NumScrollDoc
        },
        {
            id: 'responsive',
            label: 'ResponsiveOptions',
            component: ResponsiveOptionsDoc
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
                <title>React Carousel Component</title>
                <meta name="description" content="Carousel is a content slider featuring various customization options." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Carousel</h1>
                    <p>Carousel is a content slider featuring various customization options.</p>
                </div>
                <DocActions github="carousel/index.js" />
            </div>

            <div className="content-section doc carousel-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CarouselDemo;
