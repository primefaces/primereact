import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/virtualscroller/accessibilitydoc';
import { BasicDoc } from '@/components/doc/virtualscroller/basicdoc';
import { DelayDoc } from '@/components/doc/virtualscroller/delaydoc';
import { GridDoc } from '@/components/doc/virtualscroller/griddoc';
import { HorizontalDoc } from '@/components/doc/virtualscroller/horizontaldoc';
import { ImportDoc } from '@/components/doc/virtualscroller/importdoc';
import { LazyDoc } from '@/components/doc/virtualscroller/lazydoc';
import { LoadingDoc } from '@/components/doc/virtualscroller/loadingdoc';
import { PTDoc } from '@/components/doc/virtualscroller/pt/ptdoc';
import { Wireframe } from '@/components/doc/virtualscroller/pt/wireframe';
import { StyledDoc } from '@/components/doc/virtualscroller/theming/styleddoc';

const VirtualScrollerDemo = () => {
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
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'grid',
            label: 'Grid',
            component: GridDoc
        },
        {
            id: 'delay',
            label: 'Delay',
            component: DelayDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
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
            id: 'pt.virtualscroller.options',
            label: 'VirtualScroller PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        }
    ];

    return (
        <DocComponent
            title="React Virtual Scroller Component"
            header="VirtualScroller"
            description="VirtualScroller is a performant approach to render large amounts of data efficiently."
            componentDocs={docs}
            apiDocs={['VirtualScroller']}
            ptDocs={ptDocs}
            className="virtualscroller-demo"
            themingDocs={themingDocs}
        />
    );
};

export default VirtualScrollerDemo;
