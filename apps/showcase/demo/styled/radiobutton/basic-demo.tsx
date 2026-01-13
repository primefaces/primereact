'use client';

import type { RadioButtonGroupValueChangeEvent } from '@primereact/types/shared/radiobutton';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import * as React from 'react';

export default function BasicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButton.Group
                className="flex flex-col gap-2"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-strawberry" name="fruit" value="strawberry" />
                    <Label.Root htmlFor="ingredient-strawberry">🍓 Strawberry</Label.Root>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-banana" name="fruit" value="banana" />
                    <Label.Root htmlFor="ingredient-banana">🍌 Banana</Label.Root>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient-watermelon" name="fruit" value="watermelon" />
                    <Label.Root htmlFor="ingredient-watermelon">🍉 Watermelon</Label.Root>
                </div>
            </RadioButton.Group>
        </div>
    );
}
