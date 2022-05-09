import * as React from 'react';
import { useMountEffect, usePrevious, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';

export const FullCalendar = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const config = React.useRef({});
    const calendar = React.useRef(null);
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
        // eslint-disable-next-line no-console
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

    const otherProps = ObjectUtils.findDiffKeys(props, FullCalendar.defaultProps);

    return <div ref={elementRef} id={props.id} style={props.style} className={props.className} {...otherProps}></div>
}));

FullCalendar.displayName = 'FullCalendar';
FullCalendar.defaultProps = {
    __TYPE: 'FullCalendar',
    id: null,
    events: [],
    style: null,
    className: null,
    options: null
}
