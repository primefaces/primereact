/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { BlockUI } from 'primereact/blockui';\nimport { Panel } from 'primereact/panel';\nimport * as React from 'react';\n\nexport default function BasicDemo() {\n    const [blocked, setBlocked] = React.useState(false);\n\n    return (\n        <div className=\"card\">\n            <div className=\"mb-4\">\n                <button className=\"mr-2\" onClick={() => setBlocked(true)}>\n                    Block\n                </button>\n                <button onClick={() => setBlocked(false)}>Unblock</button>\n            </div>\n            <BlockUI blocked={blocked}>\n                <BlockUI.Mask />\n                <Panel>\n                    <Panel.Header>Basic</Panel.Header>\n                    <Panel.Content>\n                        <p className=\"m-0\">\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n                            laborum.\n                        </p>\n                    </Panel.Content>\n                </Panel>\n            </BlockUI>\n        </div>\n    );\n}\n"
};
