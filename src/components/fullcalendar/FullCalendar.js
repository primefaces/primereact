import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils } from '../utils/Utils';

export class FullCalendar extends Component {

    static defaultProps = {
        id: null,
        events: [],
        style: null,
        className: null,
        options: null
    }

    static propTypes = {
        id: PropTypes.string,
        events: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        options: PropTypes.object
    }

    componentDidMount() {
        console.warn("FullCalendar component is deprecated. Use FullCalendar component of '@fullcalendar/react' package.");

        this.config = {
            theme: true
        };

        if (this.props.options) {
            for (let prop in this.props.options) {
                this.config[prop] = this.props.options[prop];
            }
        }

        this.initialize();
    }

    componentDidUpdate(prevProps) {
        if (!this.calendar) {
            this.initialize();
        }
        else {
            if (!ObjectUtils.equals(prevProps.events, this.props.events)) {
                this.calendar.removeAllEventSources();
                this.calendar.addEventSource(this.props.events);
            }

            if (!ObjectUtils.equals(prevProps.options, this.props.options)) {
                for (let prop in this.props.options) {
                    let optionValue = this.props.options[prop];
                    this.config[prop] = optionValue;
                    this.calendar.setOption(prop, optionValue);
                }
            }
        }
    }

    initialize() {
        import('@fullcalendar/core').then((module) => {
            if (module && module.Calendar) {
                this.calendar = new module.Calendar(this.element, this.config);
                this.calendar.render();

                if (this.props.events) {
                    this.calendar.removeAllEventSources();
                    this.calendar.addEventSource(this.props.events);
                }
            }
        });
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
