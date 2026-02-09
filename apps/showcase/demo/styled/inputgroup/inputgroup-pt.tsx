import { Clock } from '@primeicons/react';
import { StarFill } from '@primeicons/react/star-fill';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function InputGroupPTDemo() {
    return (
        <div className="flex justify-center">
            <InputGroup.Root className="sm:!w-96">
                <InputGroup.Addon>
                    <Clock />
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <StarFill></StarFill>
                </InputGroup.Addon>
                <InputText placeholder="Price" />
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
