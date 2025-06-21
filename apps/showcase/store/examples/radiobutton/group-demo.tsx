'use client';
import type { RadioButtonGroupValueChangeEvent } from '@primereact/types/shared/radiobutton';
import { RadioButton } from 'primereact/radiobutton';
import * as React from 'react';

export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="card flex items-center justify-center">
            <RadioButton.Group className="flex flex-wrap gap-4" value={ingredient} onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient1" name="pizza" value="cheese" />
                    <label htmlFor="ingredient1">Cheese</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient2" name="pizza" value="mushroom" />
                    <label htmlFor="ingredient2">Mushroom</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient3" name="pizza" value="pepper" />
                    <label htmlFor="ingredient3">Pepper</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient4" name="pizza" value="onion" />
                    <label htmlFor="ingredient4">Onion</label>
                </div>
            </RadioButton.Group>
        </div>
    );
}
