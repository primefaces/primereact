import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { CascadeSelectSub } from './CascadeSelectSub';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, classNames, ZIndexUtils } from '../utils/Utils';
import { useUpdateEffect, useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const CascadeSelect = memo(forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = useState(false);
    const [overlayVisibleState, setOverlayVisibleState] = useState(false);
    const elementRef = useRef(null);
    const overlayRef = useRef(null);
    const inputRef = useRef(null);
    const labelRef = useRef(null);
    const dirty = useRef(false);
    const selectionPath = useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { valid }) => {
            valid && hide();
        }, when: overlayVisibleState
    });

    const onOptionSelect = (event) => {
        if (props.onChange) {
            props.onChange({
                originalEvent: event,
                value: event.value
            })
        }

        updateSelectionPath();
        hide();
        inputRef.current.focus();
    }

    const onOptionGroupSelect = (event) => {
        dirty.current = true;
        props.onGroupChange && props.onGroupChange(event);
    }

    const getOptionLabel = (option) => {
        return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option;
    }

    const getOptionValue = (option) => {
        return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option;
    }

    const getOptionGroupChildren = (optionGroup, level) => {
        return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren[level]);
    }

    const isOptionGroup = (option, level) => {
        return Object.prototype.hasOwnProperty.call(option, props.optionGroupChildren[level]);
    }

    const updateSelectionPath = () => {
        let path;
        if (props.value != null && props.options) {
            for (let option of props.options) {
                path = findModelOptionInGroup(option, 0);
                if (path) {
                    break;
                }
            }
        }

        selectionPath.current = path;
    }

    const findModelOptionInGroup = (option, level) => {
        if (isOptionGroup(option, level)) {
            let selectedOption;
            for (let childOption of getOptionGroupChildren(option, level)) {
                selectedOption = findModelOptionInGroup(childOption, level + 1);
                if (selectedOption) {
                    selectedOption.unshift(option);
                    return selectedOption;
                }
            }
        }
        else if ((ObjectUtils.equals(props.value, getOptionValue(option), props.dataKey))) {
            return [option];
        }

        return null;
    }

    const onClick = (event) => {
        if (props.disabled) {
            return;
        }

        if (!overlayRef.current || !overlayRef.current.contains(event.target)) {
            inputRef.current.focus();
            overlayVisibleState ? hide() : show();
        }
    }

    const onInputFocus = () => {
        setFocusedState(true);
    }

    const onInputBlur = () => {
        setFocusedState(false);
    }

    const onInputKeyDown = (event) => {
        switch (event.which) {
            //down
            case 40:
                if (overlayVisibleState) {
                    DomHandler.findSingle(overlayRef.current, '.p-cascadeselect-item').children[0].focus();
                }
                else if (event.altKey && props.options && props.options.length) {
                    show();
                }
                event.preventDefault();
                break;

            //space
            case 32:
                overlayVisibleState ? hide() : show();

                event.preventDefault();
                break;

            //tab
            case 9:
                hide();
                break;

            default:
                break;
        }
    }

    const onPanelClick = (event) => {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: elementRef.current
        });
    }

    const show = () => {
        props.onBeforeShow && props.onBeforeShow();
        setOverlayVisibleState(true);
    }

    const hide = () => {
        props.onBeforeHide && props.onBeforeHide();
        setOverlayVisibleState(false);
        inputRef.current.focus();
    }

    const onOverlayEnter = () => {
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        alignOverlay();
    }

    const onOverlayEntered = () => {
        bindOverlayListener();
        props.onShow && props.onShow();
    }

    const onOverlayExit = () => {
        unbindOverlayListener();
        dirty.current = false;
    }

    const onOverlayExited = () => {
        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const alignOverlay = () => {
        DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || PrimeReact.appendTo);
    }

    useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useUpdateEffect(() => {
        updateSelectionPath();
    }, [props.value]);

    useUnmountEffect(() => {
        ZIndexUtils.clear(overlayRef.current);
    });

    const createKeyboardHelper = () => {
        const value = props.value ? getOptionLabel(props.value) : undefined;

        return (
            <div className="p-hidden-accessible">
                <input ref={inputRef} type="text" id={props.inputId} name={props.name} defaultValue={value} readOnly disabled={props.disabled}
                    onFocus={onInputFocus} onBlur={onInputBlur} onKeyDown={onInputKeyDown}
                    tabIndex={props.tabIndex} aria-haspopup="listbox" aria-labelledby={props.ariaLabelledBy} />
            </div>
        )
    }

    const createLabel = () => {
        const label = props.value ? getOptionLabel(props.value) : props.placeholder || 'p-emptylabel';
        const labelClassName = classNames('p-cascadeselect-label ', {
            'p-placeholder': label === props.placeholder,
            'p-cascadeselect-label-empty': !props.value && label === 'p-emptylabel'
        });

        return <span ref={labelRef} className={labelClassName}>{label}</span>
    }

    const createDropdownIcon = () => {
        const iconClassName = classNames('p-cascadeselect-trigger-icon', props.dropdownIcon);

        return (
            <div className="p-cascadeselect-trigger" role="button" aria-haspopup="listbox" aria-expanded={overlayVisibleState}>
                <span className={iconClassName}></span>
            </div>
        )
    }

    const createOverlay = () => {
        const overlay = (
            <CSSTransition nodeRef={overlayRef} classNames="p-connected-overlay" in={overlayVisibleState} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited}>
                <div ref={overlayRef} className="p-cascadeselect-panel p-component" onClick={onPanelClick}>
                    <div className="p-cascadeselect-items-wrapper">
                        <CascadeSelectSub options={props.options} selectionPath={selectionPath.current} className={"p-cascadeselect-items"} optionLabel={props.optionLabel}
                            optionValue={props.optionValue} level={0} optionGroupLabel={props.optionGroupLabel} optionGroupChildren={props.optionGroupChildren}
                            onOptionSelect={onOptionSelect} onOptionGroupSelect={onOptionGroupSelect} root template={props.itemTemplate} onPanelHide={hide} />
                    </div>
                </div>
            </CSSTransition>
        );

        return <Portal element={overlay} appendTo={props.appendTo} />
    }

    const createElement = () => {
        const className = classNames('p-cascadeselect p-component p-inputwrapper', {
            'p-disabled': props.disabled,
            'p-focus': focusedState,
            'p-inputwrapper-filled': props.value,
            'p-inputwrapper-focus': focusedState || overlayVisibleState
        }, props.className);

        const keyboardHelper = createKeyboardHelper();
        const labelElement = createLabel();
        const dropdownIcon = createDropdownIcon();
        const overlay = createOverlay();

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style} onClick={onClick}>
                {keyboardHelper}
                {labelElement}
                {dropdownIcon}
                {overlay}
            </div>
        )
    }

    const element = createElement();

    return element;
}));

CascadeSelect.defaultProps = {
    __TYPE: 'CascadeSelect',
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
}

CascadeSelect.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
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
}
