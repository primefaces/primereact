import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/useintersectionobserver/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/useintersectionobserver/importdoc';

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
        }
    ];

    return <DocComponent title="React useIntersectionObserver Hook" header="useIntersectionObserver" description="" componentDocs={docs} apiDocs={[{ name: 'useIntersectionObserver', pathname: '/functions/hooks.useIntersectionObserver.html' }]} />;
};

export default IntersectionObserverDemo;
