import React, { Component } from 'react';
import { CarService } from '../service/CarService';
import { Schedule } from '../../components/schedule/Schedule';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { Calendar } from '../../components/calendar/Calendar';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Dialog, Footer } from '../../components/dialog/Dialog';

export class ScheduleDemo extends Component {

	constructor() {
		super();
		this.state = { events: [], selectedEvent: null, dialogVisible: false };
		this.header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};
	}

	handleDayClick(event) {
		this.event = new MyEvent();
		this.event.start = event.date.format();
		this.setState({ selectedEvent: this.event, dialogVisible: true });
	}

	handleEventClick(e) {
		this.event = new MyEvent();
		this.event.title = e.calEvent.title;

		let start = e.calEvent.start;
		let end = e.calEvent.end;
		if (e.view.name === 'month') {
			start.stripTime();
		}

		if (end) {
			end.stripTime();
			this.event.end = end.format();
		}

		this.event.id = e.calEvent.id;
		this.event.start = start.format();
		this.event.allDay = e.calEvent.allDay;
		this.setState({ selectedEvent: this.event, dialogVisible: true });
	}

	saveEvent() {
		//update
		if (this.event.id) {
			let index = this.findEventIndexById(this.event.id);
			if (index >= 0) {
				this.events[index] = this.event;
			}
		}
		//new
		else {
			this.event.id = this.idGen;
			this.events.push(this.event);
			this.event = null;
		}

		this.setState({ events: this.events, selectedEvent: null, dialogVisible: false });
	}

	deleteEvent() {
		let index = this.findEventIndexById(this.event.id);
		if (index >= 0) {
			this.events.splice(index, 1);
		}
		this.setState({ events: this.events, selectedEvent: null, dialogVisible: false });
	}

	findEventIndexById(id) {
		let index = -1;
		for (let i = 0; i < this.events.length; i++) {
			if (id == this.events[i].id) {
				index = i;
				break;
			}
		}

		return index;
	}

	onChange(e) {
		var newValue = e.target.value;

		this.event.title = newValue;
		this.setState({ selectedEvent: this.event });
	}

	handleEventDropStop(e) {
		let index = this.findEventIndexById(e.event.id);
		if (index >= 0) {
			this.events[index].start = e.event.start.format();
		}
		
		this.setState({ events: this.events });
	}

	componentDidMount() {
		this.events = [
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
		];

		this.setState({ events: this.events });
	}

	render() {

		return (
			<div>
				<div className="content-section">
					<div className="feature-intro">
						<h1>PickList</h1>
						<p>PickList is used to reorder items between differents lists.</p>
					</div>
				</div>

				<div className="content-section implementation">
					<Schedule events={this.state.events} header={this.header} defaultDate="2017-02-01" eventLimit={4} editable={true}
						onDayClick={this.handleDayClick.bind(this)} onEventClick={this.handleEventClick.bind(this)} onEventDrop={this.handleEventDropStop.bind(this)}></Schedule>

					<Dialog header="Event Details" visible={this.state.dialogVisible} modal={false} style={{ 'overflow': 'visible' }}>
						{this.state.selectedEvent && (<div className="ui-grid ui-grid-responsive ui-fluid">
							<div className="ui-grid-row">
								<div className="ui-grid-col-4"><label htmlFor="vin">Title</label></div>
								<div className="ui-grid-col-8"><InputText id="title" value={this.state.selectedEvent.title} onChange={this.onChange.bind(this)} /></div>
							</div>
						</div >)}
						<Footer>
							<div className="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
								<Button icon="fa-close" onClick={this.deleteEvent.bind(this)} label="Delete" />
								<Button icon="fa-check" onClick={this.saveEvent.bind(this)} label="Save" />
							</div>
						</Footer>
					</Dialog>
				</div >
			</div >
		);
	}
}

export class MyEvent {
	id = '';
	title = '';
	start = '';
	end = '';
	allDay = true;
}