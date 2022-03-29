import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';

export const Timeline = memo(forwardRef((props, ref) => {

    const getKey = (item, index) => {
        return props.dataKey ? ObjectUtils.resolveFieldData(item, props.dataKey) : `pr_id__${index}`;
    }

    const createEvents = () => {
        return props.value && props.value.map((item, index) => {
            const opposite = ObjectUtils.getJSXElement(props.opposite, item, index);
            const marker = ObjectUtils.getJSXElement(props.marker, item, index) || <div className="p-timeline-event-marker"></div>;
            const connector = index !== (props.value.length - 1) && <div className="p-timeline-event-connector"></div>;
            const content = ObjectUtils.getJSXElement(props.content, item, index);

            return (
                <div key={getKey(item, index)} className="p-timeline-event">
                    <div className="p-timeline-event-opposite">
                        {opposite}
                    </div>
                    <div className="p-timeline-event-separator">
                        {marker}
                        {connector}
                    </div>
                    <div className="p-timeline-event-content">
                        {content}
                    </div>
                </div>
            )
        });
    }

    const className = classNames('p-timeline p-component', {
        [`p-timeline-${props.align}`]: true,
        [`p-timeline-${props.layout}`]: true
    }, props.className);

    const events = createEvents();

    return (
        <div id={props.id} className={className} style={props.style}>
            {events}
        </div>
    )
}));

Timeline.defaultProps = {
    __TYPE: 'Timeline',
    id: null,
    value: null,
    align: 'left',
    layout: 'vertical',
    dataKey: null,
    className: null,
    style: null,
    opposite: null,
    marker: null,
    content: null
}

Timeline.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.array,
    align: PropTypes.string,
    layout: PropTypes.string,
    dataKey: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    opposite: PropTypes.any,
    marker: PropTypes.any,
    content: PropTypes.any
}
