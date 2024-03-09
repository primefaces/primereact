import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { useState } from 'react';

export function DynamicDoc(props) {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked) _selectedCategories.push(e.value);
        else _selectedCategories = _selectedCategories.filter((category) => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    const code = {
        basic: `
{categories.map((category) => {
    return (
        <div key={category.key} className="flex align-items-center">
            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
            <label htmlFor={category.key} className="ml-2">{category.name}</label>
        </div>
    );
})}
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function DynamicDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

interface Category {
    name: string; 
    key: string;
}

export default function DynamicDemo() {
    const categories: Category[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([categories[1]]);

    const onCategoryChange = (e: CheckboxChangeEvent) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Checkboxes can be generated using a list of values.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-3">
                    {categories.map((category) => {
                        return (
                            <div key={category.key} className="flex align-items-center">
                                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                                <label htmlFor={category.key} className="ml-2">
                                    {category.name}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
