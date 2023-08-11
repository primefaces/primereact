import * as React from 'react';
import { Button } from '../button/Button';
import { useEventListener, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { MinusIcon } from '../icons/minus';
import { PlusIcon } from '../icons/plus';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';
import { SpeedDialBase } from './SpeedDialBase';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const SpeedDial = React.memo(
    React.forwardRef((inProps, ref) => {
        const [visibleState, setVisibleState] = React.useState(false);
        const context = React.useContext(PrimeReactContext);
        const props = SpeedDialBase.getProps(inProps, context);
        const { ptm, cx, sx, isUnstyled } = SpeedDialBase.setMetaData({
            props,
            state: {
                visible: visibleState
            }
        });

        useHandleStyle(SpeedDialBase.css.styles, isUnstyled, { name: 'speeddial' });
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

            const { disabled, icon: _icon, label, template, url, target } = item;
            const contentClassName = classNames('p-speeddial-action', { 'p-disabled': disabled });
            const iconClassName = classNames('p-speeddial-action-icon', _icon);
            const actionIconProps = mergeProps(
                {
                    className: cx('actionIcon')
                },
                ptm('actionIcon')
            );
            const actionProps = mergeProps(
                {
                    href: url || '#',
                    role: 'menuitem',
                    className: cx('action', { disabled }),
                    target: target,
                    'data-pr-tooltip': label,
                    onClick: (e) => onItemClick(e, item)
                },
                ptm('action')
            );
            const icon = IconUtils.getJSXIcon(_icon, { ...actionIconProps }, { props });
            let content = (
                <a {...actionProps}>
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

            const menuItemProps = mergeProps(
                {
                    key: index,
                    className: cx('menuitem'),
                    style: sx('item', { index, getItemStyle }),
                    role: 'none'
                },
                ptm('menuitem')
            );

            return <li {...menuItemProps}>{content}</li>;
        };

        const createItems = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const createList = () => {
            const items = createItems();
            const menuProps = mergeProps(
                {
                    ref: listRef,
                    className: cx('list'),
                    role: 'menu'
                },
                ptm('menu')
            );

            return <ul {...menuProps}>{items}</ul>;
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
            const icon = showIconVisible ? props.showIcon || <PlusIcon /> : hideIconVisible ? props.hideIcon || <MinusIcon /> : null;
            const toggleIcon = IconUtils.getJSXIcon(icon, undefined, { props, visible });
            const buttonProps = mergeProps({
                type: 'button',
                style: props.buttonStyle,
                className: classNames(props.buttonClassName, cx('button')),
                icon: toggleIcon,
                onClick: (e) => onClick(e),
                disabled: props.disabled,
                'aria-label': props['aria-label'],
                pt: props.pt && props.pt.button ? props.pt.button : {},
                unstyled: props.unstyled
            });
            const content = <Button {...buttonProps} />;

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
                const maskProps = mergeProps(
                    {
                        className: classNames(props.maskClassName, cx('mask', { visible })),
                        style: props.maskStyle
                    },
                    ptm('mask')
                );

                return <div {...maskProps}></div>;
            }

            return null;
        };

        const button = createButton();
        const list = createList();
        const mask = createMask();
        const rootProps = mergeProps(
            {
                id: props.id,
                className: classNames(props.className, cx('root', { visible })),
                style: props.style
            },
            SpeedDialBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <React.Fragment>
                <div ref={elementRef} {...rootProps}>
                    {button}
                    {list}
                </div>
                {mask}
            </React.Fragment>
        );
    })
);

SpeedDial.displayName = 'SpeedDial';
