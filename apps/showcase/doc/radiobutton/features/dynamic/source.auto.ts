/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { RadioButton } from 'primereact/radiobutton';\nimport { RadioButtonGroup } from 'primereact/radiobutton/group';\nimport * as React from 'react';\nexport default function DynamicDemo() {\n    const [ingredient, setIngredient] = React.useState();\n    const categories = [\n        { name: 'Accounting', key: 'A' },\n        { name: 'Marketing', key: 'M' },\n        { name: 'Production', key: 'P' },\n        { name: 'Research', key: 'R' }\n    ];\n    return (\n        <div className=\"card flex items-center justify-center\">\n            <RadioButtonGroup className=\"flex flex-wrap gap-4\" value={ingredient} onValueChange={(e) => setIngredient(e.value)}>\n                {categories.map((item) => (\n                    <div key={item.key} className=\"flex items-center gap-2\">\n                        <RadioButton inputId={item.key} name=\"pizza\" value={item.key} />\n                        <label htmlFor={item.key}>{item.name}</label>\n                    </div>\n                ))}\n            </RadioButtonGroup>\n        </div>\n    );\n}\n"
};
