import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect } from '../hooks/Hooks';
import { IconUtils, ObjectUtils, UniqueComponentId, classNames, mergeProps } from '../utils/Utils';
import { StepsBase } from './StepsBase';

export const Steps = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = StepsBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const elementRef = React.useRef(null);

        const { ptm, cx, isUnstyled } = StepsBase.setMetaData({
            props,
            state: {
                id: idState
            }
        });

        useHandleStyle(StepsBase.css.styles, isUnstyled, { name: 'steps' });

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

            const key = item.id || idState + '_' + index;
            const active = index === props.activeIndex;
            const disabled = item.disabled || (index !== props.activeIndex && props.readOnly);
            const tabIndex = disabled ? -1 : '';

            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon', { item })
                },
                ptm('icon')
            );

            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                ptm('label')
            );

            const label = item.label && <span {...labelProps}>{item.label}</span>;

            const stepProps = mergeProps(
                {
                    className: cx('step')
                },
                ptm('step')
            );

            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('action'),
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
                    key,
                    id: key,
                    className: cx('menuitem', { active, disabled, item }),
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

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: cx('root'),
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
