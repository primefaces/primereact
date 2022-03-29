import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';

export const Steps = memo(forwardRef((props, ref) => {

    const itemClick = (event, item, index) => {
        if (props.readOnly || item.disabled) {
            event.preventDefault();
            return;
        }

        if (props.onSelect) {
            props.onSelect({
                originalEvent: event,
                item,
                index
            });
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item,
                index
            });
        }
    }

    const createItem = (item, index) => {
        const key = item.label + '_' + index;
        const active = index === props.activeIndex;
        const disabled = (item.disabled || (index !== props.activeIndex && props.readOnly));
        const tabIndex = disabled ? -1 : '';
        const className = classNames('p-steps-item', item.className, {
            'p-highlight p-steps-current': active,
            'p-disabled': disabled
        });
        const label = item.label && <span className="p-steps-title">{item.label}</span>;
        let content = (
            <a href={item.url || '#'} className="p-menuitem-link" role="presentation" target={item.target} onClick={event => itemClick(event, item, index)} tabIndex={tabIndex}>
                <span className="p-steps-number">{index + 1}</span>
                {label}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => itemClick(event, item, index),
                className: 'p-menuitem-link',
                labelClassName: 'p-steps-title',
                numberClassName: 'p-steps-number',
                element: content,
                props,
                tabIndex,
                active,
                disabled
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li key={key} className={className} style={item.style} role="tab" aria-selected={active} aria-expanded={active}>
                {content}
            </li>
        )
    }

    const createItems = () => {
        if (props.model) {
            const items = props.model.map(createItem);

            return (
                <ul role="tablist">
                    {items}
                </ul>
            )
        }

        return null;
    }

    const className = classNames('p-steps p-component', {
        'p-readonly': props.readOnly
    }, props.className);
    const items = createItems();

    return (
        <div id={props.id} className={className} style={props.style}>
            {items}
        </div>
    )
}));

Steps.defaultProps = {
    __TYPE: 'Steps',
    id: null,
    model: null,
    activeIndex: 0,
    readOnly: true,
    style: null,
    className: null,
    onSelect: null
}

Steps.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.array.isRequired,
    activeIndex: PropTypes.number,
    readOnly: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    onSelect: PropTypes.func
}
