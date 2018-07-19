import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ObjectUtils from '../utils/ObjectUtils';
var FullCalendar = require('fullcalendar');

export class Schedule extends Component {

    static defaultProps = {
        id: null,
        events: [],
        header: null,
        style: null,
        className: null,
        isRTL: false,
        weekends: true,
        hiddenDays: [],
        fixedWeekCount: true,
        weekNumbers: false,
        businessHours: false,
        height: null,
        contentHeight: null,
        aspectRatio: 1.35,
        eventLimit: false,
        defaultDate: null,
        editable: false,
        droppable: false,
        eventStartEditable: true,
        eventDurationEditable: true,
        defaultView: 'month',
        allDaySlot: true,
        allDayText: 'all-day',
        slotDuration: '00:30:00',
        slotLabelInterval: null,
        snapDuration: null,
        scrollTime: '06:00:00',
        minTime: '00:00:00',
        maxTime: '24:00:00',
        slotEventOverlap: true,
        nowIndicator: false,
        dragRevertDuration: 500,
        dragOpacity: 0.75,
        dragScroll: true,
        eventOverlap: true,
        eventConstraint: null,
        eventRender: null,
        dayRender: null,
        locale: null,
        timezone: false,
        options: null,
        onDayClick: null,
        onEventClick: null,
        onEventMouseover: null,
        onEventMouseout: null,
        onEventDragStart: null,
        onEventDragStop: null,
        onEventDrop: null,
        onEventResizeStart: null,
        onEventResizeStop: null,
        onEventResize: null,
        onViewRender: null,
        onDrop: null
    }

    static propsTypes = {
        id: PropTypes.string,
        events: PropTypes.array,
        header: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        style: PropTypes.object,
        className: PropTypes.string,
        isRTL: PropTypes.bool,
        weekends: PropTypes.bool,
        hiddenDays: PropTypes.array,
        fixedWeekCount: PropTypes.bool,
        weekNumbers: PropTypes.bool,
        businessHours: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.func, PropTypes.string]),
        contentHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func, PropTypes.string]),
        aspectRatio: PropTypes.number,
        eventLimit: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        defaultDate: PropTypes.any,
        editable: PropTypes.bool,
        droppable: PropTypes.bool,
        eventStartEditable: PropTypes.bool,
        eventDurationEditable: PropTypes.bool,
        defaultView: PropTypes.string,
        allDaySlot: PropTypes.bool,
        allDayText: PropTypes.string,
        slotDuration: PropTypes.any,
        slotLabelInterval: PropTypes.any,
        snapDuration: PropTypes.any,
        scrollTime: PropTypes.any,
        minTime: PropTypes.any,
        maxTime: PropTypes.any,
        slotEventOverlap: PropTypes.bool,
        nowIndicator: PropTypes.bool,
        dragRevertDuration: PropTypes.number,
        dragOpacity: PropTypes.number,
        dragScroll: PropTypes.bool,
        eventOverlap: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        eventConstraint: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        eventRender: PropTypes.func,
        dayRender: PropTypes.func,
        locale: PropTypes.object,
        timezone: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        options: PropTypes.object,
        onDayClick: PropTypes.func,
        onEventClick: PropTypes.func,
        onEventMouseover: PropTypes.func,
        onEventMouseout: PropTypes.func,
        onEventDragStart: PropTypes.func,
        onEventDragStop: PropTypes.func,
        onEventDrop: PropTypes.func,
        onEventResizeStart: PropTypes.func,
        onEventResizeStop: PropTypes.func,
        onEventResize: PropTypes.func,
        onViewRender: PropTypes.func,
        onDrop: PropTypes.func
    }

    gotoDate(date) {
        this.calendar.gotoDate(date);
    }
    
    prev() {
        this.calendar.prev();
    }
    
    next() {
        this.calendar.next();
    }
    
    prevYear() {
        this.calendar.prevYear();
    }
    
    nextYear() {
        this.calendar.nextYear();
    }
    
    today() {
        this.calendar.today();
    }
    
    incrementDate(duration) {
        this.calendar.incrementDate(duration);
    }
     
    changeView(viewName) {
        this.calendar.changeView(viewName);
    }
    
    getDate() {
        return this.calendar.getDate();
    }

    componentDidUpdate(prevProps) {
        if (!this.calendar) {
            this.initialize();
        }
        else {
            if (!ObjectUtils.equals(prevProps.events, this.props.events)) {
                this.calendar.removeEventSources();
                this.calendar.addEventSource(this.props.events);
            }
        }
    }

    componentDidMount() {
        this.initialize();
    }

    initialize() {
        if (this.element.offsetParent) {
            let config = {
                theme: true,
                header: this.props.header,
                isRTL: this.props.rtl,
                weekends: this.props.weekends,
                hiddenDays: this.props.hiddenDays,
                fixedWeekCount: this.props.fixedWeekCount,
                weekNumbers: this.props.weekNumbers,
                businessHours: this.props.businessHours,
                height: this.props.height,
                contentHeight: this.props.contentHeight,
                aspectRatio: this.props.aspectRatio,
                eventLimit: this.props.eventLimit,
                defaultDate: this.props.defaultDate,
                timezone: this.props.timezone,
                editable: this.props.editable,
                droppable: this.props.droppable,
                eventStartEditable: this.props.eventStartEditable,
                eventDurationEditable: this.props.eventDurationEditable,
                defaultView: this.props.defaultView,
                allDaySlot: this.props.allDaySlot,
                allDayText: this.props.allDayText,
                slotDuration: this.props.slotDuration,
                slotLabelInterval: this.props.slotLabelInterval,
                snapDuration: this.props.snapDuration,
                scrollTime: this.props.scrollTime,
                minTime: this.props.minTime,
                maxTime: this.props.maxTime,
                slotEventOverlap: this.props.slotEventOverlap,
                nowIndicator: this.props.nowIndicator,
                dragRevertDuration: this.props.dragRevertDuration,
                dragOpacity: this.props.dragOpacity,
                dragScroll: this.props.dragScroll,
                eventOverlap: this.props.eventOverlap,
                eventConstraint: this.props.eventConstraint,
                eventRender: this.props.eventRender,
                dayRender: this.props.dayRender,
                dayClick: (date, jsEvent, view) => {
                    if(this.props.onDayClick) {
                        this.props.onDayClick({
                            'date': date,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                drop: (date, jsEvent, ui, resourceId) => {
                    if(this.props.onDrop) {
                        this.props.onDrop({
                            'date': date,
                            'jsEvent': jsEvent,
                            'resourceId': resourceId
                        });
                    }
                },
                eventClick: (calEvent, jsEvent, view) => {
                    if(this.props.onEventClick) {
                        this.props.onEventClick({
                            'calEvent': calEvent,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventMouseover: (calEvent, jsEvent, view) => {
                    if(this.props.onEventMouseover) {
                        this.props.onEventMouseover({
                            'calEvent': calEvent,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventMouseout: (calEvent, jsEvent, view) => {
                    if(this.props.onEventMouseout) {
                        this.props.onEventMouseout({
                            'calEvent': calEvent,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventDragStart: (event, jsEvent, ui, view) => {
                    if(this.props.onEventDragStart) {
                        this.props.onEventDragStart({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventDragStop: (event, jsEvent, ui, view) => {
                    if(this.props.onEventDragStop) {
                        this.props.onEventDragStop({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventDrop: (event, delta, revertFunc, jsEvent, ui, view) => {
                    if(this.props.onEventDrop) {
                        this.props.onEventDrop({
                            'event': event,
                            'delta': delta,
                            'revertFunc': revertFunc,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventResizeStart: (event, jsEvent, ui, view) => {
                    if(this.props.onEventResizeStart) {
                        this.props.onEventResizeStart({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventResizeStop: (event, jsEvent, ui, view) => {
                    if(this.props.onEventResizeStop) {
                        this.props.onEventResizeStop({
                            'event': event,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                eventResize: (event, delta, revertFunc, jsEvent, ui, view) => {
                    if(this.props.onEventResize) {
                        this.props.onEventResize({
                            'event': event,
                            'delta': delta,
                            'revertFunc': revertFunc,
                            'jsEvent': jsEvent,
                            'view': view
                        });
                    }
                },
                viewRender: (view, element) => {
                    if(this.props.onViewRender) {
                        this.props.onViewRender({
                            'view': view,
                            'element': element
                        });
                    }
                }
            };
    
            if (this.props.locale) {
                for (let prop in this.props.locale) {
                    config[prop] = this.props.locale[prop];
                }
            }
    
            if (this.props.options) {
                for (let prop in this.props.options) {
                    this.config[prop] = this.props.options[prop];
                }
            }
    
            this.calendar = new FullCalendar.Calendar(this.element, config);
            this.calendar.render();
            this.calendar.addEventSource(this.props.events);
        }
    }

    componentWillUnmount() {
        if (this.calendar) {
            this.calendar.destroy();
        }
    }

    render() {
        return (
            <div id={this.props.id} ref={(el) => this.element = el} style={this.props.style} className={this.props.className}></div>
        );
        
    }
}