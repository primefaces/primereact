import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { useMountEffect, useUpdateEffect, useEventListener } from '../hooks/Hooks';

export const SpeedDial = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(false);
    const isItemClicked = useRef(false);
    const elementRef = useRef(null);
    const listRef = useRef(null);
    const visible = props.onVisibleChange ? props.visible : visibleState;

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click', listener: (event) => {
            if (!isItemClicked.current && isOutsideClicked(event)) {
                hide();
            }

            isItemClicked.current = false;
        }, when: visibleState
    });

    const show = () => {
        props.onVisibleChange ? props.onVisibleChange(true) : setVisibleState(true);
        props.onShow && props.onShow();
    }

    const hide = () => {
        props.onVisibleChange ? props.onVisibleChange(false) : setVisibleState(false);
        props.onHide && props.onHide();
    }

    const onClick = (e) => {
        visible ? hide() : show();
        props.onClick && props.onClick(e);

        isItemClicked.current = true;
    }

    const onItemClick = (e, item) => {
        item.command && item.command({ originalEvent: e, item });
        hide();

        isItemClicked.current = true;
        e.preventDefault();
    }

    const isOutsideClicked = (event) => {
        return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target));
    }

    const calculateTransitionDelay = (index) => {
        const length = props.model.length;
        return (visible ? index : length - index - 1) * props.transitionDelay;
    }

    const calculatePointStyle = (index) => {
        const type = props.type;

        if (type !== 'linear') {
            const length = props.model.length;
            const radius = props.radius || (length * 20);

            if (type === 'circle') {
                const step = 2 * Math.PI / length;

                return {
                    left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
                    top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`,
                }
            }
            else if (type === 'semi-circle') {
                const direction = props.direction;
                const step = Math.PI / (length - 1);
                const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
                if (direction === 'up') {
                    return { left: x, bottom: y };
                }
                else if (direction === 'down') {
                    return { left: x, top: y };
                }
                else if (direction === 'left') {
                    return { right: y, top: x };
                }
                else if (direction === 'right') {
                    return { left: y, top: x };
                }
            }
            else if (type === 'quarter-circle') {
                const direction = props.direction;
                const step = Math.PI / (2 * (length - 1));
                const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
                const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
                if (direction === 'up-left') {
                    return { right: x, bottom: y };
                }
                else if (direction === 'up-right') {
                    return { left: x, bottom: y };
                }
                else if (direction === 'down-left') {
                    return { right: y, top: x };
                }
                else if (direction === 'down-right') {
                    return { left: y, top: x };
                }
            }
        }

        return {};
    }

    const getItemStyle = (index) => {
        const transitionDelay = calculateTransitionDelay(index);
        const pointStyle = calculatePointStyle(index);

        return {
            transitionDelay: `${transitionDelay}ms`,
            ...pointStyle
        };
    }

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
        }
    }, [visibleState]);

    useImperativeHandle(ref, () => ({
        show,
        hide
    }));

    const createItem = (item, index) => {
        const style = getItemStyle(index);
        const { disabled, icon: _icon, label, template, url, target } = item;
        const contentClassName = classNames('p-speeddial-action', { 'p-disabled': disabled });
        const iconClassName = classNames('p-speeddial-action-icon', _icon);
        const icon = _icon && <span className={iconClassName}></span>;
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
        )
    }

    const createItems = () => {
        return props.model ? props.model.map(createItem) : null;
    }

    const createList = () => {
        const items = createItems();

        return (
            <ul ref={listRef} className="p-speeddial-list" role="menu">
                {items}
            </ul>
        )
    }

    const createButton = () => {
        const className = classNames('p-speeddial-button p-button-rounded', {
            'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
        }, props.buttonClassName);
        const iconClassName = classNames({
            [`${props.showIcon}`]: (!visible && !!props.showIcon) || !props.hideIcon,
            [`${props.hideIcon}`]: visible && !!props.hideIcon,
        });
        const content = <Button type="button" style={props.buttonStyle} className={className} icon={iconClassName} onClick={onClick} disabled={props.disabled} />;

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
    }

    const createMask = () => {
        if (props.mask) {
            const className = classNames('p-speeddial-mask', {
                'p-speeddial-mask-visible': visible
            }, props.maskClassName);

            return <div className={className} style={props.maskStyle}></div>
        }

        return null;
    }

    const className = classNames(`p-speeddial p-component p-speeddial-${props.type}`, {
        [`p-speeddial-direction-${props.direction}`]: props.type !== 'circle',
        'p-speeddial-opened': visible,
        'p-disabled': props.disabled
    }, props.className);
    const button = createButton();
    const list = createList();
    const mask = createMask();

    return (
        <React.Fragment>
            <div ref={elementRef} id={props.id} className={className} style={props.style}>
                {button}
                {list}
            </div>
            {mask}
        </React.Fragment>
    )
}));

SpeedDial.defaultProps = {
    __TYPE: 'SpeedDial',
    id: null,
    model: null,
    visible: false,
    style: null,
    className: null,
    direction: 'up',
    transitionDelay: 30,
    type: 'linear',
    radius: 0,
    mask: false,
    disabled: false,
    hideOnClickOutside: true,
    buttonStyle: null,
    buttonClassName: null,
    buttonTemplate: null,
    maskStyle: null,
    maskClassName: null,
    showIcon: 'pi pi-plus',
    hideIcon: null,
    rotateAnimation: true,
    onVisibleChange: null,
    onClick: null,
    onShow: null,
    onHide: null
}

SpeedDial.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.array,
    visible: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    direction: PropTypes.string,
    transitionDelay: PropTypes.number,
    type: PropTypes.string,
    radius: PropTypes.number,
    mask: PropTypes.bool,
    disabled: PropTypes.bool,
    hideOnClickOutside: PropTypes.bool,
    buttonStyle: PropTypes.object,
    buttonClassName: PropTypes.string,
    buttonTemplate: PropTypes.any,
    maskStyle: PropTypes.object,
    maskClassName: PropTypes.string,
    showIcon: PropTypes.any,
    hideIcon: PropTypes.any,
    rotateAnimation: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    onClick: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
