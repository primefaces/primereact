import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/calendar/importdoc';
import { BasicDoc } from '../../components/doc/calendar/basicdoc';
import { TouchUIDoc } from '../../components/doc/calendar/touchuidoc';
import { DateFormatDoc } from '../../components/doc/calendar/dateformatdoc';
import { IconDoc } from '../../components/doc/calendar/icondoc';
import { MinMaxDoc } from '../../components/doc/calendar/minmaxdoc';
import { DisabledDoc } from '../../components/doc/calendar/disableddoc';
import { MultipleDoc } from '../../components/doc/calendar/multipledoc';
import { RangeDoc } from '../../components/doc/calendar/rangedoc';
import { ButtonBarDoc } from '../../components/doc/calendar/buttonbardoc';
import { Time24Doc } from '../../components/doc/calendar/time24doc';
import { Time12Doc } from '../../components/doc/calendar/time12doc';
import { MonthPickerDoc } from '../../components/doc/calendar/monthpickerdoc';
import { YearPickerDoc } from '../../components/doc/calendar/yearpickerdoc';
import { MultipleMonthsDoc } from '../../components/doc/calendar/multiplemonthsdoc';
import { DateTemplateDoc } from '../../components/doc/calendar/datetemplatedoc';
import { InlineDoc } from '../../components/doc/calendar/inlinedoc';
import { ApiDoc } from '../../components/doc/calendar/apidoc';

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
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
            id: 'multiplemonth',
            label: 'Multiple Month',
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
            id: 'api',
            label: 'API',
            component: ApiDoc
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
