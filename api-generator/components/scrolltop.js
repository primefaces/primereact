const ScrollTopProps = [
    {
        name: 'target',
        type: 'string',
        default: 'window',
        description: 'Target of the ScrollTop, valid values are "window" and "parent".'
    },
    {
        name: 'threshold',
        type: 'number',
        default: '400',
        description: 'Defines the threshold value of the vertical scroll position of the target to toggle the visibility.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'pi pi-chevron-up',
        description: 'Icon to display.'
    },
    {
        name: 'behavior',
        type: 'string',
        default: 'smooth',
        description: 'Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const ScrollTopEvents = [
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

const ScrollTopStyles = [
    { name: 'p-scrolltop', description: 'Container element.' },
    {
        name: 'p-scrolltop-sticky',
        description: 'Container element when attached to its parent.'
    }
];

module.exports = {
    scrolltop: {
        name: 'ScrollTop',
        description: 'ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/scrolltop',
        props: ScrollTopProps,
        events: ScrollTopEvents,
        styles: ScrollTopStyles
    }
};
