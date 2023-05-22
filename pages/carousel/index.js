import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/carousel/pt/ptdoc';
import { Wireframe } from '../../components/doc/carousel/pt/wireframe';
import { AccessibilityDoc } from '../../components/doc/carousel/accessibilitydoc';
import { BasicDoc } from '../../components/doc/carousel/basicdoc';
import { CircularDoc } from '../../components/doc/carousel/circulardoc';
import { ImportDoc } from '../../components/doc/carousel/importdoc';
import { NumScrollDoc } from '../../components/doc/carousel/numscrolldoc';
import { ResponsiveDoc } from '../../components/doc/carousel/responsivedoc';
import { StyleDoc } from '../../components/doc/carousel/styledoc';
import { VerticalDoc } from '../../components/doc/carousel/verticaldoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

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
        }
    ];
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.carousel.options',
            label: 'Carousel PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Carousel Component" header="Carousel" description="Carousel is a content slider featuring various customization options." className="carousel-demo" componentDocs={docs} apiDocs={['Carousel']} ptDocs={ptDocs} />;
};

export default CarouselDemo;
