import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/carousel/importdoc';
import { BasicDoc } from '../../components/doc/carousel/basicdoc';
import { ApiDoc } from '../../components/doc/carousel/apidoc';
import { AccessibilityDoc } from '../../components/doc/carousel/accessibilitydoc';
import { StyleDoc } from '../../components/doc/carousel/styledoc';
import { CircularDoc } from '../../components/doc/carousel/circulardoc';
import { VerticalDoc } from '../../components/doc/carousel/verticaldoc';
import { NumScrollDoc } from '../../components/doc/carousel/numscrolldoc';
import { ResponsiveDoc } from '../../components/doc/carousel/responsivedoc';

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
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
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
