'use client';
import type { CheckboxGroupChangeEvent } from '@primereact/types/shared/checkboxgroup';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';
import { Check } from '@primeicons/react/check';

export default function BasicDemo() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup
                defaultValue={['Cheese']}
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="gap-4 flex-wrap"
            >
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="cheese" value="Cheese">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="cheese">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="mushroom" value="Mushroom">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="mushroom">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="pepper" value="Pepper">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="pepper">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="onion" value="Onion">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor="onion">Onion</Label>
                </div>
            </CheckboxGroup>
        </div>
    );
}
