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
                    <Label htmlFor="ingredient1">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient2" name="pizza" value="mushroom" />
                    <Label htmlFor="ingredient2">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient3" name="pizza" value="pepper" />
                    <Label htmlFor="ingredient3">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient4" name="pizza" value="onion" />
                    <Label htmlFor="ingredient4">Onion</Label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
