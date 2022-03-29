import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils } from '../utils/Utils';
import { useMountEffect, useUpdateEffect, useUnmountEffect, usePrevious } from '../hooks/Hooks';

export const FullCalendar = memo(forwardRef((props, ref) => {
    const elementRef = useRef(null);
    const config = useRef({});
    const calendar = useRef(null);
    const prevEvents = usePrevious(props.events);
    const prevOptions = usePrevious(props.options);

    const initialize = () => {
        import('@fullcalendar/core').then((module) => {
            if (module && module.Calendar) {
                calendar.current = new module.Calendar(elementRef.current, config.current);
                calendar.current.render();

                if (props.events) {
                    calendar.current.removeAllEventSources();
                    calendar.current.addEventSource(props.events);
                }
            }
        });
    }

    useMountEffect(() => {
        console.warn("FullCalendar component is deprecated. Use FullCalendar component of '@fullcalendar/react' package.");

        config.current = {
            theme: true
        };

        if (props.options) {
            for (let prop in props.options) {
                config.current[prop] = props.options[prop];
            }
        }

        initialize();
    });

    useUpdateEffect(() => {
        if (!calendar.current) {
            initialize();
        }
        else {
            if (!ObjectUtils.equals(prevEvents, props.events)) {
                calendar.current.removeAllEventSources();
                calendar.addEventSource(props.events);
            }

            if (!ObjectUtils.equals(prevOptions, props.options)) {
                for (let prop in props.options) {
                    let optionValue = props.options[prop];
                    config.current[prop] = optionValue;
                    calendar.current.setOption(prop, optionValue);
                }
            }
        }
    });

    useUnmountEffect(() => {
        if (calendar.current) {
            calendar.current.destroy();
        }
    });

    return <div ref={elementRef} id={props.id} style={props.style} className={props.className}></div>
}));

FullCalendar.defaultProps = {
    __TYPE: 'FullCalendar',
    id: null,
    events: [],
    style: null,
    className: null,
    options: null
}

FullCalendar.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    events: PropTypes.array,
    style: PropTypes.object,
    className: PropTypes.string,
    options: PropTypes.object
}
