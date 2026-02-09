import { Clock } from '@primeicons/react';
import { StarFill } from '@primeicons/react/star-fill';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputNumber } from '@primereact/ui/inputnumber';

export default function MultipleDemo() {
    return (
        <div className="max-w-sm mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <Clock />
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <StarFill></StarFill>
                </InputGroup.Addon>
                <InputNumber placeholder="Price" />
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
