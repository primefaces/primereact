import { Checkbox } from '@primereact/ui/checkbox';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { RadioButton } from '@primereact/ui/radiobutton';
import { Check } from '@primeicons/react/check';

export default function CheckboxRadioDemo() {
    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputText placeholder="Price" />
                <InputGroup.Addon>
                    <RadioButton.Root>
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Checkbox.Root>
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Checkbox.Root>
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                </InputGroup.Addon>
                <InputText placeholder="Website" />
                <InputGroup.Addon>
                    <RadioButton.Root>
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
