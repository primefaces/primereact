/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { InputText } from 'primereact/inputtext';\nimport * as React from 'react';\n\nexport default function InvalidDemo() {\n    const [value1, setValue1] = React.useState('');\n    const [value2, setValue2] = React.useState('');\n    return (\n        <div className=\"card flex flex-wrap justify-center gap-4\">\n            <InputText value={value1} onValueChange={(e) => setValue1(e.value)} invalid={!value1} placeholder=\"Name\" />\n            <InputText value={value2} onValueChange={(e) => setValue2(e.value)} invalid={!value2} variant=\"filled\" placeholder=\"Name\" />\n        </div>\n    );\n}\n"
};
