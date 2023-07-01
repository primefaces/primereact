import * as React from 'react';
import { classNames, IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';
import { StepsBase } from './StepsBase';
import { PrimeReactContext } from '../api/Api';

export const Steps = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = StepsBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        const { ptm } = StepsBase.setMetaData({
            props
        });

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
            const iconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('icon')
            );

            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: 'p-steps-title'
                },
                ptm('label')
            );

            const label = item.label && <span {...labelProps}>{item.label}</span>;

            const stepProps = mergeProps(
                {
                    className: 'p-steps-number'
                },
                ptm('step')
            );

            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: 'p-menuitem-link',
                    role: 'presentation',
                    target: item.target,
                    onClick: (event) => itemClick(event, item, index),
                    tabIndex
                },
                ptm('action')
            );

            let content = (
                <a {...actionProps}>
                    <span {...stepProps}>{index + 1}</span>
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

            const menuItemProps = mergeProps(
                {
                    key: key,
                    id: item.id,
                    className: className,
                    style: item.style,
                    role: 'tab',
                    'aria-selected': active,
                    'aria-expanded': active
                },
                ptm('menuitem')
            );

            return <li {...menuItemProps}>{content}</li>;
        };

        const createItems = () => {
            const menuProps = mergeProps(
                {
                    role: 'tablist'
                },
                ptm('menu')
            );

            if (props.model) {
                const items = props.model.map(createItem);

                return <ul {...menuProps}>{items}</ul>;
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const className = classNames(
            'p-steps p-component',
            {
                'p-readonly': props.readOnly
            },
            props.className
        );

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className,
                style: props.style
            },
            StepsBase.getOtherProps(props),
            ptm('root')
        );

        const items = createItems();

        return <div {...rootProps}>{items}</div>;
    })
);

Steps.displayName = 'Steps';
