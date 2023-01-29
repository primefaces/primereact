import Head from 'next/head';
import { AccessibilityDoc } from '../../components/doc/calendar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/calendar/basicdoc';
import { ButtonBarDoc } from '../../components/doc/calendar/buttonbardoc';
import { DateFormatDoc } from '../../components/doc/calendar/dateformatdoc';
import { DateTemplateDoc } from '../../components/doc/calendar/datetemplatedoc';
import { DisabledDoc } from '../../components/doc/calendar/disableddoc';
import { FloatLabelDoc } from '../../components/doc/calendar/floatlabeldoc';
import { FormikDoc } from '../../components/doc/calendar/form/formikdoc';
import { HookFormDoc } from '../../components/doc/calendar/form/hookfromdoc';
import { IconDoc } from '../../components/doc/calendar/icondoc';
import { ImportDoc } from '../../components/doc/calendar/importdoc';
import { InlineDoc } from '../../components/doc/calendar/inlinedoc';
import { InvalidStateDoc } from '../../components/doc/calendar/invaliddoc';
import { MinMaxDoc } from '../../components/doc/calendar/minmaxdoc';
import { MonthPickerDoc } from '../../components/doc/calendar/monthpickerdoc';
import { MultipleDoc } from '../../components/doc/calendar/multipledoc';
import { MultipleMonthsDoc } from '../../components/doc/calendar/multiplemonthsdoc';
import { RangeDoc } from '../../components/doc/calendar/rangedoc';
import { StyleDoc } from '../../components/doc/calendar/styledoc';
import { Time12Doc } from '../../components/doc/calendar/time12doc';
import { Time24Doc } from '../../components/doc/calendar/time24doc';
import { TouchUIDoc } from '../../components/doc/calendar/touchuidoc';
import { YearPickerDoc } from '../../components/doc/calendar/yearpickerdoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalidstate',
            label: 'Invalid State',
            component: InvalidStateDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'dateformat',
            label: 'Date Format',
            component: DateFormatDoc
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
            id: 'time24',
            label: 'Time / 24h',
            component: Time24Doc
        },
        {
            id: 'time12',
            label: 'Time / 12h',
            component: Time12Doc
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
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Calendar', pathname: '/modules/calendar.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Calendar Component</title>
                <meta name="description" content="Calendar, also known as DatePicker, is a form component to work with dates." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Calendar</h1>
                        <p>Calendar, also known as DatePicker, is a form component to work with dates.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CalendarDemo;
