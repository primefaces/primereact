/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { BlockUI } from 'primereact/blockui';\nimport * as React from 'react';\n\nexport default function DocumentDemo() {\n    const [blocked, setBlocked] = React.useState(false);\n\n    React.useEffect(() => {\n        if (blocked) {\n            setTimeout(() => {\n                setBlocked(false);\n            }, 3000);\n        }\n    }, [blocked]);\n\n    return (\n        <div className=\"card\">\n            <button onClick={() => setBlocked(true)}>Block</button>\n            <BlockUI blocked={blocked} fullScreen>\n                <BlockUI.Mask />\n            </BlockUI>\n        </div>\n    );\n}\n"
};
