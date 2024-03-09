import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
import { useState } from 'react';

export function PTDoc(props) {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    const code = {
        basic: `
<RadioButton
    inputId={category.key}
    name="category"
    value={category}
    onChange={(e) => setSelectedCategory(e.value)}
    checked={selectedCategory.key === category.key}
    pt={{
        input: {
            className: selectedCategory.key === category.key ? 'bg-orange-500 border-orange-500' : undefined
        }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function PTDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);


    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton
                                inputId={category.key}
                                name="category"
                                value={category}
                                onChange={(e) => setSelectedCategory(e.value)}
                                checked={selectedCategory.key === category.key}
                                pt={{
                                    input: {
                                        className: selectedCategory.key === category.key ? 'bg-orange-500 border-orange-500' : undefined
                                    }
                                }}
                            />
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
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

interface Category {
    name: string;
    key: string;
}

export default function PTDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[1]);


    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton
                                inputId={category.key}
                                name="category"
                                value={category}
                                onChange={(e) => setSelectedCategory(e.value)}
                                checked={selectedCategory.key === category.key}
                                pt={{
                                    input: {
                                        className: selectedCategory.key === category.key ? 'bg-orange-500 border-orange-500' : undefined
                                    }
                                }}
                            />
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
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-3">
                    {categories.map((category) => {
                        return (
                            <div key={category.key} className="flex align-items-center">
                                <RadioButton
                                    inputId={category.key}
                                    name="category"
                                    value={category}
                                    onChange={(e) => setSelectedCategory(e.value)}
                                    checked={selectedCategory.key === category.key}
                                    pt={{
                                        input: {
                                            className: selectedCategory.key === category.key ? 'bg-orange-500 border-orange-500' : undefined
                                        }
                                    }}
                                />
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
