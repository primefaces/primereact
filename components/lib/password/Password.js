import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { EyeIcon } from '../icons/eye';
import { EyeSlashIcon } from '../icons/eyeslash';
import { InputText } from '../inputtext/InputText';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { PasswordBase } from './PasswordBase';

export const Password = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = PasswordBase.getProps(inProps, context);

        const promptLabel = props.promptLabel || localeOption('passwordPrompt');
        const weakLabel = props.weakLabel || localeOption('weak');
        const mediumLabel = props.mediumLabel || localeOption('medium');
        const strongLabel = props.strongLabel || localeOption('strong');

        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const [meterState, setMeterState] = React.useState(null);
        const [infoTextState, setInfoTextState] = React.useState(promptLabel);
        const [focusedState, setFocusedState] = React.useState(false);
        const [unmaskedState, setUnmaskedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const mediumCheckRegExp = React.useRef(new RegExp(props.mediumRegex));
        const strongCheckRegExp = React.useRef(new RegExp(props.strongRegex));
        const type = unmaskedState ? 'text' : 'password';
        const metaData = {
            props,
            state: {
                overlayVisible: overlayVisibleState,
                meter: meterState,
                infoText: infoTextState,
                focused: focusedState,
                unmasked: unmaskedState
            }
        };
        const { ptm, cx, isUnstyled } = PasswordBase.setMetaData(metaData);

        useHandleStyle(PasswordBase.css.styles, isUnstyled, { name: 'password' });

        const passwordDisplayOrder = useDisplayOrder('password', overlayVisibleState);

        useGlobalOnEscapeKey({
            callback: () => {
                hide();
            },
            when: overlayVisibleState && props.feedback && passwordDisplayOrder,
            priority: [ESC_KEY_HANDLING_PRIORITIES.PASSWORD, passwordDisplayOrder]
        });
        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { valid }) => {
                valid && hide();
            },
            when: overlayVisibleState
        });

        const currentValue = inputRef.current && inputRef.current.value;
        const isFilled = React.useMemo(() => ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || ObjectUtils.isNotEmpty(currentValue), [props.value, props.defaultValue, currentValue]);

        const updateLabels = () => {
            if (meterState) {
                let label = null;

                switch (meterState.strength) {
                    case 'weak':
                        label = weakLabel;
                        break;

                    case 'medium':
                        label = mediumLabel;
                        break;

                    case 'strong':
                        label = strongLabel;
                        break;

                    default:
                        break;
                }

                if (label && infoTextState !== label) {
                    setInfoTextState(label);
                }
            } else {
                if (infoTextState !== promptLabel) {
                    setInfoTextState(promptLabel);
                }
            }
        };

        const onPanelClick = (event) => {
            if (props.feedback) {
                OverlayService.emit('overlay-click', {
                    originalEvent: event,
                    target: elementRef.current
                });
            }
        };

        const toggleMask = () => {
            setUnmaskedState((prevUnmasked) => !prevUnmasked);
        };

        const show = () => {
            updateLabels();
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
        };

        const alignOverlay = () => {
            if (inputRef.current) {
                DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
            }
        };

        const onOverlayEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
            alignOverlay();
        };

        const onOverlayEntered = () => {
            bindOverlayListener();

            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const onFocus = (event) => {
            setFocusedState(true);

            if (props.feedback) {
                show();
            }

            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocusedState(false);

            if (props.feedback) {
                hide();
            }

            props.onBlur && props.onBlur(event);
        };

        const onKeyup = (e) => {
            const keyCode = e.code;

            if (props.feedback) {
                let value = e.target.value;
                let label = null;
                let meter = null;

                switch (testStrength(value)) {
                    case 1:
                        label = weakLabel;
                        meter = {
                            strength: 'weak',
                            width: '33.33%'
                        };
                        break;

                    case 2:
                        label = mediumLabel;
                        meter = {
                            strength: 'medium',
                            width: '66.66%'
                        };
                        break;

                    case 3:
                        label = strongLabel;
                        meter = {
                            strength: 'strong',
                            width: '100%'
                        };
                        break;

                    default:
                        label = promptLabel;
                        meter = null;
                        break;
                }

                setMeterState(meter);
                setInfoTextState(label);

                if (!!keyCode && keyCode !== 'Escape' && !overlayVisibleState) {
                    show();
                }
            }

            props.onKeyUp && props.onKeyUp(e);
        };

        const onInput = (event, validatePattern) => {
            if (props.onInput) {
                props.onInput(event, validatePattern);
            }

            if (!props.onChange) {
                ObjectUtils.isNotEmpty(event.target.value) ? DomHandler.addClass(elementRef.current, 'p-inputwrapper-filled') : DomHandler.removeClass(elementRef.current, 'p-inputwrapper-filled');
            }
        };

        const testStrength = (str) => {
            if (strongCheckRegExp.current.test(str)) return 3;
            else if (mediumCheckRegExp.current.test(str)) return 2;
            else if (str.length) return 1;

            return 0;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            toggleMask,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        React.useEffect(() => {
            mediumCheckRegExp.current = new RegExp(props.mediumRegex);
        }, [props.mediumRegex]);

        React.useEffect(() => {
            strongCheckRegExp.current = new RegExp(props.strongRegex);
        }, [props.strongRegex]);

        React.useEffect(() => {
            if (!isFilled && DomHandler.hasClass(elementRef.current, 'p-inputwrapper-filled')) {
                DomHandler.removeClass(elementRef.current, 'p-inputwrapper-filled');
            }
        }, [isFilled]);

        useMountEffect(() => {
            alignOverlay();
        });

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        const createIcon = () => {
            let icon;

            const hideIconProps = mergeProps(
                {
                    key: 'hideIcon',
                    role: 'button',
                    tabIndex: props.tabIndex,
                    className: cx('hideIcon'),
                    onClick: toggleMask
                },
                ptm('hideIcon')
            );

            const showIconProps = mergeProps(
                {
                    key: 'showIcon',
                    role: 'button',
                    tabIndex: props.tabIndex,
                    className: cx('showIcon'),
                    onClick: toggleMask
                },
                ptm('showIcon')
            );

            if (unmaskedState) {
                icon = props.hideIcon || <EyeSlashIcon {...hideIconProps} />;
            } else {
                icon = props.showIcon || <EyeIcon {...showIconProps} />;
            }

            const eyeIcon = IconUtils.getJSXIcon(icon, unmaskedState ? { ...hideIconProps } : { ...showIconProps }, { props });

            if (props.toggleMask) {
                let content = eyeIcon;

                if (props.icon) {
                    const defaultIconOptions = {
                        onClick: toggleMask,
                        className,
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.icon, defaultIconOptions);
                }

                return content;
            }

            return null;
        };

        const createPanel = () => {
            const { strength, width } = meterState || { strength: '', width: '0%' };
            const header = ObjectUtils.getJSXElement(props.header, props);
            const footer = ObjectUtils.getJSXElement(props.footer, props);
            const panelProps = mergeProps(
                {
                    className: cx('panel', { context }),
                    style: props.panelStyle,
                    onClick: onPanelClick
                },
                ptm('panel')
            );

            const meterProps = mergeProps(
                {
                    className: cx('meter')
                },
                ptm('meter')
            );
            const meterLabelProps = mergeProps(
                {
                    className: cx('meterLabel', { strength }),
                    style: { width }
                },
                ptm('meterLabel')
            );
            const infoProps = mergeProps(
                {
                    className: cx('info', { strength })
                },
                ptm('info')
            );

            const content = props.content ? (
                ObjectUtils.getJSXElement(props.content, props)
            ) : (
                <>
                    <div {...meterProps}>
                        <div {...meterLabelProps}></div>
                    </div>
                    <div {...infoProps}>{infoTextState}</div>
                </>
            );

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

            const panel = (
                <CSSTransition nodeRef={overlayRef} {...transitionProps}>
                    <div ref={overlayRef} {...panelProps}>
                        {header}
                        {content}
                        {footer}
                    </div>
                </CSSTransition>
            );

            return <Portal element={panel} appendTo={props.appendTo} />;
        };

        const className = classNames(
            'p-password p-component p-inputwrapper',
            {
                'p-inputwrapper-filled': isFilled,
                'p-inputwrapper-focus': focusedState,
                'p-input-icon-right': props.toggleMask
            },
            props.className
        );

        const inputProps = PasswordBase.getOtherProps(props);
        const icon = createIcon();
        const panel = createPanel();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: cx('root', { isFilled, focusedState }),
                style: props.style
            },
            ptm('root')
        );

        const inputTextProps = mergeProps(
            {
                ref: inputRef,
                id: props.inputId,
                ...inputProps,
                className: classNames(props.inputClassName, cx('input')),
                onBlur: onBlur,
                onFocus: onFocus,
                onInput: onInput,
                onKeyUp: onKeyup,
                style: props.inputStyle,
                tabIndex: props.tabIndex,
                tooltip: props.tooltip,
                tooltipOptions: props.tooltipOptions,
                type: type,
                value: props.value,
                __parentMetadata: {
                    parent: metaData
                }
            },
            ptm('input')
        );

        return (
            <div {...rootProps}>
                <InputText {...inputTextProps} />
                {icon}
                {panel}
            </div>
        );
    })
);

Password.displayName = 'Password';
