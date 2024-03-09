import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/usemounteffect/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/usemounteffect/importdoc';

const MountEffectDemo = () => {
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

    return <DocComponent title="React useMountEffect Hook" header="useMountEffect" description="Executes a given callback when component is mounted." componentDocs={docs} apiDocs={['hooks.functions.useMountEffect']} />;
};

export default MountEffectDemo;
