import { DocComponent } from '../../../components/doc/common/doccomponent';
import { CounterPreviousDoc } from '../../../components/doc/hooks/useprevious/counterpreviousdoc';
import { ImportDoc } from '../../../components/doc/hooks/useprevious/importdoc';
import { InputPreviousDoc } from '../../../components/doc/hooks/useprevious/inputpreviousdoc';

const CounterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'input',
            label: 'Input',
            component: InputPreviousDoc
        },
        {
            id: 'counter',
            label: 'Counter',
            component: CounterPreviousDoc
        }
    ];

    return <DocComponent title="React usePrevious Hook" header="usePrevious" description="" componentDocs={docs} apiDocs={[{ name: 'usePrevious', pathname: '/functions/hooks.usePrevious.html' }]} />;
};

export default CounterDemo;
