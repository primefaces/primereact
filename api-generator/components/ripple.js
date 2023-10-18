const RippleProps = [];

const RippleEvents = [];

const RippleStyles = [
    { name: 'p-ripple', description: 'Host element.' },
    { name: 'p-ink', description: 'Ripple element.' },
    {
        name: 'p-ink-active',
        description: 'Ripple element during animating.'
    }
];

module.exports = {
    ripple: {
        name: 'Ripple',
        description: 'Ripple component adds ripple effect to the host element.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/ripple',
        props: RippleProps,
        events: RippleEvents,
        styles: RippleStyles
    }
};
