'use client';

import { CheckIcon } from '@primereact/icons';
import type { CheckboxGroupChangeEvent } from '@primereact/types/shared/checkboxgroup';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';

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
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label.Root htmlFor="cheese">Cheese</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="mushroom" value="Mushroom">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label.Root htmlFor="mushroom">Mushroom</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="pepper" value="Pepper">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label.Root htmlFor="pepper">Pepper</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="onion" value="Onion">
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label.Root htmlFor="onion">Onion</Label.Root>
                </div>
            </CheckboxGroup>
        </div>
    );
}
