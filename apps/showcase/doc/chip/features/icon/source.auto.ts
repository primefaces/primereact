/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { Chip } from 'primereact/chip';\n\nexport default function IconDemo() {\n    return (\n        <div className=\"card flex flex-wrap gap-2\">\n            <Chip>\n                <Chip.Icon className=\"pi pi-apple\" />\n                <Chip.Label>Apple</Chip.Label>\n            </Chip>\n            <Chip>\n                <Chip.Icon className=\"pi pi-facebook\" />\n                <Chip.Label>Facebook</Chip.Label>\n            </Chip>\n            <Chip>\n                <Chip.Icon className=\"pi pi-google\" />\n                <Chip.Label>Google</Chip.Label>\n            </Chip>\n            <Chip>\n                <Chip.Icon className=\"pi pi-microsoft\" />\n                <Chip.Label>Microsoft</Chip.Label>\n                <Chip.RemoveIcon />\n            </Chip>\n            <Chip>\n                <Chip.Icon className=\"pi pi-github\" />\n                <Chip.Label>GitHub</Chip.Label>\n                <Chip.RemoveIcon asChild>\n                    <i className=\"pi pi-minus-circle\" />\n                </Chip.RemoveIcon>\n            </Chip>\n        </div>\n    );\n}\n"
};
