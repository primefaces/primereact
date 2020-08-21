import React, { Component } from 'react';
import { FullCalendar } from '../../components/fullcalendar/FullCalendar';
import { EventService } from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppInlineHeader } from '../../AppInlineHeader';
import { FullCalendarDoc } from './FullCalendarDoc';

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

                <FullCalendarDoc />
            </div>
        );
    }
}
