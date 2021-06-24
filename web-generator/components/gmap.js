const GMapProps = [
    {
        name: 'options',
        type: 'object',
        default: 'null',
        description: 'Google Maps API configuration object.'
    },
    {
        name: 'overlays',
        type: 'array',
        default: 'null',
        description: 'An array of overlays to display.'
    },
    {
        name: 'style',
        type: 'string',
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

const GMapEvents = [

];

const GMapStyles = [

];

module.exports = {
    gmap: {
        name: 'GMap',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/gmap',
        props: GMapProps,
        events: GMapEvents,
        styles: GMapStyles
    }
};
