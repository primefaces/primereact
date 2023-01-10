import Head from 'next/head';
import { ApiDoc } from '../../components/doc/calendar/apidoc';
import { AccessibilityDoc } from '../../components/doc/calendar/accessibilitydoc';
import { StylingDoc } from '../../components/doc/calendar/stylingdoc';
import { BasicDoc } from '../../components/doc/calendar/basicdoc';
import { ButtonBarDoc } from '../../components/doc/calendar/buttonbardoc';
import { DateFormatDoc } from '../../components/doc/calendar/dateformatdoc';
import { DateTemplateDoc } from '../../components/doc/calendar/datetemplatedoc';
import { DisabledDoc } from '../../components/doc/calendar/disableddoc';
import { FloatLabelDoc } from '../../components/doc/calendar/floatlabeldoc';
import { IconDoc } from '../../components/doc/calendar/icondoc';
import { ImportDoc } from '../../components/doc/calendar/importdoc';
import { InlineDoc } from '../../components/doc/calendar/inlinedoc';
import { InvalidStateDoc } from '../../components/doc/calendar/invaliddoc';
import { MinMaxDoc } from '../../components/doc/calendar/minmaxdoc';
import { MonthPickerDoc } from '../../components/doc/calendar/monthpickerdoc';
import { MultipleDoc } from '../../components/doc/calendar/multipledoc';
import { MultipleMonthsDoc } from '../../components/doc/calendar/multiplemonthsdoc';
import { RangeDoc } from '../../components/doc/calendar/rangedoc';
import { Time12Doc } from '../../components/doc/calendar/time12doc';
import { Time24Doc } from '../../components/doc/calendar/time24doc';
import { TouchUIDoc } from '../../components/doc/calendar/touchuidoc';
import { FormikDoc } from '../../components/doc/calendar/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/calendar/validation/hookfromdoc';
import { YearPickerDoc } from '../../components/doc/calendar/yearpickerdoc';
import { DocActions } from '../../components/doc/common/docactions';
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
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
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
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Calendar Component</title>
                <meta name="description" content="Calendar also known as DatePicker, is a form component to work with dates." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Calendar</h1>
                    <p>Calendar also known as DatePicker, is a form component to work with dates.</p>
                </div>
                <DocActions github="calendar/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CalendarDemo;
