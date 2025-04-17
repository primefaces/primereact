/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { Terminal } from 'primereact/terminal';\nimport TerminalService from 'primereact/terminalservice';\nimport * as React from 'react';\n\nexport default function BasicDemo() {\n    const commandHandler = (text: unknown): void => {\n        if (typeof text !== 'string') return;\n\n        let response: string | number | null;\n        const argsIndex: number = text.indexOf(' ');\n        const command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;\n\n        switch (command) {\n            case 'date':\n                response = 'Today is ' + new Date().toDateString();\n                break;\n\n            case 'greet':\n                response = 'Hola ' + text.substring(argsIndex + 1) + '!';\n                break;\n\n            case 'random':\n                response = Math.floor(Math.random() * 100);\n                break;\n\n            case 'clear':\n                response = null;\n                break;\n\n            default:\n                response = 'Unknown command: ' + command;\n                break;\n        }\n\n        if (response) {\n            TerminalService.emit('response', response);\n        } else {\n            TerminalService.emit('clear');\n        }\n    };\n\n    React.useEffect(() => {\n        TerminalService.on('command', commandHandler);\n\n        return () => {\n            TerminalService.off('command', commandHandler);\n        };\n    }, []);\n    return (\n        <div className=\"card\">\n            <p>\n                Enter &quot;<strong>date</strong>&quot; to display the current date, &quot;<strong>greet {'{0}'}</strong>&quot; for a message, &quot;<strong>random</strong>&quot; to get a random number and &quot;<strong>clear</strong>&quot; to clear\n                all commands.\n            </p>\n            <Terminal prompt=\"primereact $\" aria-label=\"PrimeReact Terminal Service\">\n                <Terminal.WelcomeMessage>Welcome to PrimeReact</Terminal.WelcomeMessage>\n            </Terminal>\n        </div>\n    );\n}\n"
};
