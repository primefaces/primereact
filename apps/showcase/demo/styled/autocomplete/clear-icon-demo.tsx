'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { TimesIcon } from '@primereact/icons';
import * as React from 'react';

interface Recipe {
    id: number;
    name: string;
    cuisine: string;
    time: string;
}

const recipes: Recipe[] = [
    { id: 1, name: 'Spaghetti Carbonara', cuisine: 'Italian', time: '30 min' },
    { id: 2, name: 'Chicken Tikka Masala', cuisine: 'Indian', time: '45 min' },
    { id: 3, name: 'Beef Tacos', cuisine: 'Mexican', time: '25 min' },
    { id: 4, name: 'Pad Thai', cuisine: 'Thai', time: '35 min' },
    { id: 5, name: 'Caesar Salad', cuisine: 'American', time: '15 min' },
    { id: 6, name: 'Sushi Roll', cuisine: 'Japanese', time: '50 min' },
    { id: 7, name: 'Pho', cuisine: 'Vietnamese', time: '40 min' },
    { id: 8, name: 'Kebab', cuisine: 'Turkish', time: '90 min' }
];

export default function ClearIconDemo() {
    const [filteredRecipes, setFilteredRecipes] = React.useState<Recipe[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredRecipes(
            query
                ? recipes.filter((recipe) => recipe.name.toLowerCase().includes(query) || recipe.cuisine.toLowerCase().includes(query))
                : [...recipes]
        );
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredRecipes} optionKey="id" optionLabel="name" onComplete={search} inputClassName="w-64">
                <AutoComplete.Input placeholder="Search recipes..." />

                <AutoComplete.ClearIcon>
                    <TimesIcon className="align-text-top!" />
                </AutoComplete.ClearIcon>

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }}>
                            {filteredRecipes.map((recipe, index) => (
                                <AutoComplete.Option key={recipe.id} index={index} uKey={String(recipe.id)}>
                                    <div className="flex flex-col">
                                        <span className="font-medium">{recipe.name}</span>
                                        <span className="text-muted-color text-sm">
                                            {recipe.cuisine} · {recipe.time}
                                        </span>
                                    </div>
                                </AutoComplete.Option>
                            ))}
                        </AutoComplete.Options>
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
