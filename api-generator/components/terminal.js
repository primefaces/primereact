const TerminalProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'welcomeMessage',
        type: 'string',
        default: 'null',
        description: 'Initial text to display on terminal.'
    },
    {
        name: 'prompt',
        type: 'string',
        default: 'null',
        description: 'Prompt text for each command.'
    }
];

const TerminalEvents = [];

const TerminalStyles = [
    {
        name: 'p-terminal',
        description: 'Container element.'
    },
    {
        name: 'p-terminal-content',
        description: 'Content of terminal.'
    },
    {
        name: 'p-terminal-prompt',
        description: 'Prompt text.'
    },
    {
        name: 'p-terminal-response',
        description: 'Command response.'
    },
    {
        name: 'p-terminal-input',
        description: 'Input element to enter commands.'
    }
];

module.exports = {
    terminal: {
        name: 'Terminal',
        description: 'Terminal is a text based user interface.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/terminal',
        props: TerminalProps,
        events: TerminalEvents,
        styles: TerminalStyles
    }
};
