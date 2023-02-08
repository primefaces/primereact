import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/usemounteffect/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/usemounteffect/importdoc';

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
            title="React useMountEffect Hook"
            header="useMountEffect"
            description="Executes a given callback when component is mounted."
            componentDocs={docs}
            apiDocs={[{ name: 'useMountEffect', pathname: '/functions/hooks.useMountEffect.html' }]}
        />
    );
};

export default CounterDemo;
