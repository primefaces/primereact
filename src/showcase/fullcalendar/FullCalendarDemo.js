import React, {Component} from 'react';
import {FullCalendar} from '../../components/fullcalendar/FullCalendar';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class FullCalendarDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        };

        this.options = {
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

        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }

    render() {

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="fullCalendar">
                        <h1>FullCalendar</h1>
                        <p>An event calendar based on the <a href="https://fullcalendar.io/">FullCalendar</a> library.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <FullCalendar events={this.state.events} options={this.options} />
                    </div>
                </div>

                <FullCalendarDoc/>
            </div>
        );
    }
}

export class FullCalendarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import React, {Component} from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class FullCalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            events: []
        };

        this.options = {
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

        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }

    render() {
        return (
            <div>
                <FullCalendar events={this.state.events} options={this.options} />
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import React, { useState, useEffect } from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const FullCalendarDemo = () => {
    const [events, setEvents] = useState([]);
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
    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <FullCalendar events={events} options={options} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

import React, { useState, useEffect } from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const FullCalendarDemo = () => {
    const [events, setEvents] = useState([]);
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
    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <FullCalendar events={events} options={options} />
        </div>
    );
}
                `
            }
        }

        this.dependencies = {
            "@fullcalendar/core": "4.2.0",
            "@fullcalendar/daygrid": "4.2.0",
            "@fullcalendar/timegrid": "4.2.0",
            "@fullcalendar/interaction": "4.2.0"
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight lang="javascript">
{`
import {FullCalendar} from 'primereact/fullcalendar';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>FullCalendar is a wrapper around on <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.1+</a> so fullcalendar core needs to be included in your project.
                        For a complete documentation and samples please refer to the <a href="https://fullcalendar.io/">fullcalendar website</a>.</p>

                        <CodeHighlight lang="javascript">
{`
npm install @fullcalendar/core --save

`}
                        </CodeHighlight>

                        <p>FullCalendar is plugin based so install the plugins you require and define them with the options property.</p>
<CodeHighlight lang="javascript">
{`
npm install @fullcalendar/daygrid --save
npm install @fullcalendar/timegrid --save
npm install @fullcalendar/interaction --save

`}
</CodeHighlight>

                        <p>FullCalendar properties are defined with the <i>options</i> property and the events to display with the <i>events</i> property which should be an array and defined using the events property. Refer to <a href="https://fullcalendar.io/docs/event-object">Event API</a> for more information.</p>

                        <CodeHighlight lang="javascript">
{`
export class FullCalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        };
        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }

	render() {
		return (
			<FullCalendar events={this.state.events} options={this.state.options} />
		);
	}
}

`}
                        </CodeHighlight>

                        <h3>Callbacks</h3>
                        <p>Callbacks of the FullCalendar such as dateClick are also defined with the options property.</p>

                        <CodeHighlight lang="javascript">
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

                        <h3>Methods</h3>
                        <p>Methods of the underlying calendar instance is accessible using the reference of the components calendar API.</p>

                        <CodeHighlight>
{`
<FullCalendar ref={(el) => this.fc = el} events={this.state.events} options={this.state.options} />

`}
                        </CodeHighlight>
                        <CodeHighlight lang="javascript">
{`
this.fc.calendar.nextYear();

`}
                        </CodeHighlight>


                        <h3>Properties</h3>
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

                        <h3>Dependencies</h3>
                        <p>
                            <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.1+</a>
                        </p>


                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="FullCalendarDemo" sources={[key, value]} service="EventService" data="events" dependencies={this.dependencies} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
