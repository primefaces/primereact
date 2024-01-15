import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { SpinnerIcon } from '../icons/spinner';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils } from '../utils/Utils';
import { CascadeSelectBase } from './CascadeSelectBase';
import { CascadeSelectSub } from './CascadeSelectSub';

export const CascadeSelect = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = CascadeSelectBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const { ptm, cx, isUnstyled } = CascadeSelectBase.setMetaData({
            props,
            state: {
                focused: focusedState,
                overlayVisible: overlayVisibleState,
                attributeSelector: attributeSelectorState
            },
            context: {
                ...context
            }
        });

        useHandleStyle(CascadeSelectBase.css.styles, isUnstyled, { name: 'cascadeselect' });

        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const inputRef = React.useRef(null);
        const labelRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const dirty = React.useRef(false);
        const selectionPath = React.useRef(null);

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { valid }) => {
                valid && hide();
            },
            when: overlayVisibleState
        });

        const cascadeSelectOverlayDisplayOrder = useDisplayOrder('cascade-select', overlayVisibleState);

        useGlobalOnEscapeKey({
            callback: () => {
                hide();
            },
            when: overlayVisibleState && cascadeSelectOverlayDisplayOrder,
            priority: [ESC_KEY_HANDLING_PRIORITIES.CASCADE_SELECT, cascadeSelectOverlayDisplayOrder]
        });

        const onOptionSelect = (event) => {
            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: event.value
                });
            }

            updateSelectionPath();
            hide();
            DomHandler.focus(inputRef.current);
        };

        const onOptionGroupSelect = (event) => {
            dirty.current = true;
            props.onGroupChange && props.onGroupChange(event);
        };

        const getOptionLabel = (option) => {
            const label = props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option;

            return label || option;
        };

        const getOptionValue = (option) => {
            return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option;
        };

        const getOptionGroupChildren = (optionGroup, level) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren[level]);
        };

        const isOptionGroup = (option, level) => {
            return Object.prototype.hasOwnProperty.call(option, props.optionGroupChildren[level]);
        };

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
        };

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
            } else if (ObjectUtils.equals(props.value, getOptionValue(option), props.dataKey)) {
                return [option];
            }

            return null;
        };

        const onClick = (event) => {
            if (props.disabled || props.loading) {
                return;
            }

            if (!overlayRef.current || !overlayRef.current.contains(event.target)) {
                DomHandler.focus(inputRef.current);
                overlayVisibleState ? hide() : show();
            }
        };

        const onInputFocus = () => {
            setFocusedState(true);
        };

        const onInputBlur = () => {
            setFocusedState(false);
        };

        const onInputKeyDown = (event) => {
            switch (event.which) {
                //down
                case 40:
                    if (overlayVisibleState) {
                        DomHandler.findSingle(overlayRef.current, '[data-pc-section="item"]').children[0].focus();
                    } else if (event.altKey && props.options && props.options.length) {
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
        };

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const show = () => {
            props.onBeforeShow && props.onBeforeShow();
            setOverlayVisibleState(true);
        };

        const hide = () => {
            props.onBeforeHide && props.onBeforeHide();
            setOverlayVisibleState(false);
            DomHandler.focus(inputRef.current);
        };

        const onOverlayEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
            alignOverlay();

            if (attributeSelectorState && props.breakpoint) {
                overlayRef.current.setAttribute(attributeSelectorState + '_panel', '');
                createStyle();
            }
        };

        const onOverlayEntered = () => {
            bindOverlayListener();
            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
            dirty.current = false;
        };

        const onOverlayExited = () => {
            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
            destroyStyle();
        };

        const alignOverlay = () => {
            DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
        };

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

                const selector = `${attributeSelectorState}_panel`;
                const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-cascadeselect-panel[${selector}] .p-cascadeselect-items-wrapper > ul {
        max-height: ${props.scrollHeight};
        overflow: ${props.scrollHeight ? 'auto' : ''};
    }

    .p-cascadeselect-panel[${selector}] .p-cascadeselect-sublist {
        position: relative;
    }

    .p-cascadeselect-panel[${selector}] .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-cascadeselect-panel[${selector}] .p-cascadeselect-group-icon:before {
        content: "\\e930";
    }
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current,
            getLabel: () => labelRef.current,
            focus: () => DomHandler.focus(inputRef.current)
        }));

        useMountEffect(() => {
            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(UniqueComponentId());
            }

            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }

            alignOverlay();
        });

        React.useEffect(() => {
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
            const hiddenSelectedMessageProps = mergeProps(
                {
                    className: 'p-hidden-accessible'
                },
                ptm('hiddenSelectedMessage')
            );

            const inputProps = mergeProps(
                {
                    ref: inputRef,
                    type: 'text',
                    id: props.inputId,
                    name: props.name,
                    defaultValue: value,
                    readOnly: true,
                    disabled: props.disabled,
                    onFocus: onInputFocus,
                    onBlur: onInputBlur,
                    onKeyDown: (e) => onInputKeyDown(e),
                    tabIndex: props.tabIndex,
                    'aria-haspopup': 'listbox',
                    ...ariaProps
                },
                ptm('input')
            );

            return (
                <div {...hiddenSelectedMessageProps}>
                    <input {...inputProps} />
                </div>
            );
        };

        const createLabel = () => {
            const label = props.value ? getOptionLabel(props.value) : props.placeholder || 'p-emptylabel';

            const labelProps = mergeProps(
                {
                    ref: labelRef,
                    className: cx('label', { label })
                },
                ptm('label', { context: { label, ...context } })
            );

            return <span {...labelProps}>{label}</span>;
        };

        const createLoadingIcon = () => {
            const loadingIconProps = mergeProps(
                {
                    className: cx('loadingIcon')
                },
                ptm('loadingIcon')
            );
            const icon = props.loadingIcon || <SpinnerIcon spin />;
            const loadingIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });
            const loadingButtonProps = mergeProps(
                {
                    className: cx('loadingButton'),
                    role: 'button',
                    'aria-haspopup': 'listbox',
                    'aria-expanded': overlayVisibleState
                },
                ptm('dropdownButton')
            );

            return <div {...loadingButtonProps}>{loadingIcon}</div>;
        };

        const createDropdownIcon = () => {
            const dropdownIconProps = mergeProps(
                {
                    className: cx('dropdownIcon')
                },
                ptm('dropdownIcon')
            );
            const icon = props.dropdownIcon || <ChevronDownIcon {...dropdownIconProps} />;
            const dropdownIcon = IconUtils.getJSXIcon(icon, { ...dropdownIconProps }, { props });
            const dropdownButtonProps = mergeProps(
                {
                    className: cx('dropdownButton'),
                    role: 'button',
                    'aria-haspopup': 'listbox',
                    'aria-expanded': overlayVisibleState
                },
                ptm('dropdownButton')
            );

            return <div {...dropdownButtonProps}>{dropdownIcon}</div>;
        };

        const wrapperProps = mergeProps(
            {
                className: cx('wrapper')
            },
            ptm('wrapper')
        );

        const panelProps = mergeProps(
            {
                ref: overlayRef,
                className: cx('panel'),
                onClick: (e) => onPanelClick(e)
            },
            ptm('panel')
        );

        const createOverlay = () => {
            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: overlayVisibleState,
                    timeout: { enter: 120, exit: 100 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter: onOverlayEnter,
                    onEntered: onOverlayEntered,
                    onExit: onOverlayExit,
                    onExited: onOverlayExited
                },
                ptm('transition')
            );

            const overlay = (
                <CSSTransition nodeRef={overlayRef} {...transitionProps}>
                    <div {...panelProps}>
                        <div {...wrapperProps}>
                            <CascadeSelectSub
                                hostName="CascadeSelect"
                                options={props.options}
                                selectionPath={selectionPath.current}
                                optionGroupIcon={props.optionGroupIcon}
                                optionLabel={props.optionLabel}
                                optionValue={props.optionValue}
                                parentActive={props.value != null}
                                level={0}
                                optionGroupLabel={props.optionGroupLabel}
                                optionGroupChildren={props.optionGroupChildren}
                                onOptionSelect={onOptionSelect}
                                onOptionGroupSelect={onOptionGroupSelect}
                                root
                                template={props.itemTemplate}
                                onPanelHide={hide}
                                ptm={ptm}
                                cx={cx}
                            />
                        </div>
                    </div>
                </CSSTransition>
            );

            return <Portal element={overlay} appendTo={props.appendTo} />;
        };

        const createElement = () => {
            const keyboardHelper = createKeyboardHelper();
            const labelElement = createLabel();
            const dropdownIcon = props.loading ? createLoadingIcon() : createDropdownIcon();
            const overlay = createOverlay();
            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className: cx('root', { focusedState, overlayVisibleState }),
                    style: props.style,
                    onClick: (e) => onClick(e)
                },
                otherProps,
                ptm('root')
            );

            return (
                <div {...rootProps}>
                    {keyboardHelper}
                    {labelElement}
                    {dropdownIcon}
                    {overlay}
                </div>
            );
        };

        const otherProps = CascadeSelectBase.getOtherProps(props);
        const dataProps = ObjectUtils.reduceKeys(otherProps, DomHandler.DATA_PROPS);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const element = createElement();

        return element;
    })
);

CascadeSelect.displayName = 'CascadeSelect';
