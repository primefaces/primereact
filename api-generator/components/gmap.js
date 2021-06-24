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
    {
        name: 'onMapClick',
        description: 'Callback to invoke when map is clicked except markers.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Google Maps MouseEvent'
            }
        ]
    },
    {
        name: 'onMapDragEnd',
        description: 'Callback to invoke when map drag (i.e. pan) has ended.',
        arguments: []
    },
    {
        name: 'onMapReady',
        description: 'Callback to invoke when the map is ready to be used.',
        arguments: [
            {
                name: 'event.map',
                type: 'any',
                description: 'Google Maps Instance'
            }
        ]
    },
    {
        name: 'onOverlayClick',
        description: 'Callback to invoke when an overlay is clicked.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Google Maps MouseEvent'
            },
            {
                name: 'overlay',
                type: 'any',
                description: 'Clicked overlay'
            },
            {
                name: 'map',
                type: 'any',
                description: 'Map instance'
            }
        ]
    },
    {
        name: 'onOverlayDragStart',
        description: 'Callback to invoke when an overlay drag starts.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Google Maps MouseEvent'
            }
        ]
    },
    {
        name: 'onOverlayDrag',
        description: 'Callback to invoke when an overlay is being dragged.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Google Maps MouseEvent'
            }
        ]
    },
    {
        name: 'onOverlayDragEnd',
        description: 'Callback to invoke when an overlay drag ends.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Google Maps MouseEvent'
            }
        ]
    },
    {
        name: 'onZoomChanged',
        description: 'Callback to invoke when zoom level has changed.',
        arguments: []
    }
];

const GMapStyles = [

];

module.exports = {
    gmap: {
        name: 'GMap',
        description: 'GMap component provides integration with Google Maps API.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/gmap',
        props: GMapProps,
        events: GMapEvents,
        styles: GMapStyles
    }
};
