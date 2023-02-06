import * as React from 'react';
import { Button } from '../button/Button';
import { useEventListener, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { SpeedDialBase } from './SpeedDialBase';

export const SpeedDial = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = SpeedDialBase.getProps(inProps);

        const [visibleState, setVisibleState] = React.useState(false);
        const isItemClicked = React.useRef(false);
        const elementRef = React.useRef(null);
        const listRef = React.useRef(null);
        const visible = props.onVisibleChange ? props.visible : visibleState;

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (!isItemClicked.current && isOutsideClicked(event)) {
                    hide();
                }

                isItemClicked.current = false;
            },
            when: visibleState
        });

        const show = () => {
            props.onVisibleChange ? props.onVisibleChange(true) : setVisibleState(true);
            props.onShow && props.onShow();
        };

        const hide = () => {
            props.onVisibleChange ? props.onVisibleChange(false) : setVisibleState(false);
            props.onHide && props.onHide();
        };

        const onClick = (e) => {
            visible ? hide() : show();
            props.onClick && props.onClick(e);

            isItemClicked.current = true;
        };

        const onItemClick = (e, item) => {
            item.command && item.command({ originalEvent: e, item });
            hide();

            isItemClicked.current = true;
            e.preventDefault();
        };

        const isOutsideClicked = (event) => {
            return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target));
        };

        const calculateTransitionDelay = (index) => {
            const length = props.model.length;

            return (visible ? index : length - index - 1) * props.transitionDelay;
        };

        const calculatePointStyle = (index) => {
            const type = props.type;

            if (type !== 'linear') {
                const length = props.model.length;
                const radius = props.radius || length * 20;

                if (type === 'circle') {
                    const step = (2 * Math.PI) / length;

                    return {
                        left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
                        top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`
                    };
                } else if (type === 'semi-circle') {
                    const direction = props.direction;
                    const step = Math.PI / (length - 1);
                    const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                    const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;

                    if (direction === 'up') {
                        return { left: x, bottom: y };
                    } else if (direction === 'down') {
                        return { left: x, top: y };
                    } else if (direction === 'left') {
                        return { right: y, top: x };
                    } else if (direction === 'right') {
                        return { left: y, top: x };
                    }
                } else if (type === 'quarter-circle') {
                    const direction = props.direction;
                    const step = Math.PI / (2 * (length - 1));
                    const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                    const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;

                    if (direction === 'up-left') {
                        return { right: x, bottom: y };
                    } else if (direction === 'up-right') {
                        return { left: x, bottom: y };
                    } else if (direction === 'down-left') {
                        return { right: y, top: x };
                    } else if (direction === 'down-right') {
                        return { left: y, top: x };
                    }
                }
            }

            return {};
        };

        const getItemStyle = (index) => {
            const transitionDelay = calculateTransitionDelay(index);
            const pointStyle = calculatePointStyle(index);

            return {
                transitionDelay: `${transitionDelay}ms`,
                ...pointStyle
            };
        };

        useMountEffect(() => {
            if (props.type !== 'linear') {
                const button = DomHandler.findSingle(elementRef.current, '.p-speeddial-button');
                const firstItem = DomHandler.findSingle(listRef.current, '.p-speeddial-item');

                if (button && firstItem) {
                    const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
                    const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);

                    listRef.current.style.setProperty('--item-diff-x', `${wDiff / 2}px`);
                    listRef.current.style.setProperty('--item-diff-y', `${hDiff / 2}px`);
                }
            }
        });

        useUpdateEffect(() => {
            if (visibleState) {
                props.hideOnClickOutside && bindDocumentClickListener();
            }

            return () => {
                props.hideOnClickOutside && unbindDocumentClickListener();
            };
        }, [visibleState]);

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            getElement: () => elementRef.current
        }));

        const createItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const style = getItemStyle(index);
            const { disabled, icon: _icon, label, template, url, target } = item;
            const contentClassName = classNames('p-speeddial-action', { 'p-disabled': disabled });
            const iconClassName = classNames('p-speeddial-action-icon', _icon);
            const icon = IconUtils.getJSXIcon(_icon, { className: 'p-speeddial-action-icon' }, { props });
            let content = (
                <a href={url || '#'} role="menuitem" className={contentClassName} target={target} data-pr-tooltip={label} onClick={(e) => onItemClick(e, item)}>
                    {icon}
                    <Ripple />
                </a>
            );

            if (template) {
                const defaultContentOptions = {
                    onClick: (e) => onItemClick(e, item),
                    className: contentClassName,
                    iconClassName,
                    element: content,
                    props,
                    visible
                };

                content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
            }

            return (
                <li key={index} className="p-speeddial-item" style={style} role="none">
                    {content}
                </li>
            );
        };

        const createItems = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const createList = () => {
            const items = createItems();

            return (
                <ul ref={listRef} className="p-speeddial-list" role="menu">
                    {items}
                </ul>
            );
        };

        const createButton = () => {
            const showIconVisible = (!visible && !!props.showIcon) || !props.hideIcon;
            const hideIconVisible = visible && !!props.hideIcon;
            const className = classNames(
                'p-speeddial-button p-button-rounded',
                {
                    'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
                },
                props.buttonClassName
            );
            const iconClassName = classNames({
                [`${props.showIcon}`]: (!visible && !!props.showIcon) || !props.hideIcon,
                [`${props.hideIcon}`]: visible && !!props.hideIcon
            });
            const icon = IconUtils.getJSXIcon(showIconVisible ? props.showIcon : hideIconVisible ? props.hideIcon : null, undefined, { props });
            const content = <Button type="button" style={props.buttonStyle} className={className} icon={icon} onClick={onClick} disabled={props.disabled} aria-label={props['aria-label']} />;

            if (props.buttonTemplate) {
                const defaultContentOptions = {
                    onClick,
                    className,
                    iconClassName,
                    element: content,
                    props,
                    visible
                };

                return ObjectUtils.getJSXElement(props.buttonTemplate, defaultContentOptions);
            }

            return content;
        };

        const createMask = () => {
            if (props.mask) {
                const className = classNames(
                    'p-speeddial-mask',
                    {
                        'p-speeddial-mask-visible': visible
                    },
                    props.maskClassName
                );

                return <div className={className} style={props.maskStyle}></div>;
            }

            return null;
        };

        const otherProps = SpeedDialBase.getOtherProps(props);
        const className = classNames(
            `p-speeddial p-component p-speeddial-${props.type}`,
            {
                [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
                'p-speeddial-opened': visible,
                'p-disabled': props.disabled
            },
            props.className
        );
        const button = createButton();
        const list = createList();
        const mask = createMask();

        return (
            <React.Fragment>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    {button}
                    {list}
                </div>
                {mask}
            </React.Fragment>
        );
    })
);

SpeedDial.displayName = 'SpeedDial';
