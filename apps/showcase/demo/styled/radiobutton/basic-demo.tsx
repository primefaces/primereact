'use client';

import type { RadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

export default function BasicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-col gap-2"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-strawberry" name="fruit" value="strawberry">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label.Root htmlFor="ingredient-strawberry">🍓 Strawberry</Label.Root>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-banana" name="fruit" value="banana">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label.Root htmlFor="ingredient-banana">🍌 Banana</Label.Root>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-watermelon" name="fruit" value="watermelon">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label.Root htmlFor="ingredient-watermelon">🍉 Watermelon</Label.Root>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
