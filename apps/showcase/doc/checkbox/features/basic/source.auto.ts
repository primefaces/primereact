/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { useCheckbox } from '@primereact/headless/checkbox';\nimport { Checkbox } from 'primereact/checkbox';\nimport * as React from 'react';\n\nexport default function BasicDemo() {\n    const [checked, setChecked] = React.useState(false);\n    const { state, onChange } = useCheckbox({ binary: true });\n\n    return (\n        <div className=\"card flex justify-center flex-col gap-3\">\n            <Checkbox checked={checked} onChange={(e) => setChecked(e.checked)} binary={true} size=\"large\" />\n\n            <div className=\"p-checkbox p-component p-checkbox-lg p-inputfield-lg\">\n                <input type=\"checkbox\" className=\"p-checkbox-input\" checked={state.checked} onChange={onChange} />\n                <div className=\"p-checkbox-box\">{state.checked && <i className=\"pi pi-check\" />}</div>\n            </div>\n        </div>\n    );\n}\n"
};
