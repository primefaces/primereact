import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
import { useState } from 'react';

export function DynamicDoc(props) {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    const code = {
        basic: `
{categories.map((category) => {
    return (
        <div key={category.key} className="flex align-items-center">
            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
            <label htmlFor={category.key} className="ml-2">{category.name}</label>
        </div>
    );
})}
        `,
        javascript: `
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function DynamicDemo() {
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
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

interface Category {
    name: string;
    key: string;
}

export default function DynamicDemo() {
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
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e: RadioButtonChangeEvent) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>RadioButtons can be generated using a list of values.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-3">
                    {categories.map((category) => {
                        return (
                            <div key={category.key} className="flex align-items-center">
                                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
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
