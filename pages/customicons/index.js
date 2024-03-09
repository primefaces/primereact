import { DocComponent } from '@/components/doc/common/doccomponent';
import { FontAwesomeDoc } from '@/components/doc/customicons/fontawesomedoc';
import { ImageDoc } from '@/components/doc/customicons/imagedoc';
import { MaterialDoc } from '@/components/doc/customicons/materialdoc';
import { SVGDoc } from '@/components/doc/customicons/svgdoc';

const ContextMenuDemo = () => {
    const docs = [
        {
            id: 'material',
            label: 'Material',
            component: MaterialDoc
        },
        {
            id: 'fontawesome',
            label: 'Font Awesome',
            component: FontAwesomeDoc
        },
        {
            id: 'svg',
            label: 'SVG',
            component: SVGDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        }
    ];

    return (
        <DocComponent
            title="Custom Icons - PrimeReact"
            header="Custom Icons"
            description="PrimeReact components can be used with any icon library using the templating features. Icons are passed the <i>iconProps</i> of the original icon and the <i>props</i> of the component."
            componentDocs={docs}
            hideTabMenu
        />
    );
};

export default ContextMenuDemo;
