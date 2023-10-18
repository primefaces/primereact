const CalendarProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the overlay.'
    },
    {
        name: 'viewDate',
        type: 'date',
        default: 'null',
        description: 'Date instance whose month and year are used to display the calendar.'
    },
    {
        name: 'style',
        type: 'string',
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
        name: 'inline',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, displays the calendar as inline instead of an overlay.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the input element.'
    },
    {
        name: 'inputStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the input element.'
    },
    {
        name: 'inputClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the input element.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field must be filled out before submitting the form.'
    },
    {
        name: 'readOnlyInput',
        type: 'boolean',
        default: 'null',
        description: 'When specified, prevents entering the date manually with keyboard.'
    },
    {
        name: 'keepInvalid',
        type: 'boolean',
        default: 'false',
        description: 'Keep invalid value when input blur.'
    },
    {
        name: 'mask',
        type: 'string',
        default: 'null',
        description: 'Mask pattern for input element.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When specified, disables the component.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text for the input.'
    },
    {
        name: 'showIcon',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, displays a button with icon next to input.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'pi pi-calendar',
        description: 'Icon of the calendar button.'
    },
    {
        name: 'showOnFocus',
        type: 'boolean',
        default: 'true',
        description: 'When disabled, datepicker will not be visible with input focus.'
    },
    {
        name: 'numberOfMonths',
        type: 'number',
        default: '1',
        description: 'Number of months to display.'
    },
    {
        name: 'view',
        type: 'string',
        default: 'date',
        description: 'Type of view to display, valid valids are "date" for datepicker and "month" for month picker.'
    },
    {
        name: 'touchUI',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, calendar overlay is displayed as optimized for touch devices.'
    },
    {
        name: 'showTime',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display timepicker.'
    },
    {
        name: 'timeOnly',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display timepicker only.'
    },
    {
        name: 'showSeconds',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show the seconds in time picker.'
    },
    {
        name: 'showMillisec',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show the milliseconds in time picker.'
    },
    {
        name: 'hourFormat',
        type: 'string',
        default: '24',
        description: 'Specifies 12 or 24 hour format.'
    },
    {
        name: 'locale',
        type: 'string',
        default: 'en',
        description: 'Used to display the values ​​of the locale object defined in the Locale API'
    },
    {
        name: 'stepHour',
        type: 'number',
        default: '1',
        description: 'Hours to change per step.'
    },
    {
        name: 'stepMinute',
        type: 'number',
        default: '1',
        description: 'Minutes to change per step.'
    },
    {
        name: 'stepSecond',
        type: 'number',
        default: '1',
        description: 'Seconds to change per step.'
    },
    {
        name: 'stepMillisec',
        type: 'number',
        default: '1',
        description: 'Milliseconds to change per step.'
    },
    {
        name: 'shortYearCutoff',
        type: 'string',
        default: '+10',
        description: 'The cutoff year for determining the century for a date.'
    },
    {
        name: 'hideOnDateTimeSelect',
        type: 'boolean',
        default: 'false',
        description: 'Whether to hide the overlay on date selection when showTime is enabled.'
    },
    {
        name: 'showWeek',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, calendar will show week numbers.'
    },
    {
        name: 'dateFormat',
        type: 'string',
        default: 'mm/dd/yy',
        description: 'Format of the date.'
    },
    {
        name: 'panelStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the datetimepicker panel.'
    },
    {
        name: 'panelClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the datetimepicker panel.'
    },
    {
        name: 'monthNavigator',
        type: 'boolean',
        default: 'false',
        description: 'Whether the month should be rendered as a dropdown instead of text.'
    },
    {
        name: 'yearNavigator',
        type: 'boolean',
        default: 'false',
        description: 'Whether the year should be rendered as a dropdown instead of text.'
    },
    {
        name: 'disabledDates',
        type: 'array;',
        default: 'null',
        description: 'Array with dates to disable.'
    },
    {
        name: 'disabledDays',
        type: 'array',
        default: 'null',
        description: 'Array with disabled weekday numbers.'
    },
    {
        name: 'minDate',
        type: 'Date',
        default: 'null',
        description: 'The minimum selectable date.'
    },
    {
        name: 'maxDate',
        type: 'Date',
        default: 'null',
        description: 'The maximum selectable date.'
    },
    {
        name: 'maxDateCount',
        type: 'number',
        default: 'null',
        description: 'Maximum number of selectable dates in multiple mode.'
    },
    {
        name: 'showMinMaxRange',
        type: 'boolean',
        default: 'false',
        description: 'Whether to allow navigation past min/max dates.'
    },
    {
        name: 'showOtherMonths',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.'
    },
    {
        name: 'selectOtherMonths',
        type: 'boolean',
        default: 'false',
        description: 'Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.'
    },
    {
        name: 'showButtonBar',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display today and clear buttons at the footer'
    },
    {
        name: 'todayButtonClassName',
        type: 'string',
        default: 'p-secondary-button',
        description: 'Style class of the today button.'
    },
    {
        name: 'clearButtonClassName',
        type: 'string',
        default: 'p-secondary-button',
        description: 'Style class of the clear button.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
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
    },
    {
        name: 'dateTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets a date information and returns the cell content in datepicker.'
    },
    {
        name: 'decadeTempate',
        type: 'function',
        default: 'null',
        description: 'Function that gets a navigator information and returns the decade selections in the panel.'
    },
    {
        name: 'monthNavigatorTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets a navigator information and returns the navigator element in header.'
    },
    {
        name: 'yearNavigatorTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets a navigator information and returns the navigator in header.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    },
    {
        name: 'formatDateTime',
        type: 'function',
        default: 'null',
        description: 'Function for overriding default behavior that formats a Date to the string representation.'
    },
    {
        name: 'parseDateTime',
        type: 'function',
        default: 'null',
        description: 'Function for overriding default behavior that parses text into the Date.'
    }
];

const CalendarEvents = [
    {
        name: 'onFocus',
        description: 'Callback to invoke on focus event of input field.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onBlur',
        description: 'Callback to invoke on blur event of input field.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onInput',
        description: 'Callback to invoke on input event of input field.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onSelect',
        description: 'Callback to invoke when a date is selected.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'any',
                description: 'Selected date'
            }
        ]
    },
    {
        name: 'onChange',
        description: 'Callback to invoke when value changes.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'any',
                description: 'New date'
            }
        ]
    },
    {
        name: 'onTodayButtonClick',
        description: 'Callback to invoke when today button is clicked.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onClearButtonClick',
        description: 'Callback to invoke when clear button is clicked.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onViewDateChange',
        description: 'Callback to invoke when the displayed month/year is changed.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'any',
                description: 'New date'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when the displayed month/year is changed.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay panel or modal becomes hidden.',
        arguments: []
    },
    {
        name: 'onVisibleChange',
        description: 'Callback to invoke when visible is changed.',
        arguments: [
            {
                name: 'event.visible',
                type: 'boolean',
                description: 'Whether the overlay is visible'
            },
            {
                name: 'event.type',
                type: 'any',
                description: 'Action type when the overlay is visible/hidden'
            },
            {
                name: 'event.callback',
                type: '',
                description: 'It is used to refocus the input field in some cases when the overlay is hidden.'
            }
        ]
    }
];

const CalendarStyles = [
    { name: 'p-calendar', description: 'Main container element' },
    {
        name: 'p-calendar-w-btn',
        description: 'Main container element when button is enabled.'
    },
    {
        name: 'p-calendar-timeonly',
        description: 'Main container element in time picker only mode.'
    },
    { name: 'p-inputtext', description: 'Input element' },
    { name: 'p-datepicker', description: 'Datepicker element' },
    {
        name: 'p-datepicker-inline',
        description: 'Datepicker element in inline mode'
    },
    {
        name: 'p-monthpicker',
        description: 'Datepicker element in month view.'
    },
    {
        name: 'p-monthpicker-month',
        description: 'Month cell in month view mode.'
    },
    {
        name: 'p-datepicker-touch-ui',
        description: 'Datepicker element in touch ui mode.'
    },
    {
        name: 'p-datepicker-calendar',
        description: 'Table containing dates of a month.'
    },
    {
        name: 'p-datepicker-current-day',
        description: 'Cell of selected date.'
    },
    { name: 'p-datepicker-today', description: "Cell of today's date." }
];

module.exports = {
    calendar: {
        name: 'Calendar',
        description: 'Calendar is a form component to work with dates.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/calendar',
        props: CalendarProps,
        events: CalendarEvents,
        styles: CalendarStyles
    }
};
