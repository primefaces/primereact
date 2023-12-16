import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useintersectionobserver/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useintersectionobserver/importdoc';
import { ThresholdDoc } from '@/components/doc/hooks/useintersectionobserver/thresholddoc';

const IntersectionObserverDemo = () => {
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
            id: 'threshold',
            label: 'Threshold',
            component: ThresholdDoc
        }
    ];

    return (
        <DocComponent
            title="React useIntersectionObserver Hook"
            header="useIntersectionObserver"
            description="Executes a callback when an element gets into the viewport of its parent."
            componentDocs={docs}
            apiDocs={['hooks.functions.useIntersectionObserver']}
        />
    );
};

export default IntersectionObserverDemo;
