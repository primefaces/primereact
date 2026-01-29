'use client';
import type { RadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-wrap gap-4"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient1" name="pizza" value="cheese">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient1">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient2" name="pizza" value="mushroom">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient2">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient3" name="pizza" value="pepper">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient3">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton.Root inputId="ingredient4" name="pizza" value="onion">
                        <RadioButton.Box>
                            <RadioButton.Indicator />
                        </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor="ingredient4">Onion</Label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
