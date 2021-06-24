const InplaceProps = [
    {
      name: 'style',
      type: 'object',
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
      name: 'active',
      type: 'boolean',
      default: 'false',
      description: 'Whether the content is displayed or not.'
    },
    {
      name: 'closable',
      type: 'boolean',
      default: 'false',
      description: 'Displays a button to switch back to display mode.'
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When present, it specifies that the element should be disabled.'
    },
    {
      name: 'tabIndex',
      type: 'number',
      default: 'null',
      description: 'Index of the element in tabbing order.'
    }
  ];

const InplaceEvents = [

];

const InplaceStyles = [
    { name: 'p-inplace', description: 'Container element' },
    { name: 'p-inplace-display', description: 'Display container' },
    { name: 'p-inplace-content', description: 'Content container' }
  ];

module.exports = {
    inplace: {
        name: 'Inplace',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inplace',
        props: InplaceProps,
        events: InplaceEvents,
        styles: InplaceStyles
    }
};
