/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { Checkbox } from 'primereact/checkbox';\nimport * as React from 'react';\n\nexport default function IndeterminateDemo() {\n    const [checked, setChecked] = React.useState(false);\n\n    return (\n        <div className=\"card flex justify-center\">\n            <Checkbox checked={checked} onCheckedChange={(e) => setChecked(e.checked)} indeterminate />\n        </div>\n    );\n}\n"
};
