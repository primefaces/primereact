import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../service/EventService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { FullCalendarDoc } from './FullCalendarDoc';
import AppDemoActions from '../../AppDemoActions';

export class FullCalendarDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        };

        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({ events: data }));
    }

    render() {

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="fullCalendar">
                        <h1>FullCalendar</h1>
                        <p><a href="https://fullcalendar.io/docs/react">FullCalendar React</a> library is fully compatible with PrimeReact themes.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="fullcalendar/FullCalendarDemo.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <FullCalendar events={this.state.events} initialDate="2017-02-01" initialView='dayGridMonth' plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }} editable selectable selectMirror dayMaxEvents />
                    </div>
                </div>

                <FullCalendarDoc />
            </div>
        );
    }
}
