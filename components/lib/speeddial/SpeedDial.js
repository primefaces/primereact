import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export class SpeedDial extends Component {

    static defaultProps = {
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

    static propTypes = {
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

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.onClick = this.onClick.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

    isVisible() {
        return this.props.onVisibleChange ? this.props.visible : this.state.visible;
    }

    show() {
        if (this.props.onVisibleChange) {
            this.props.onVisibleChange(true);
        }
        else {
            this.setState({ visible: true });
        }

        this.props.onShow && this.props.onShow();
    }

    hide() {
        if (this.props.onVisibleChange) {
            this.props.onVisibleChange(false);
        }
        else {
            this.setState({ visible: false });
        }

        this.props.onHide && this.props.onHide();
    }

    onClick(e) {
        this.isVisible() ? this.hide() : this.show();

        this.props.onClick && this.props.onClick(e);

        this.isItemClicked = true;
    }

    onItemClick(e, item) {
        if (item.command) {
            item.command({ originalEvent: e, item });
        }

        this.hide();

        this.isItemClicked = true;
        e.preventDefault();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.isVisible() && this.isOutsideClicked(event)) {
                    this.hide();
                }

                this.isItemClicked = false;
            };
            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target) || this.isItemClicked);
    }

    calculateTransitionDelay(index) {
        const length = this.props.model.length;
        const visible = this.isVisible();

        return (visible ? index : length - index - 1) * this.props.transitionDelay;
    }

    calculatePointStyle(index) {
        const type = this.props.type;

        if (type !== 'linear') {
            const length = this.props.model.length;
            const radius = this.props.radius || (length * 20);

            if (type === 'circle') {
                const step = 2 * Math.PI / length;

                return {
                    left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
                    top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`,
                }
            }
            else if (type === 'semi-circle') {
                const direction = this.props.direction;
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
                const direction = this.props.direction;
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

    getItemStyle(index) {
        const transitionDelay = this.calculateTransitionDelay(index);
        const pointStyle = this.calculatePointStyle(index);

        return {
            transitionDelay: `${transitionDelay}ms`,
            ...pointStyle
        };
    }

    componentDidMount() {
        if (this.props.type !== 'linear') {
            const button = DomHandler.findSingle(this.container, '.p-speeddial-button');
            const firstItem = DomHandler.findSingle(this.list, '.p-speeddial-item');

            if (button && firstItem) {
                const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
                const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);
                this.list.style.setProperty('--item-diff-x', `${wDiff / 2}px`);
                this.list.style.setProperty('--item-diff-y', `${hDiff / 2}px`);
            }
        }

        if (this.props.hideOnClickOutside) {
            this.bindDocumentClickListener();
        }
    }

    componentWillUnmount() {
        if (this.props.hideOnClickOutside) {
            this.unbindDocumentClickListener();
        }
    }

    renderItem(item, index) {
        const style = this.getItemStyle(index);
        const { disabled, icon: _icon, label, template, url, target } = item;
        const contentClassName = classNames('p-speeddial-action', { 'p-disabled': disabled });
        const iconClassName = classNames('p-speeddial-action-icon', _icon);
        const icon = _icon && <span className={iconClassName}></span>;
        let content = (
            <a href={url || '#'} role="menuitem" className={contentClassName} target={target} data-pr-tooltip={label} onClick={(e) => this.onItemClick(e, item)}>
                {icon}
                <Ripple />
            </a>
        );

        if (template) {
            const defaultContentOptions = {
                onClick: (e) => this.onItemClick(e, item),
                className: contentClassName,
                iconClassName,
                element: content,
                props: this.props,
                visible: this.isVisible()
            };

            content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
        }

        return (
            <li key={index} className="p-speeddial-item" style={style} role="none">
                {content}
            </li>
        )
    }

    renderItems() {
        if (this.props.model) {
            return this.props.model.map((item, index) => this.renderItem(item, index));
        }

        return null;
    }

    renderList() {
        const items = this.renderItems();

        return (
            <ul ref={(el) => this.list = el} className="p-speeddial-list" role="menu">
                {items}
            </ul>
        )
    }

    renderButton() {
        const visible = this.isVisible();
        const className = classNames('p-speeddial-button p-button-rounded', {
            'p-speeddial-rotate': this.props.rotateAnimation && !this.props.hideIcon
        }, this.props.buttonClassName);
        const iconClassName = classNames({
            [`${this.props.showIcon}`]: (!visible && !!this.props.showIcon) || !this.props.hideIcon,
            [`${this.props.hideIcon}`]: visible && !!this.props.hideIcon,
        });
        const content = <Button type="button" style={this.props.buttonStyle} className={className} icon={iconClassName} onClick={this.onClick} disabled={this.props.disabled} />;

        if (this.props.buttonTemplate) {
            const defaultContentOptions = {
                onClick: (event) => this.onClick(event),
                className,
                iconClassName,
                element: content,
                props: this.props,
                visible
            };

            return ObjectUtils.getJSXElement(this.props.buttonTemplate, defaultContentOptions);
        }

        return content;
    }

    renderMask() {
        if (this.props.mask) {
            const visible = this.isVisible();
            const className = classNames('p-speeddial-mask', {
                'p-speeddial-mask-visible': visible
            }, this.props.maskClassName);

            return (
                <div className={className} style={this.props.maskStyle}></div>
            );
        }

        return null;
    }

    render() {
        const className = classNames(`p-speeddial p-component p-speeddial-${this.props.type}`, {
            [`p-speeddial-direction-${this.props.direction}`]: this.props.type !== 'circle',
            'p-speeddial-opened': this.isVisible(),
            'p-disabled': this.props.disabled
        }, this.props.className);
        const button = this.renderButton();
        const list = this.renderList();
        const mask = this.renderMask();

        return (
            <React.Fragment>
                <div ref={(el) => this.container = el} id={this.props.id} className={className} style={this.props.style}>
                    {button}
                    {list}
                </div>
                {mask}
            </React.Fragment>
        );
    }
}
