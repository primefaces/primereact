import { ComponentBase } from '../componentbase/ComponentBase';

const classes = {
    root: 'p-terminal p-component',
    content: 'p-terminal-content',
    container: 'p-terminal-prompt-container',
    command: 'p-terminal-command',
    commandText: 'p-terminal-input',
    prompt: 'p-terminal-prompt',
    response: 'p-terminal-response'
};

const styles = `
@layer primereact {
    .p-terminal {
        height: 18rem;
        overflow: auto;
    }
    
    .p-terminal-prompt-container {
        display: flex;
        align-items: center;
    }
    
    .p-terminal-input {
        flex: 1 1 auto;
        border: 0 none;
        background-color: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
    }
    
    .p-terminal-input::-ms-clear {
        display: none;
    }        
}
`;

export const TerminalBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Terminal',
        id: null,
        style: null,
        className: null,
        welcomeMessage: null,
        prompt: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
