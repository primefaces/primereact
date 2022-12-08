const PasswordProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the input element.'
    },
    {
        name: 'promptLabel',
        type: 'string',
        default: 'Please enter a password',
        description: 'Text to prompt password entry.'
    },
    {
        name: 'weakLabel',
        type: 'string',
        default: 'Weak',
        description: 'Text for a weak password.'
    },
    {
        name: 'mediumLabel',
        type: 'string',
        default: 'Medium',
        description: 'Text for a medium password.'
    },
    {
        name: 'strongLabel',
        type: 'string',
        default: 'Strong',
        description: 'Text for a strong password.'
    },
    {
        name: 'mediumRegex',
        type: 'string',
        default: '{`^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).`}',
        description: 'Regex for a medium level password.'
    },
    {
        name: 'strongRegex',
        type: 'string',
        default: '{`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})`}',
        description: 'Regex for a strong level password.'
    },
    {
        name: 'feedback',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the strength indicator or not.'
    },
    {
        name: 'toggleMask',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show an icon to display the password as plain text.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Template of panel header if "feedback" is enabled.'
    },
    {
        name: 'content',
        type: 'any',
        default: 'null',
        description: 'Template of panel content if "feedback" is enabled.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Template of panel footer if "feedback" is enabled.'
    },
    {
        name: 'icon',
        type: 'any',
        default: 'null',
        description: 'Template of mask icon if "toggleMask" is enabled.'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    },
    {
        name: 'keyfilter',
        type: 'string/regex',
        default: 'null',
        description: 'Format definition of the keys to block.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'inputStyle',
        type: 'any',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the input field.'
    },
    {
        name: 'panelClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the overlay panel element.'
    },
    {
        name: 'panelStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the overlay panel element.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const PasswordEvents = [
    {
        name: 'onShow',
        description: 'Callback to invoke when overlay becomes visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay becomes hidden.',
        arguments: []
    }
];

const PasswordStyles = [
    { name: 'p-password', description: 'Container element' },
    { name: 'p-password-input', description: 'Input Element' },
    {
        name: 'p-password-panel',
        description: 'Container of password panel'
    },
    {
        name: 'p-password-meter',
        description: 'Meter element of password strength'
    },
    { name: 'p-password-info', description: 'Text to display strength' }
];

module.exports = {
    password: {
        name: 'Password',
        description: 'Password displays strength indicator for password fields.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/password',
        props: PasswordProps,
        events: PasswordEvents,
        styles: PasswordStyles
    }
};
