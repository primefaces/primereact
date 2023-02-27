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

    return <DocComponent title="React Carousel Component" header="Carousel" description="Carousel is a content slider featuring various customization options." componentDocs={docs} apiDocs={['Carousel']} className="carousel-demo" />;
};

export default CarouselDemo;
