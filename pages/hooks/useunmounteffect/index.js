import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/hooks/useunmounteffect/basicdoc';
import { ImportDoc } from '@/components/doc/hooks/useunmounteffect/importdoc';

const UnmountEffectDemo = () => {
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

    return <DocComponent title="React useUnmountEffect Hook" header="useUnmountEffect" description="Executes a given callback when component is unmounted." componentDocs={docs} apiDocs={['hooks.functions.useUnmountEffect']} />;
};

export default UnmountEffectDemo;
