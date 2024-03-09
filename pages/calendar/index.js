import { AccessibilityDoc } from '@/components/doc/calendar/accessibilitydoc';
import { BasicDoc } from '@/components/doc/calendar/basicdoc';
import { ButtonBarDoc } from '@/components/doc/calendar/buttonbardoc';
import { DateTemplateDoc } from '@/components/doc/calendar/datetemplatedoc';
import { DisabledDoc } from '@/components/doc/calendar/disableddoc';
import { FloatLabelDoc } from '@/components/doc/calendar/floatlabeldoc';
import { FormikDoc } from '@/components/doc/calendar/form/formikdoc';
import { HookFormDoc } from '@/components/doc/calendar/form/hookfromdoc';
import { FormatDoc } from '@/components/doc/calendar/formatdoc';
import { IconDoc } from '@/components/doc/calendar/icondoc';
import { ImportDoc } from '@/components/doc/calendar/importdoc';
import { InlineDoc } from '@/components/doc/calendar/inlinedoc';
import { InvalidDoc } from '@/components/doc/calendar/invaliddoc';
import { LocaleDoc } from '@/components/doc/calendar/localedoc';
import { MinMaxDoc } from '@/components/doc/calendar/minmaxdoc';
import { MonthPickerDoc } from '@/components/doc/calendar/monthpickerdoc';
import { MultipleDoc } from '@/components/doc/calendar/multipledoc';
import { MultipleMonthsDoc } from '@/components/doc/calendar/multiplemonthsdoc';
import { PTDoc } from '@/components/doc/calendar/pt/ptdoc';
import { Wireframe } from '@/components/doc/calendar/pt/wireframe';
import { RangeDoc } from '@/components/doc/calendar/rangedoc';
import { StyledDoc } from '@/components/doc/calendar/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/calendar/theming/tailwinddoc';
import { TimeDoc } from '@/components/doc/calendar/timedoc';
import { TouchUIDoc } from '@/components/doc/calendar/touchuidoc';
import { YearPickerDoc } from '@/components/doc/calendar/yearpickerdoc';
import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';

const CalendarDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'minmax',
            label: 'Min / Max',
            component: MinMaxDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'range',
            label: 'Range',
            component: RangeDoc
        },
        {
            id: 'button',
            label: 'Button Bar',
            component: ButtonBarDoc
        },
        {
            id: 'time',
            label: 'Time',
            component: TimeDoc
        },
        {
            id: 'monthpicker',
            label: 'Month Picker',
            component: MonthPickerDoc
        },
        {
            id: 'yearpicker',
            label: 'Year Picker',
            component: YearPickerDoc
        },
        {
            id: 'multiplemonths',
            label: 'Multiple Months',
            component: MultipleMonthsDoc
        },
        {
            id: 'datetemplate',
            label: 'Date Template',
            component: DateTemplateDoc
        },
        {
            id: 'touchui',
            label: 'Touch UI',
            component: TouchUIDoc
        },
        {
            id: 'inline',
            label: 'Inline',
            component: InlineDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },

        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.calendar.options',
            label: 'Calendar PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="React Calendar Component"
            header="Calendar"
            description="Calendar, also known as DatePicker, is a form component to work with dates."
            componentDocs={docs}
            apiDocs={['Calendar']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default CalendarDemo;
