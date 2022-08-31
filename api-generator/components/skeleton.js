const SkeletonProps = [
    {
        name: 'shape',
        type: 'string',
        default: 'rectangle',
        description: 'Shape of the element, options are "rectangle" and "circle".'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Size of the Circle or Square.'
    },
    {
        name: 'width',
        type: 'string',
        default: '100%',
        description: 'Width of the element.'
    },
    {
        name: 'height',
        type: 'string',
        default: '1rem',
        description: 'Height of the element.'
    },
    {
        name: 'borderRadius',
        type: 'string',
        default: 'null',
        description: 'Border radius of the element, defaults to value from theme.'
    },
    {
        name: 'animation',
        type: 'string',
        default: 'wave',
        description: 'Type of the animation, valid options are "wave" and "none".'
    }
];

const SkeletonEvents = [];

const SkeletonStyles = [
    { name: 'p-skeleton', description: 'Container element.' },
    {
        name: 'p-skeleton-circle',
        description: 'Container element of a determinate progressbar.'
    },
    {
        name: 'p-skeleton-none',
        description: 'Container element of an indeterminate progressbar.'
    }
];

module.exports = {
    skeleton: {
        name: 'Skeleton',
        description: 'Skeleton is a placeholder to display instead of the actual content.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/skeleton',
        props: SkeletonProps,
        events: SkeletonEvents,
        styles: SkeletonStyles
    }
};
