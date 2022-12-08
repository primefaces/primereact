const CardProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Header of the card.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer of the card.'
    },
    {
        name: 'title',
        type: 'any',
        default: 'null',
        description: 'Title of the card.'
    },
    {
        name: 'subTitle',
        type: 'any',
        default: 'null',
        description: 'Secondary title of the card.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the component.'
    }
];

const CardEvents = [];

const CardStyles = [
    { name: 'p-card', description: 'Container element.' },
    { name: 'p-card-title', description: 'Title element.' },
    { name: 'p-card-subtitle', description: 'Subtitle element.' },
    { name: 'p-card-content', description: 'Content of the card.' },
    { name: 'p-card-footer', description: 'Footer of the card.' }
];

module.exports = {
    card: {
        name: 'Card',
        description: 'Card is a flexible container component.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/card',
        props: CardProps,
        events: CardEvents,
        styles: CardStyles
    }
};
