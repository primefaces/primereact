import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { StepsBase } from './StepsBase';

export const Steps = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = StepsBase.getProps(inProps);

        const elementRef = React.useRef(null);

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
        };

        const createItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const key = item.label + '_' + index;
            const active = index === props.activeIndex;
            const disabled = item.disabled || (index !== props.activeIndex && props.readOnly);
            const tabIndex = disabled ? -1 : '';
            const className = classNames('p-steps-item', item.className, {
                'p-highlight p-steps-current': active,
                'p-disabled': disabled
            });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props });
            const label = item.label && <span className="p-steps-title">{item.label}</span>;
            let content = (
                <a href={item.url || '#'} className="p-menuitem-link" role="presentation" target={item.target} onClick={(event) => itemClick(event, item, index)} tabIndex={tabIndex}>
                    <span className="p-steps-number">{index + 1}</span>
                    {icon}
                    {label}
                </a>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => itemClick(event, item, index),
                    className: 'p-menuitem-link',
                    labelClassName: 'p-steps-title',
                    numberClassName: 'p-steps-number',
                    iconClassName,
                    element: content,
                    props,
                    tabIndex,
                    active,
                    disabled
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            return (
                <li key={key} id={item.id} className={className} style={item.style} role="tab" aria-selected={active} aria-expanded={active}>
                    {content}
                </li>
            );
        };

        const createItems = () => {
            if (props.model) {
                const items = props.model.map(createItem);

                return <ul role="tablist">{items}</ul>;
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const otherProps = StepsBase.getOtherProps(props);
        const className = classNames(
            'p-steps p-component',
            {
                'p-readonly': props.readOnly
            },
            props.className
        );
        const items = createItems();

        return (
            <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps}>
                {items}
            </div>
        );
    })
);

Steps.displayName = 'Steps';
