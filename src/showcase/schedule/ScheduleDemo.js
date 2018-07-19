import React, {Component} from 'react';
import {Schedule} from '../../components/schedule/Schedule';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {EventService} from '../service/EventService';

export class ScheduleDemo extends Component {

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

	render() {
        const header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};

		return (
			<div>
				<div className="content-section introduction">
					<div className="feature-intro">
						<h1>Schedule</h1>
						<p>Schedule is an event calendar based on <a href="https://fullcalendar.io/">FullCalendar</a>. For a complete documentation and samples please refer to the FullCalendar website.</p>
					</div>
				</div>

				<div className="content-section implementation">
					<Schedule events={this.state.events} header={header} defaultDate="2017-02-01" eventLimit={4} />
				</div>

				<ScheduleDoc />
			</div>
		);
	}
}

export class ScheduleDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Schedule} from 'primereact/schedule';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Schedule is based on <a href="http://fullcalendar.io/">FullCalendar 4.0.0</a>. In order to setup the styling, add fullcalendar css to your application.</p>

<CodeHighlight className="language-js">
{`
import 'fullcalendar/dist/fullcalendar.css';

`}
</CodeHighlight>
            
            <p>Events of schedule should be an array and defined using the events property.</p>

<CodeHighlight className="language-jsx">
{`
<Schedule events={this.state.events}></Schedule>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
export class ScheduleDemo extends Component {

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
			<Schedule events={this.state.events} header={header} defaultDate="2017-02-01" eventLimit={4} />
		);
	}
}

`}
</CodeHighlight>

            <h3>Event API</h3>
            <p>Event object has various properties to define an event, refer to <a href="http://fullcalendar.io/docs/event_data/Event_Object/">official documentation</a> for the whole list.</p>

            <h3>Header Customization</h3>
            <p>Header is customized using the header property that takes an object as its value. Default configuration is;</p>
            <CodeHighlight className="language-javascript">
{`
{
    left:   'title',
    center: '',
    right:  'today prev,next'
}

`}
</CodeHighlight>

            <p>Here is a customized version of header.</p>

<CodeHighlight className="language-javascript">
            {`
const header = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
};

`}
</CodeHighlight>

<CodeHighlight className="language-jsx">
            {`
<Schedule events={this.state.events} header={header} />

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
                            <td>header</td>
                            <td>object</td>
                            <td><a href="http://fullcalendar.io/docs/display/header/">Read more</a></td>
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
                            <td>isRTL</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/display/isRTL/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>weekends</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/display/weekends/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>hiddenDays</td>
                            <td>array</td>
                            <td><a href="http://fullcalendar.io/docs/display/hiddenDays/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>fixedWeekCount</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/display/fixedWeekCount/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>weekNumbers</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/display/weekNumbers/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>businessHours</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/display/businessHours/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/display/height/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>contentHeight</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/display/contentHeight/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>aspectRatio</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/display/aspectRatio/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>eventLimit</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/display/eventLimit/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>defaultDate</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/defaultDate/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/editable/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>droppable</td>
                            <td>boolean</td>
                            <td><a href="https://fullcalendar.io/docs/dropping/droppable/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>eventStartEditable</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventStartEditable/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>eventDurationEditable</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventDurationEditable/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>defaultView</td>
                            <td>string</td>
                            <td><a href="http://fullcalendar.io/docs/views/defaultView/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>allDaySlot</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/allDaySlot/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>allDayText</td>
                            <td>string</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/allDayText/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>slotDuration</td>
                            <td>Duration</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/slotDuration/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>slotLabelInterval</td>
                            <td>Duration</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/slotLabelInterval/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>snapDuration</td>
                            <td>Duration</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/snapDuration/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>scrollTime</td>
                            <td>Duration</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/scrollTime/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>minTime</td>
                            <td>Duration</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/minTime/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>maxTime</td>
                            <td>Duration</td>
                            <td><a href="hhttp://fullcalendar.io/docs/agenda/maxTime/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>slotEventOverlap</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/agenda/slotEventOverlap/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>nowIndicator</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/nowIndicator/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>dragRevertDuration</td>
                            <td>number</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/dragRevertDuration/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>dragOpacity</td>
                            <td>number</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/dragOpacity/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>dragScroll</td>
                            <td>boolean</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/dragScroll/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>eventOverlap</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventOverlap/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>eventConstraint</td>
                            <td>any</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventConstraint/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>eventRender</td>
                            <td>Function</td>
                            <td><a href="https://fullcalendar.io/docs/event_rendering/eventRender/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>dayRender</td>
                            <td>Function</td>
                            <td><a href="https://fullcalendar.io/docs/display/dayRender/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>locale</td>
                            <td>object</td>
                            <td><a href="https://fullcalendar.io/docs/text/locale/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>timezone</td>
                            <td>boolean|string</td>
                            <td><a href="https://fullcalendar.io/docs/timezone/timezone/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>Object</td>
                            <td>A configuration object to define properties of FullCalendar that do not have a corresponding option in schedule.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onDayClick</td>
                            <td><a href="http://fullcalendar.io/docs/mouse/dayClick/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventClick</td>
                            <td><a href="http://fullcalendar.io/docs/mouse/eventClick/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventMouseover</td>
                            <td><a href="http://fullcalendar.io/docs/mouse/eventMouseover/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventMouseout</td>
                            <td><a href="http://fullcalendar.io/docs/mouse/eventMouseout/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventDragStart</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventDragStart/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventDragStop</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventDragStop/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventDrop</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventDrop/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventResizeStart</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventResizeStart/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventResizeStop</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventResizeStop/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onEventResize</td>
                            <td><a href="http://fullcalendar.io/docs/event_ui/eventResize/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>onViewRender</td>
                            <td><a href="http://fullcalendar.io/docs/display/viewRender/">Read more</a></td>
                        </tr>  
                        <tr>
                            <td>onDrop</td>
                            <td><a href="https://fullcalendar.io/docs/dropping/drop/">Read more</a></td>
                        </tr>                        
                    </tbody>
                </table>
            </div>

            <h3>Methods</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>prev()</td>
                            <td>-</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/prev/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>next()</td>
                            <td>-</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/next/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>prevYear()</td>
                            <td>-</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/prevYear/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>nextYear()</td>
                            <td>-</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/nextYear/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>today()</td>
                            <td>-</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/today/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>gotoDate(date)</td>
                            <td>date: Date to navigate</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/gotoDate/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>incrementDate(duration)</td>
                            <td>duration: Duration to add to current date</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/incrementDate/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>getDate()</td>
                            <td>-</td>
                            <td><a href="http://fullcalendar.io/docs/current_date/getDate/">Read more</a></td>
                        </tr>
                        <tr>
                            <td>changeView(viewName)</td>
                            <td>viewName: A valid view string to change to</td>
                            <td><a href="https://fullcalendar.io/docs/views/changeView/">Read more</a></td>
                        </tr>
                        <tr>
                          <td>updateEvent(event)</td>
                          <td>event: Original Event Object for an event (not merely a reconstructed object)</td>
                          <td><a href="https://fullcalendar.io/docs/event_data/updateEvent/">Read more</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Dependencies</h3>
            <p>Full Calendar 4.0.0+ and Moment JS ^2.17.1</p>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/schedule" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Schedule} from 'primereact/schedule';

export class ScheduleDemo extends Component {

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
        const header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};

		return (
			<div>
				<div className="content-section introduction">
					<div className="feature-intro">
						<h1>Schedule</h1>
						<p>Schedule is an event calendar based on FullCalendar.</p>
					</div>
				</div>

				<div className="content-section implementation">
					<Schedule events={this.state.events} header={header} defaultDate="2017-02-01" eventLimit={4} />
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