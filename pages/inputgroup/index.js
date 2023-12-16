import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/inputgroup/basicdoc';
import { ButtonDoc } from '@/components/doc/inputgroup/buttondoc';
import { CheckboxDoc } from '@/components/doc/inputgroup/checkboxdoc';
import { MultipleDoc } from '@/components/doc/inputgroup/multipledoc';

const InputGroupDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
        },
        {
            id: 'checkbox',
            label: 'Checkbox & RadioButton',
            component: CheckboxDoc
        }
    ];

    return <DocComponent title="React InputGroup Component" header="InputGroup" description="Text, icon, buttons and other content can be grouped next to an input." componentDocs={docs} />;
};

export default InputGroupDemo;
