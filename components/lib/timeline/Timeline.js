import * as React from 'react';
import { classNames, mergeProps, ObjectUtils } from '../utils/Utils';
import { TimelineBase } from './TimelineBase';
import { PrimeReactContext } from '../api/Api';

export const Timeline = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = TimelineBase.getProps(inProps, context);
        const { ptm } = TimelineBase.setMetaData({
            props
        });
        const elementRef = React.useRef(null);

        const getKey = (item, index) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(item, props.dataKey) : `pr_id__${index}`;
        };

        const createEvents = () => {
            return (
                props.value &&
                props.value.map((item, index) => {
                    const opposite = ObjectUtils.getJSXElement(props.opposite, item, index);
                    const markerProps = mergeProps(
                        {
                            className: 'p-timeline-event-marker'
                        },
                        ptm('marker')
                    );
                    const marker = ObjectUtils.getJSXElement(props.marker, item, index) || <div {...markerProps}></div>;
                    const connectorProps = mergeProps(
                        {
                            className: 'p-timeline-event-connector'
                        },
                        ptm('connector')
                    );
                    const connector = index !== props.value.length - 1 && <div {...connectorProps}></div>;
                    const content = ObjectUtils.getJSXElement(props.content, item, index);

                    const eventProps = mergeProps(
                        {
                            className: 'p-timeline-event'
                        },
                        ptm('event')
                    );
                    const oppositeProps = mergeProps(
                        {
                            className: 'p-timeline-event-opposite'
                        },
                        ptm('opposite')
                    );
                    const separatorProps = mergeProps(
                        {
                            className: 'p-timeline-event-separator'
                        },
                        ptm('separator')
                    );
                    const contentProps = mergeProps(
                        {
                            className: 'p-timeline-event-content'
                        },
                        ptm('content')
                    );

                    return (
                        <div key={getKey(item, index)} {...eventProps}>
                            <div {...oppositeProps}>{opposite}</div>
                            <div {...separatorProps}>
                                {marker}
                                {connector}
                            </div>
                            <div {...contentProps}>{content}</div>
                        </div>
                    );
                })
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const className = classNames(
            'p-timeline p-component',
            {
                [`p-timeline-${props.align}`]: true,
                [`p-timeline-${props.layout}`]: true
            },
            props.className
        );

        const events = createEvents();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className
            },
            TimelineBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}>{events}</div>;
    })
);

Timeline.displayName = 'Timeline';
