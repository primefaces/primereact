import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { DomHandler, ObjectUtils, classNames, ConnectedOverlayScrollHandler, ZIndexUtils } from '../utils/Utils';
import { CSSTransition } from '../csstransition/CSSTransition';
import { CascadeSelectSub } from './CascadeSelectSub';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { Portal } from '../portal/Portal';
import PrimeReact from '../api/Api';

export class CascadeSelect extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        style: null,
        className: null,
        value: null,
        name: null,
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
        transitionOptions: null,
        dropdownIcon: 'pi pi-chevron-down',
        onChange: null,
        onGroupChange: null,
        onBeforeShow: null,
        onBeforeHide: null,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
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
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        transitionOptions: PropTypes.object,
        dropdownIcon: PropTypes.string,
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
        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);

        this.hide = this.hide.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
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
        this.inputRef.current.focus();
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
            this.inputRef.current.focus();

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
        switch (event.which) {
            //down
            case 40:
                if (this.state.overlayVisible) {
                    DomHandler.findSingle(this.overlayRef.current, '.p-cascadeselect-item').children[0].focus();
                }
                else if (event.altKey && this.props.options && this.props.options.length) {
                    this.show();
                }
                event.preventDefault();
                break;

            //space
            case 32:
                if (this.state.overlayVisible)
                    this.hide();
                else
                    this.show();

                event.preventDefault();
                break;

            //tab
            case 9:
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
        this.setState({ overlayVisible: false }, () => {
            this.inputRef.current.focus();
        });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignOverlay();
    }

    onOverlayEntered() {
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        this.props.onShow && this.props.onShow();
    }

    onOverlayExit() {
        this.unbindOutsideClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.dirty = false;
    }

    onOverlayExited() {
        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    alignOverlay() {
        DomHandler.alignOverlay(this.overlayRef.current, this.label.parentElement, this.props.appendTo || PrimeReact.appendTo);
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
                if (this.state.overlayVisible && !DomHandler.isAndroid()) {
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

    updateInputRef() {
        let ref = this.props.inputRef;

        if (ref) {
            if (typeof ref === 'function') {
                ref(this.inputRef.current);
            }
            else {
                ref.current = this.inputRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateInputRef();
        this.updateSelectionPath();
    }

    componentWillUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.updateSelectionPath();
        }
    }

    renderKeyboardHelper() {
        const value = this.props.value ? this.getOptionLabel(this.props.value) : null;

        return (
            <div className="p-hidden-accessible">
                <input ref={this.inputRef} type="text" id={this.props.inputId} name={this.props.name} defaultValue={value} readOnly disabled={this.props.disabled}
                    onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown}
                    tabIndex={this.props.tabIndex} aria-haspopup="listbox" aria-labelledby={this.props.ariaLabelledBy} />
            </div>
        );
    }

    renderLabel() {
        let label = this.props.value ? this.getOptionLabel(this.props.value) : this.props.placeholder || 'p-emptylabel';
        let labelClassName = classNames('p-cascadeselect-label ', {
            'p-placeholder': label === this.props.placeholder,
            'p-cascadeselect-label-empty': !this.props.value && label === 'p-emptylabel'
        });

        return <span ref={(el) => this.label = el} className={labelClassName}>{label}</span>;
    }

    renderDropdownIcon() {
        const iconClassName = classNames('p-cascadeselect-trigger-icon', this.props.dropdownIcon);

        return (
            <div className="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" aria-expanded={this.state.overlayVisible}>
                <span className={iconClassName}></span>
            </div>
        );
    }

    renderOverlay() {
        const overlay = (
            <CSSTransition nodeRef={this.overlayRef} classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                <div ref={this.overlayRef} className="p-cascadeselect-panel p-component" onClick={this.onPanelClick}>
                    <div className="p-cascadeselect-items-wrapper">
                        <CascadeSelectSub options={this.props.options} selectionPath={this.selectionPath} className={"p-cascadeselect-items"} optionLabel={this.props.optionLabel}
                            optionValue={this.props.optionValue} level={0} optionGroupLabel={this.props.optionGroupLabel} optionGroupChildren={this.props.optionGroupChildren}
                            onOptionSelect={this.onOptionSelect} onOptionGroupSelect={this.onOptionGroupSelect} root template={this.props.itemTemplate} onPanelHide={this.hide} />
                    </div>
                </div>
            </CSSTransition>
        );

        return <Portal element={overlay} appendTo={this.props.appendTo} />;
    }

    renderElement() {
        let className = classNames('p-cascadeselect p-component p-inputwrapper', this.props.className, {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-inputwrapper-filled': this.props.value,
            'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        });

        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel();
        let dropdownIcon = this.renderDropdownIcon();
        let overlay = this.renderOverlay();

        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}>
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
