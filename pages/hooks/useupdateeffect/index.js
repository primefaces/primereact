import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/useupdateeffect/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/useupdateeffect/importdoc';

const CounterDemo = () => {
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

    return (
        <DocComponent
            title="React useUpdateEffect Hook"
            header="useUpdateEffect"
            description="Executes a given callback when a stateful property is updated."
            componentDocs={docs}
            apiDocs={[{ name: 'useUpdateEffect', pathname: '/functions/hooks.useUpdateEffect.html' }]}
        />
    );
};

export default CounterDemo;
