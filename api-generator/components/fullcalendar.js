const FullCalendarProps = [
    {
        name: 'id',
        type: 'string',
        default: 'Unique identifier of the element.',
        description: 'events'
    },
    {
        name: 'array',
        type: 'An array of events to display.',
        default: 'style',
        description: 'object'
    },
    {
        name: 'Inline style of the component.',
        type: 'className',
        default: 'string',
        description: 'ClassName of the component.'
    }
];

const FullCalendarEvents = [

];

const FullCalendarStyles = [

];

module.exports = {
    fullcalendar: {
        name: 'FullCalendar',
        description: 'FullCalendar React library is fully compatible with PrimeReact themes.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/fullcalendar',
        props: FullCalendarProps,
        events: FullCalendarEvents,
        styles: FullCalendarStyles
    }
};
