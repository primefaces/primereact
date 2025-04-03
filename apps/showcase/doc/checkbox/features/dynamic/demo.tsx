import { useCheckboxChangeEvent } from '@primereact/types/shared/checkbox';
import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';

export default function DynamicDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    const [selectedCategories, setSelectedCategories] = React.useState([categories[0]]);

    const isChecked = (value: { key: string }) => {
        return selectedCategories.some((category) => category.key === value.key);
    };

    const onCategoryChange = (event: useCheckboxChangeEvent) => {
        const { value } = event;
        let selectedValues = [...selectedCategories];

        if (event.checked) {
            selectedValues.push(value);
        } else {
            selectedValues = selectedValues.filter((val) => val.key !== value.key);
        }

        setSelectedCategories(selectedValues);
    };

    return (
        <div className="card flex justify-center">
            <div className="flex flex-col gap-4">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex items-center gap-2">
                            <Checkbox inputId={category.key} name="category" value={category} checked={isChecked(category)} onCheckedChange={onCategoryChange} />
                            <label htmlFor={category.key}>{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
