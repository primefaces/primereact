const InputNumberProps = [
    {
        name: 'value',
        type: 'number',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'format',
        type: 'boolean',
        default: 'true',
        description: 'Whether to format the value.'
    },
    {
        name: 'showButtons',
        type: 'boolean',
        default: 'false',
        description: 'Displays spinner buttons.'
    },
    {
        name: 'buttonLayout',
        type: 'string',
        default: 'stacked',
        description: 'Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".'
    },
    {
        name: 'incrementButtonClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the increment button.'
    },
    {
        name: 'decrementButtonClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the decrement button.'
    },
    {
        name: 'incrementButtonIcon',
        type: 'string',
        default: 'pi pi-caret-up',
        description: 'Style class of the increment button.'
    },
    {
        name: 'decrementButtonIcon',
        type: 'string',
        default: 'pi pi-caret-down',
        description: 'Style class of the decrement button.'
    },
    {
        name: 'locale',
        type: 'string',
        default: 'null',
        description: 'Locale to be used in formatting.'
    },
    {
        name: 'localeMatcher',
        type: 'string',
        default: 'best fit',
        description: '                            <td>'
    },
    {
        name: 'mode',
        type: 'string',
        default: 'decimal',
        description: 'Defines the behavior of the component, valid values are "decimal" and "currency".'
    },
    {
        name: 'prefix',
        type: 'string',
        default: 'null',
        description: 'Text to display before the value.'
    },
    {
        name: 'suffix',
        type: 'string',
        default: 'decimal',
        description: 'Text to display after the value.'
    },
    {
        name: 'currency',
        type: 'string',
        default: 'null',
        description: '                            <td>'
    },
    {
        name: 'currencyDisplay',
        type: 'string',
        default: 'symbol',
        description: '                            <td>'
    },
    {
        name: 'useGrouping',
        type: 'boolean',
        default: 'true',
        description: 'Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.'
    },
    {
        name: 'minFractionDigits',
        type: 'number',
        default: 'null',
        description: '                            <td>'
    },
    {
        name: 'maxFractionDigits',
        type: 'number',
        default: 'null',
        description: '                            <td>'
    },
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Identifier of the element.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
    },
    {
        name: 'type',
        type: 'string',
        default: 'text',
        description: 'Type of the input element.'
    },
    {
        name: 'step',
        type: 'number',
        default: '1',
        description: 'Step factor to increment/decrement the value.'
    },
    {
        name: 'min',
        type: 'number',
        default: 'null',
        description: 'Mininum boundary value.'
    },
    {
        name: 'max',
        type: 'number',
        default: 'null',
        description: 'Maximum boundary value.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field must be filled out before submitting the form.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'autoFocus',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should automatically get focus on load.'
    },
    {
        name: 'pattern',
        type: 'string',
        default: 'null',
        description: "The pattern attribute specifies a regular expression that the element's value is checked against on form submission."
    },
    {
        name: 'inputmode',
        type: 'string',
        default: 'null',
        description: 'The inputmode attribute provides a hint to browsers for devices with onscreen keyboards to help them decide which keyboard to display.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Hint text for the input field.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be read-only.'
    },
    {
        name: 'size',
        type: 'number',
        default: 'null',
        description: 'Size of the input field.'
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
        description: 'Style class of the element.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the input element.'
    },
    {
        name: 'inputStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputClassName',
        type: 'string',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    }
];

const InputNumberEvents = [

];

const InputNumberStyles = [
    { name: 'p-inputnumber', description: 'Container element' },
    {
        name: 'p-inputnumber-stacked',
        description: 'Container element with stacked buttons.'
    },
    {
        name: 'p-inputnumber-horizontal',
        description: 'Container element with horizontal buttons.'
    },
    {
        name: 'p-inputnumber-vertical',
        description: 'Container element with vertical buttons.'
    },
    { name: 'p-inputnumber-input', description: 'Input element' },
    { name: 'p-inputnumber-button', description: 'Input element' },
    { name: 'p-inputnumber-button-up', description: 'Increment button' },
    {
        name: 'p-inputnumber-button-down',
        description: 'Decrement button'
    },
    { name: 'p-inputnumber-button-icon', description: 'Button icon' }
];

module.exports = {
    inputnumber: {
        name: 'InputNumber',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inputnumber',
        props: InputNumberProps,
        events: InputNumberEvents,
        styles: InputNumberStyles
    }
};
