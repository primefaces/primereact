/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { ProgressBar } from 'primereact/progressbar';\nimport * as React from 'react';\n\nexport default function DynamicDemo() {\n    const [value, setValue] = React.useState(0);\n    const interval = React.useRef<NodeJS.Timeout | undefined>(undefined);\n\n    React.useEffect(() => {\n        interval.current = setInterval(() => {\n            setValue((prevValue) => {\n                const newValue = prevValue + Math.floor(Math.random() * 10) + 1;\n\n                if (newValue >= 100) {\n                    clearInterval(interval.current);\n                    return 100;\n                }\n\n                return newValue;\n            });\n        }, 2000);\n\n        return () => {\n            if (interval.current) {\n                clearInterval(interval.current);\n                interval.current = undefined;\n            }\n        };\n    }, []);\n    return (\n        <div className=\"card\">\n            <ProgressBar value={value}>\n                <ProgressBar.Label>{value}%</ProgressBar.Label>\n            </ProgressBar>\n        </div>\n    );\n}\n"
};
