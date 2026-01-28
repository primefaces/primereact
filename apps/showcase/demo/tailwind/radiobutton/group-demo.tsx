'use client';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup value={ingredient} onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient1" name="pizza" value="cheese" />
                    <Label.Root htmlFor="ingredient1">Cheese</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient2" name="pizza" value="mushroom" />
                    <Label.Root htmlFor="ingredient2">Mushroom</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient3" name="pizza" value="pepper" />
                    <Label.Root htmlFor="ingredient3">Pepper</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient4" name="pizza" value="onion" />
                    <Label.Root htmlFor="ingredient4">Onion</Label.Root>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
