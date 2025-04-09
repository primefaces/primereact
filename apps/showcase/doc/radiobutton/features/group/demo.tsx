import { RadioButton } from 'primereact/radiobutton';
import { RadioButtonGroup } from 'primereact/radiobutton/group';
import * as React from 'react';
export default function GroupDemo() {
    const [ingredient, setIngredient] = React.useState('Mushroom');
    return (
        <div className="card ">
            <RadioButtonGroup className="flex flex-wrap gap-2" defaultValue={'Cheese'} value={ingredient} onValueChange={(e) => setIngredient(e.value)}>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" variant="filled" invalid />
                    <label htmlFor="ingredient1">Cheese</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" size="large" disabled />
                    <label htmlFor="ingredient2">Mushroom</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" variant="outlined" />
                    <label htmlFor="ingredient3">Pepper</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" />
                    <label htmlFor="ingredient4">Onion</label>
                </div>
            </RadioButtonGroup>
        </div>
    );
}
