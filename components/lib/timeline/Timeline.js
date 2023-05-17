import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';
import { TimelineBase } from './TimelineBase';

export const Timeline = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = TimelineBase.getProps(inProps);

        const elementRef = React.useRef(null);

        const getKey = (item, index) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(item, props.dataKey) : `pr_id__${index}`;
        };

        const createEvents = () => {
            return (
                props.value &&
                props.value.map((item, index) => {
                    const opposite = ObjectUtils.getJSXElement(props.opposite, item, index);
                    const marker = ObjectUtils.getJSXElement(props.marker, item, index) || <div className="p-timeline-event-marker"></div>;
                    const connector = index !== props.value.length - 1 && <div className="p-timeline-event-connector"></div>;
                    const content = ObjectUtils.getJSXElement(props.content, item, index);

                    return (
                        <div key={getKey(item, index)} className="p-timeline-event">
                            <div className="p-timeline-event-opposite">{opposite}</div>
                            <div className="p-timeline-event-separator">
                                {marker}
                                {connector}
                            </div>
                            <div className="p-timeline-event-content">{content}</div>
                        </div>
                    );
                })
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const otherProps = TimelineBase.getOtherProps(props);
        const className = classNames(
            'p-timeline p-component',
            {
                [`p-timeline-${props.align}`]: true,
                [`p-timeline-${props.layout}`]: true
            },
            props.className
        );

        const events = createEvents();

        return (
            <div ref={elementRef} className={className} {...otherProps}>
                {events}
            </div>
        );
    })
);

Timeline.displayName = 'Timeline';
