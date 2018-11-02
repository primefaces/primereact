import React, {Component} from 'react';
import {FullCalendar} from '../../components/fullcalendar/FullCalendar';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {EventService} from '../service/EventService';

export class FullCalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
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
                    <FullCalendar ref={(el) => this.fc = el} events={this.state.events} options={this.state.options} />
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
                        <p>FullCalendar is a wrapper around on <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.0.alpha.2+</a> so fullcalendar needs to be included in your project. For a complete documentation and samples please refer to the fullcalendar website.</p>

                        <CodeHighlight className="language-html">
                            {`
npm install fullcalendar@4.0.0-alpha.2 --save

`}
                        </CodeHighlight>

                        <p>Events should be an array and defined using the events property.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<FullCalendar events={this.state.events}></FullCalendar>

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
                            {`
export class FullCalendarDemo extends Component {

	constructor() {
        super();
        this.state = {
            events: [
                {
                    "id": 1,
                    "title": "All Day Event",
                    "start": "2017-02-01"
                },
                {
                    "id": 2,
                    "title": "Long Event",
                    "start": "2017-02-07",
                    "end": "2017-02-10"
                },
                {
                    "id": 3,
                    "title": "Repeating Event",
                    "start": "2017-02-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Repeating Event",
                    "start": "2017-02-16T16:00:00"
                },
                {
                    "id": 5,
                    "title": "Conference",
                    "start": "2017-02-11",
                    "end": "2017-02-13"
                },
                {
                    "id": 6,
                    "title": "Meeting",
                    "start": "2017-02-12T10:30:00",
                    "end": "2017-02-12T12:30:00"
                },
                {
                    "id": 7,
                    "title": "Lunch",
                    "start": "2017-02-12T12:00:00"
                },
                {
                    "id": 8,
                    "title": "Meeting",
                    "start": "2017-02-12T14:30:00"
                },
                {
                    "id": 9,
                    "title": "Happy Hour",
                    "start": "2017-02-12T17:30:00"
                },
                {
                    "id": 10,
                    "title": "Dinner",
                    "start": "2017-02-12T20:00:00"
                },
                {
                    "id": 11,
                    "title": "Birthday Party",
                    "start": "2017-02-13T07:00:00"
                },
                {
                    "id": 12,
                    "title": "Click for Google",
                    "url": "http://google.com/",
                    "start": "2017-02-28"
                }
            ]
        }
	}

	render() {
		return (
			<FullCalendar events={this.state.events}/>
		);
	}
}

`}
                        </CodeHighlight>

                        <p>In a real application, it is likely to populate the events by making a service call, when the events are updated, the component will detect the change and render them.</p>

                        <CodeHighlight className="language-javascript">
                            {`
import axios from 'axios';

export class EventService {

    getEvents() {
        return axios.get('showcase/resources/demo/data/events.json')
                .then(res => res.data.data);
    }
}

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
                            {`

export class FullCalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            events: []
        };
        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }
}

`}
                        </CodeHighlight>

                        <h3>Options</h3>
                        <p>FullCalendar has a long list of customization parameters that are defined with the options property. Example below customizes the header property.</p>
                        <CodeHighlight className="language-javascript">
                            {`
export class FullCalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true
            }
        };
        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }
}

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-jsx">
                            {`
<FullCalendar events={this.state.events} options={this.state.options} />

`}
                        </CodeHighlight>

                        <h3>Events</h3>
                        <p>Events of the FullCalendar are also defined with the options property.</p>

                        <CodeHighlight className="language-javascript">
                            {`
this.state = {
    options: {
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
};

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
                        <a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.0.alpha.2+</a>

                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/schedule" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {FullCalendar} from 'primereact/fullcalendar';

export class FullCalendarDemo extends Component {

    constructor() {
        super();
        this.state = {
            events: [
                {
                    "id": 1,
                    "title": "All Day Event",
                    "start": "2017-02-01"
                },
                {
                    "id": 2,
                    "title": "Long Event",
                    "start": "2017-02-07",
                    "end": "2017-02-10"
                },
                {
                    "id": 3,
                    "title": "Repeating Event",
                    "start": "2017-02-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Repeating Event",
                    "start": "2017-02-16T16:00:00"
                },
                {
                    "id": 5,
                    "title": "Conference",
                    "start": "2017-02-11",
                    "end": "2017-02-13"
                },
                {
                    "id": 6,
                    "title": "Meeting",
                    "start": "2017-02-12T10:30:00",
                    "end": "2017-02-12T12:30:00"
                },
                {
                    "id": 7,
                    "title": "Lunch",
                    "start": "2017-02-12T12:00:00"
                },
                {
                    "id": 8,
                    "title": "Meeting",
                    "start": "2017-02-12T14:30:00"
                },
                {
                    "id": 9,
                    "title": "Happy Hour",
                    "start": "2017-02-12T17:30:00"
                },
                {
                    "id": 10,
                    "title": "Dinner",
                    "start": "2017-02-12T20:00:00"
                },
                {
                    "id": 11,
                    "title": "Birthday Party",
                    "start": "2017-02-13T07:00:00"
                },
                {
                    "id": 12,
                    "title": "Click for Google",
                    "url": "http://google.com/",
                    "start": "2017-02-28"
                }
            ],
            options: {
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true
            }
        };
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
                    <FullCalendar ref={(el) => this.fc = el} events={this.state.events} options={this.state.options} />
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