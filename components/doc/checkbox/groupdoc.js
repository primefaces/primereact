import { useState } from "react";
import { Checkbox } from "../../lib/checkbox/Checkbox";
import { DocSectionText } from "../common/docsectiontext";
import { DocSectionCode } from "../common/docsectioncode";

export function GroupDoc(props) {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

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
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function GroupDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="flex flex-column gap-3">
            {categories.map((category) => {
                return (
                    <div key={category.key} className="flex align-items-center">
                        <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                        <label htmlFor={category.key} className="ml-2">{category.name}</label>
                    </div>
                );
            })}
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Checkbox } from "primereact/checkbox";

interface Category {
    name: string; 
    key: string;
}

export default function GroupDemo() {
    const categories: Category[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const onCategoryChange = (e: CheckboxChangeParams) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="flex flex-column gap-3">
            {categories.map((category) => {
                return (
                    <div key={category.key} className="flex align-items-center">
                        <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                        <label htmlFor={category.key} className="ml-2">{category.name}</label>
                    </div>
                );
            })}
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Multiple checkboxes can be generated and grouped using a list of values.
            </DocSectionText>
            <div className="card flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
            <DocSectionCode code={code} />
        </>
    )
}
