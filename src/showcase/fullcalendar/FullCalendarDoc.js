import React, { Component } from 'react';
import { Divider } from '../../components/divider/Divider';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';

export class FullCalendarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../service/EventService';

export class FullCalendarDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        };

        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }

    render() {

        return (
            <div>
                <div className="card">
                    <FullCalendar events={this.state.events} initialDate="2017-02-01" initialView='dayGridMonth' plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }} editable selectable selectMirror dayMaxEvents />
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../service/EventService';

const FullCalendarDemo = () => {
    const [events, setEvents] = useState([]);

    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <FullCalendar events={events} initialDate="2017-02-01" initialView='dayGridMonth' plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }} editable selectable selectMirror dayMaxEvents />
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../service/EventService';

const FullCalendarDemo = () => {
    const [events, setEvents] = useState([]);

    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <FullCalendar events={events} initialDate="2017-02-01" initialView='dayGridMonth' plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }} editable selectable selectMirror dayMaxEvents />
            </div>
        </div>
    );
}
                `
            }
        }

        this.dependencies = {
            "@fullcalendar/core": "^5.7.2",
            "@fullcalendar/react": "^5.7.0",
            "@fullcalendar/daygrid": "^5.7.2",
            "@fullcalendar/interaction": "^5.7.2",
            "@fullcalendar/timegrid": "^5.7.2"
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    <TabPanel header="Documentation">
                        <h4><strong>Note:</strong> This documentation explains how to use PrimeReact's FullCalendar component and <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.1+</a>.
                            In PrimeReact 6.4.0+, FullCalendar component is deprecated. Now, PrimeReact provides full theming support to the <a href="https://fullcalendar.io/docs/react">FullCalendar React</a> library.
                            In this way, it is aimed to use it compatible with other PrimeReact components.</h4>
                        <Divider />

                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { FullCalendar } from 'primereact/fullcalendar';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>FullCalendar is a wrapper around on <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.1+</a> so fullcalendar core needs to be included in your project.
                        For a complete documentation and samples please refer to the <a href="https://fullcalendar.io/">fullcalendar website</a>.</p>

<CodeHighlight lang="js">
{`
npm install @fullcalendar/core --save
`}
</CodeHighlight>

                        <p>FullCalendar is plugin based so install the plugins you require and define them with the options property.</p>
<CodeHighlight lang="js">
{`
npm install @fullcalendar/daygrid --save
npm install @fullcalendar/timegrid --save
npm install @fullcalendar/interaction --save
`}
</CodeHighlight>

                        <p>FullCalendar properties are defined with the <i>options</i> property and the events to display with the <i>events</i> property which should be an array and defined using the events property. Refer to <a href="https://fullcalendar.io/docs/event-object">Event API</a> for more information.</p>

<CodeHighlight lang="js">
{`
export const FullCalendarDemo = () => {

    const [events, setEvents]: useState([]);
    const options = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        defaultDate: '2017-02-01',
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true
    };

    useEffect(() => {
        eventService = new EventService();
        eventService.getEvents().then(data => setEvents(data));
    }, []);

    return (
        <FullCalendar events={events} options={options} />
    );
}
`}
</CodeHighlight>

                        <h5>Callbacks</h5>
                        <p>Callbacks of the FullCalendar such as dateClick are also defined with the options property.</p>

<CodeHighlight lang="js">
{`
let options: {
    defaultDate: '2017-02-01',
    header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    dateClick: (e) =>  {
        //handle date click
    }
}
`}
</CodeHighlight>

                        <h5>Methods</h5>
                        <p>Methods of the underlying calendar instance is accessible using the reference of the components calendar API.</p>

<CodeHighlight>
{`
<FullCalendar ref={fc} events={events} options={options} />
`}
</CodeHighlight>
<CodeHighlight lang="js">
{`
fc.current.calendar.nextYear();
`}
</CodeHighlight>


                        <h5>Properties</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>events</td>
                                        <td>array</td>
                                        <td>An array of events to display.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>ClassName of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>options</td>
                                        <td>Object</td>
                                        <td>A configuration object to define properties of FullCalendar.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>
                            <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.1+</a>
                        </p>


                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'FullCalendarDemo', sources: this.sources, service: 'EventService', data: 'events', dependencies: this.dependencies })
                    }
                </TabView>
            </div>
        );
    }
}
