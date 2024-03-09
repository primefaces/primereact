import { DocComponent } from '@/components/doc/common/doccomponent';
import { AnimationDoc } from '@/components/doc/styleclass/animationdoc';
import { ImportDoc } from '@/components/doc/styleclass/importdoc';
import { ToggleClassDoc } from '@/components/doc/styleclass/toggleclassdoc';

const StyleClassDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'toggleclass',
            label: 'Toggle Class',
            component: ToggleClassDoc
        },
        {
            id: 'animations',
            label: 'Animation',
            component: AnimationDoc
        }
    ];

    return (
        <DocComponent
            title="React StyleClass Component"
            header="StyleClass"
            description="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element."
            componentDocs={docs}
            apiDocs={['StyleClass']}
        />
    );
};

export default StyleClassDemo;
