import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from "react-transition-group";
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import { CascadeSelectSub } from "./CascadeSelectSub";
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

export class CascadeSelect extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        placeholder: null,
        itemTemplate: null,
        disabled: false,
        dataKey: null,
        inputId: null,
        tabIndex: null,
        ariaLabelledBy: null,
        appendTo: null,
        onChange: null,
        onGroupChange: null,
        onBeforeShow: null,
        onBeforeHide: null,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.array,
        placeholder: PropTypes.string,
        itemTemplate: PropTypes.any,
        disabled: PropTypes.bool,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        tabIndex: PropTypes.number,
        ariaLabelledBy: PropTypes.string,
        appendTo: PropTypes.any,
        onChange: PropTypes.func,
        onGroupChange: PropTypes.func,
        onBeforeShow: PropTypes.func,
        onBeforeHide: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            overlayVisible: false
        };

        this.dirty = false;
        this.selectionPath = null;
        this.id = this.props.id || UniqueComponentId();
        this.overlayRef = React.createRef();

        this.onClick = this.onClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOptionSelect = this.onOptionSelect.bind(this);
        this.onOptionGroupSelect = this.onOptionGroupSelect.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
    }

    onOptionSelect(event) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: event.value
            })
        }

        this.updateSelectionPath();
        this.hide();
        this.focusInput.focus();
    }

    onOptionGroupSelect(event) {
        this.dirty = true;

        if (this.props.onGroupChange) {
            this.props.onGroupChange(event);
        }
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option;
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : option;
    }

    getOptionGroupChildren(optionGroup, level) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren[level]);
    }

    isOptionGroup(option, level) {
        return Object.prototype.hasOwnProperty.call(option, this.props.optionGroupChildren[level]);
    }

    updateSelectionPath() {
        let path;
        if (this.props.value != null && this.props.options) {
            for (let option of this.props.options) {
                path = this.findModelOptionInGroup(option, 0);
                if (path) {
                    break;
                }
            }
        }

        this.selectionPath = path;
    }

    findModelOptionInGroup(option, level) {
        if (this.isOptionGroup(option, level)) {
            let selectedOption;
            for (let childOption of this.getOptionGroupChildren(option, level)) {
                selectedOption = this.findModelOptionInGroup(childOption, level + 1);
                if (selectedOption) {
                    selectedOption.unshift(option);
                    return selectedOption;
                }
            }
        }
        else if ((ObjectUtils.equals(this.props.value, this.getOptionValue(option), this.props.dataKey))) {
            return [option];
        }

        return null;
    }

    onClick(event) {
        if (this.props.disabled) {
            return;
        }

        const overlay = this.overlayRef ? this.overlayRef.current : null;
        if (!overlay || !overlay.contains(event.target)) {
            this.focusInput.focus();

            if (this.state.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }

    onInputFocus() {
        this.setState({ focused: true });
    }

    onInputBlur() {
        this.setState({ focused: false });
    }

    onInputKeyDown(event) {
        switch (event.key) {
            case 'Down':
            case 'ArrowDown':
                if (this.state.overlayVisible) {
                    DomHandler.findSingle(this.overlayRef.current, '.p-cascadeselect-item').children[0].focus();
                }
                else if (event.altKey && this.props.options && this.props.options.length) {
                    this.show();
                }
                event.preventDefault();
                break;

            case 'Escape':
                if (this.state.overlayVisible) {
                    this.hide();
                    event.preventDefault();
                }
                break;

            case 'Tab':
                this.hide();
                break;

            default:
                break;
        }
    }

    onPanelClick(event) {
        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    show() {
        if (this.props.onBeforeShow) {
            this.props.onBeforeShow();
        }
        this.setState({ overlayVisible: true });
    }

    hide() {
        if (this.props.onBeforeHide) {
            this.props.onBeforeHide();
        }
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        this.overlayRef.current.style.zIndex = String(DomHandler.generateZIndex());
        this.alignOverlay();
    }

    onOverlayEntered() {
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
        if (this.props.onShow) {
            this.props.onShow();
        }
    }

    onOverlayExit() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.dirty = false;
        if (this.props.onHide) {
            this.props.onHide();
        }
    }

    alignOverlay() {
        const container = this.input.parentElement;
        if (this.props.appendTo) {
            DomHandler.absolutePosition(this.overlayRef.current, container);
            this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(container) + 'px';
        }
        else {
            DomHandler.relativePosition(this.overlayRef.current, container);
        }
    }

    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hide();
                }
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }

    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }

    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target)
            || (this.overlayRef && this.overlayRef.current.contains(event.target)));
    }

    componentDidMount() {
        this.updateSelectionPath();
    }

    componentWillUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.updateSelectionPath();
        }
    }

    renderKeyboardHelper() {
        return (
            <div className="p-hidden-accessible">
                <input ref={(el) => this.focusInput = el} type="text" id={this.props.inputId} readOnly disabled={this.props.disabled}
                    onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown}
                    tabIndex={this.props.tabIndex} aria-haspopup="listbox" aria-labelledby={this.props.ariaLabelledBy} />
            </div>
        );
    }

    renderLabel(value) {
        let label = value ? this.getOptionLabel(this.props.value) : this.props.placeholder || 'p-emptylabel';
        let labelClassName = classNames('p-cascadeselect-label ', {
            'p-placeholder': label === this.props.placeholder,
            'p-cascadeselect-label-empty': !this.props.value && label === 'p-emptylabel'
        });

        return <span ref={(el) => this.input = el} className={labelClassName}>{label}</span>;
    }

    renderDropdownIcon() {
        return (
            <div className="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" aria-expanded={this.state.overlayVisible}>
                <span className="p-cascadeselect-trigger-icon pi pi-chevron-down"></span>
            </div>
        );
    }

    renderOverlay() {
        const overlay = (
            <CSSTransition nodeRef={this.overlayRef} classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit}>
                <div ref={this.overlayRef} className="p-cascadeselect-panel p-component" onClick={this.onPanelClick}>
                    <div className="p-cascadeselect-items-wrapper">
                        <CascadeSelectSub options={this.props.options} selectionPath={this.selectionPath} className={"p-cascadeselect-items"} optionLabel={this.props.optionLabel}
                            optionValue={this.props.optionValue} level={0} optionGroupLabel={this.props.optionGroupLabel} optionGroupChildren={this.props.optionGroupChildren}
                            onOptionSelect={this.onOptionSelect} onOptionGroupSelect={this.onOptionGroupSelect} root template={this.props.itemTemplate} />
                    </div>
                </div>
            </CSSTransition>
        );

        return this.props.appendTo ? ReactDOM.createPortal(overlay, this.props.appendTo) : overlay;
    }

    renderElement() {
        let className = classNames('p-cascadeselect p-component p-inputwrapper', this.props.className, {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-inputwrapper-filled': this.props.value,
            'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        });

        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(this.props.value);
        let dropdownIcon = this.renderDropdownIcon();
        let overlay = this.renderOverlay();

        return (
            <div id={this.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}>
                {keyboardHelper}
                {labelElement}
                {dropdownIcon}
                {overlay}
            </div>
        );
    }

    render() {
        const element = this.renderElement();

        return element;
    }
}
