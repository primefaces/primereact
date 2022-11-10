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
        description: 'The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotation for details.'
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
        description:
            'The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.'
    },
    {
        name: 'currencyDisplay',
        type: 'string',
        default: 'symbol',
        description:
            'How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".'
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
        description:
            "The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information)."
    },
    {
        name: 'maxFractionDigits',
        type: 'number',
        default: 'null',
        description:
            "The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list(2 if the list doesn't provide that information)."
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
        name: 'allowEmpty',
        type: 'boolean',
        default: 'true',
        description: 'Determines whether the input field is empty.'
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
        name: 'maxLength',
        type: 'number',
        default: 'null',
        description: 'Maximum number of character allows in the input field.'
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
    {
        name: 'onValueChange',
        description: 'Callback to invoke after validation check and value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'number',
                description: 'New value'
            }
        ]
    },
    {
        name: 'onChange',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'number',
                description: 'New value'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when input receives focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onBlur',
        description: 'Callback to invoke when input loses focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onKeyDown',
        description: 'Callback to invoke when the key pressed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
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
        description: 'InputNumber is an input component to provide numerical input.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inputnumber',
        props: InputNumberProps,
        events: InputNumberEvents,
        styles: InputNumberStyles
    }
};
