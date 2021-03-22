import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class Timeline extends Component {

    static defaultProps = {
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
    };

    static propTypes = {
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
    };

    getKey(item, index) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(item, this.props.dataKey) : `pr_id__${index}`;
    }

    renderEvents() {
        return this.props.value && this.props.value.map((item, index) => {
            const opposite = ObjectUtils.getJSXElement(this.props.opposite, item, index);
            const marker = ObjectUtils.getJSXElement(this.props.marker, item, index) || <div className="p-timeline-event-marker"></div>;
            const connector = index !== (this.props.value.length - 1) && <div className="p-timeline-event-connector"></div>;
            const content = ObjectUtils.getJSXElement(this.props.content, item, index);

            return (
                <div key={this.getKey(item, index)} className="p-timeline-event">
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

    render() {
        const containerClassName = classNames('p-timeline p-component', {
            [`p-timeline-${this.props.align}`]: true,
            [`p-timeline-${this.props.layout}`]: true
        }, this.props.className);

        const events = this.renderEvents();

        return (
            <div id={this.props.id} className={containerClassName} style={this.props.style}>
                {events}
            </div>
        )
    }
}
