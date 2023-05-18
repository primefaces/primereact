import { ComponentBase } from '../componentbase/ComponentBase';

export const TerminalBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Terminal',
        id: null,
        style: null,
        className: null,
        welcomeMessage: null,
        prompt: null,
        children: undefined
    }
});
