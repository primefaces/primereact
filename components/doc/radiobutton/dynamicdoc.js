import { useState } from "react";
import { RadioButton } from "../../lib/radiobutton/RadioButton";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

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
<div className="flex flex-col gap-3">
    {categories.map((category) => {
        return (
            <div key={category.key} className="flex align-items-center">
                <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                <label htmlFor={category.key} className="ml-2">{category.name}</label>
            </div>
        );
    })}
</div>
        `,
        javascript: `
import { useState } from "react";
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
        <div className="flex flex-col gap-3">
            {categories.map((category) => {
                return (
                    <div key={category.key} className="flex align-items-center">
                        <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                        <label htmlFor={category.key} className="ml-2">{category.name}</label>
                    </div>
                );
            })}
        </div>
    );
}
        `,
        typescript: `
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

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
        <div className="flex flex-col gap-3">
            {categories.map((category) => {
                return (
                    <div key={category.key} className="flex align-items-center">
                        <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                        <label htmlFor={category.key} className="ml-2">{category.name}</label>
                    </div>
                );
            })}
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                RadioButtons can be generated using a list of values.
            </DocSectionText>
            <div className="card flex flex-col gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
