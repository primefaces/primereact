const StyleClassProps = [
    {
        name: 'selector',
        type: 'string',
        default: 'null',
        description: 'Selector to define the target element.'
    },
    {
        name: 'nodeRef',
        type: 'any',
        default: 'null',
        description: 'A React reference to DOM element that need to specify.'
    },
    {
        name: 'enterClassName',
        type: 'string',
        default: 'null',
        description: 'Style class to add when item begins to get displayed.'
    },
    {
        name: 'enterActiveClassName	',
        type: 'string',
        default: 'null',
        description: 'Style class to add during enter animation.'
    },
    {
        name: 'enterToClassName',
        type: 'string',
        default: 'null',
        description: 'Style class to add when enter animation is completed.'
    },
    {
        name: 'leaveClassName',
        type: 'string',
        default: 'null',
        description: 'Style class to add when item begins to get hidden.'
    },
    {
        name: 'leaveActiveClassName',
        type: 'string',
        default: 'null',
        description: 'Style class to add during leave animation.'
    },
    {
        name: 'leaveToClassName',
        type: 'string',
        default: 'null',
        description: 'Style class to add when leave animation is completed..'
    },
    {
        name: 'hideOnOutsideClick',
        type: 'boolean',
        default: 'false',
        description: 'Whether to trigger leave animation when outside of the element is clicked.'
    },
    {
        name: 'toggleClassName',
        type: 'string',
        default: 'null',
        description: 'Adds or removes a class when no enter-leave animation is required.'
    }
];

const StyleClassEvents = [];

const StyleClassStyles = [];

module.exports = {
    styleclass: {
        name: 'StyleClass',
        description: 'StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/styleclass',
        props: StyleClassProps,
        events: StyleClassEvents,
        styles: StyleClassStyles
    }
};
