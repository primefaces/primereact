import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { useState } from 'react';

export function GroupDoc(props) {
    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked) _ingredients.push(e.value);
        else _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    };

    const code = {
        basic: `
<div className="flex flex-wrap justify-content-center gap-3">
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
        <label htmlFor="ingredient1" className="ml-2">Cheese</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
        <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
        <label htmlFor="ingredient3" className="ml-2">Pepper</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
        <label htmlFor="ingredient4" className="ml-2">Onion</label>
    </div>
</div>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function GroupDemo() {
    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                <label htmlFor="ingredient3" className="ml-2">Pepper</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                <label htmlFor="ingredient4" className="ml-2">Onion</label>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function GroupDemo() {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const onIngredientsChange = (e: CheckboxChangeEvent) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                <label htmlFor="ingredient3" className="ml-2">Pepper</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                <label htmlFor="ingredient4" className="ml-2">Onion</label>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Multiple checkboxes can be grouped together.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <div className="flex align-items-center">
                    <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                    <label htmlFor="ingredient1" className="ml-2">
                        Cheese
                    </label>
                </div>
                <div className="flex align-items-center">
                    <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                    <label htmlFor="ingredient2" className="ml-2">
                        Mushroom
                    </label>
                </div>
                <div className="flex align-items-center">
                    <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                    <label htmlFor="ingredient3" className="ml-2">
                        Pepper
                    </label>
                </div>
                <div className="flex align-items-center">
                    <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                    <label htmlFor="ingredient4" className="ml-2">
                        Onion
                    </label>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
