'use client';
import { RadioButton, RadioButtonGroup } from '@/components/ui/radiobutton';
import type { RadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function BasicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                orientation="vertical"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient-strawberry" name="fruit" value="strawberry" />
                    <Label htmlFor="ingredient-strawberry">🍓 Strawberry</Label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient-banana" name="fruit" value="banana" />
                    <Label htmlFor="ingredient-banana">🍌 Banana</Label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient-watermelon" name="fruit" value="watermelon" />
                    <Label htmlFor="ingredient-watermelon">🍉 Watermelon</Label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
