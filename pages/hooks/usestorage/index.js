import { DocComponent } from '../../../components/doc/common/doccomponent';
import { CounterDoc } from '../../../components/doc/hooks/usestorage/counterstorage';
import { ImportDoc } from '../../../components/doc/hooks/usestorage/importdoc';

const CounterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },

        {
            id: 'counter',
            label: 'Counter',
            component: CounterDoc
        }
    ];

    return <DocComponent title="React useClickOutside Hook" header="useClickOutside" description="" componentDocs={docs} apiDocs={[{ name: 'useStorage', pathname: '/functions/hooks.useStorage.html' }]} />;
};

export default CounterDemo;
