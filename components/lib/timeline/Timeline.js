import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { mergeProps, ObjectUtils } from '../utils/Utils';
import { TimelineBase } from './TimelineBase';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const Timeline = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = TimelineBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled } = TimelineBase.setMetaData({
            props
        });

        useHandleStyle(TimelineBase.css.styles, isUnstyled, { name: 'timeline' });

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
                            className: cx('marker')
                        },
                        ptm('marker')
                    );
                    const marker = ObjectUtils.getJSXElement(props.marker, item, index) || <div {...markerProps}></div>;
                    const connectorProps = mergeProps(
                        {
                            className: cx('connector')
                        },
                        ptm('connector')
                    );
                    const connector = index !== props.value.length - 1 && <div {...connectorProps}></div>;
                    const content = ObjectUtils.getJSXElement(props.content, item, index);

                    const eventProps = mergeProps(
                        {
                            className: cx('event')
                        },
                        ptm('event')
                    );
                    const oppositeProps = mergeProps(
                        {
                            className: cx('opposite')
                        },
                        ptm('opposite')
                    );
                    const separatorProps = mergeProps(
                        {
                            className: cx('separator')
                        },
                        ptm('separator')
                    );
                    const contentProps = mergeProps(
                        {
                            className: cx('content')
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

        const events = createEvents();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: cx('root')
            },
            TimelineBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}>{events}</div>;
    })
);

Timeline.displayName = 'Timeline';
