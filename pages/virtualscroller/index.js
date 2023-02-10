import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/virtualscroller/accessibilitydoc';
import { BasicDoc } from '../../components/doc/virtualscroller/basicdoc';
import { ImportDoc } from '../../components/doc/virtualscroller/importdoc';
import { LazyDoc } from '../../components/doc/virtualscroller/lazydoc';
import { LoadingDoc } from '../../components/doc/virtualscroller/loadingdoc';
import { ScrollDelayDoc } from '../../components/doc/virtualscroller/scrolldelaydoc';
import { StyleDoc } from '../../components/doc/virtualscroller/styledoc';
import { TemplateDoc } from '../../components/doc/virtualscroller/templatedoc';

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
            id: 'scrolldelay',
            label: 'Scroll Delay',
            component: ScrollDelayDoc
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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

    return (
        <DocComponent
            title="React VirtualScroller Component"
            header="VirtualScroller"
            description="VirtualScroller is a performant approach to handle huge data efficiently."
            componentDocs={docs}
            apiDocs={[{ name: 'VirtualScroller', pathname: '/modules/virtualscroller.html' }]}
            className="virtualscroller-demo"
        />
    );
};

export default VirtualScrollerDemo;
