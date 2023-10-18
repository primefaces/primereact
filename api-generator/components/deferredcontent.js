const DeferredContentProps = [];

const DeferredContentEvents = [
    {
        name: 'onLoad',
        description: 'Callback to invoke when deferred content is loaded.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const DeferredContentStyles = [];

module.exports = {
    deferredcontent: {
        name: 'DeferredContent',
        description: 'DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/deferredcontent',
        props: DeferredContentProps,
        events: DeferredContentEvents,
        styles: DeferredContentStyles
    }
};
