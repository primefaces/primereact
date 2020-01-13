import React, {Component} from 'react';
import {FullCalendar} from '../../components/fullcalendar/FullCalendar';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>FullCalendar</h1>
                        <p>An event calendar based on the <a href="https://fullcalendar.io/">FullCalendar</a> library.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("fullCalendar")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <FullCalendar  events={this.state.events} options={this.state.options} />
                </div>

                <FullCalendarDoc/>
            </div>
        );
    }
}

export class FullCalendarDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
{`
import {FullCalendar} from 'primereact/fullcalendar';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>FullCalendar is a wrapper around on <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.1+</a> so fullcalendar core needs to be included in your project.
                        For a complete documentation and samples please refer to the <a href="https://fullcalendar.io/">fullcalendar website</a>.</p>

                        <CodeHighlight className="language-javascript">
{`
npm install @fullcalendar/core --save

`}
                        </CodeHighlight>

                        <p>FullCalendar is plugin based so install the plugins you require and define them with the options property.</p>
<CodeHighlight className="language-javascript">
{`
npm install @fullcalendar/daygrid --save
npm install @fullcalendar/timegrid --save
npm install @fullcalendar/interaction --save

`}
</CodeHighlight>

                        <p>FullCalendar properties are defined with the <i>options</i> property and the events to display with the <i>events</i> property which should be an array and defined using the events property. Refer to <a href="https://fullcalendar.io/docs/event-object">Event API</a> for more information.</p>

                        <CodeHighlight className="language-javascript">
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

                        <CodeHighlight className="language-javascript">
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

                        <CodeHighlight className="language-jsx">
{`
<FullCalendar ref={(el) => this.fc = el} events={this.state.events} options={this.state.options} />

`}
                        </CodeHighlight>
                        <CodeHighlight className="language-javascript">
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

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/fullcalendar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
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
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>FullCalendar</h1>
                        <p>An event calendar based on the <a href="https://fullcalendar.io/">FullCalendar</a> library.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <FullCalendar  events={this.state.events} options={this.state.options} />
                </div>

            </div>
        );
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
