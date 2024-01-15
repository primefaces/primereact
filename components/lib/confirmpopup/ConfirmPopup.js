import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMergeProps, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { ConfirmPopupBase } from './ConfirmPopupBase';

export const confirmPopup = (props = {}) => {
    props = { ...props, ...{ visible: props.visible === undefined ? true : props.visible } };
    props.visible && OverlayService.emit('confirm-popup', props);

    const show = (updatedProps = {}) => {
        OverlayService.emit('confirm-popup', { ...props, ...updatedProps, ...{ visible: true } });
    };

    const hide = () => {
        OverlayService.emit('confirm-popup', { visible: false });
    };

    return { show, hide };
};

export const ConfirmPopup = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ConfirmPopupBase.getProps(inProps, context);

        const [visibleState, setVisibleState] = React.useState(props.visible);
        const [reshowState, setReshowState] = React.useState(false);
        const metaData = {
            props,
            state: {
                visible: visibleState,
                reshow: reshowState
            }
        };
        const { ptm, cx, isUnstyled } = ConfirmPopupBase.setMetaData(metaData);

        useHandleStyle(ConfirmPopupBase.css.styles, isUnstyled, { name: 'confirmpopup' });

        const overlayRef = React.useRef(null);
        const acceptBtnRef = React.useRef(null);
        const rejectBtnRef = React.useRef(null);
        const isPanelClicked = React.useRef(false);
        const overlayEventListener = React.useRef(null);
        const confirmProps = React.useRef(null);
        const focusElementOnHide = React.useRef(null);
        const isCallbackExecuting = React.useRef(false);
        const getCurrentProps = () => confirmProps.current || props;
        const getPropValue = (key) => (confirmProps.current || props)[key];
        const callbackFromProp = (key, ...param) => ObjectUtils.getPropValue(getPropValue(key), param);

        const acceptLabel = getPropValue('acceptLabel') || localeOption('accept');
        const rejectLabel = getPropValue('rejectLabel') || localeOption('reject');
        const displayOrder = useDisplayOrder('dialog', visibleState);

        useGlobalOnEscapeKey({
            callback: () => {
                if (props.dismissable && props.closeOnEscape) {
                    hide('hide');
                }
            },
            when: visibleState && displayOrder,
            priority: [ESC_KEY_HANDLING_PRIORITIES.DIALOG, displayOrder]
        });

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: getPropValue('target'),
            overlay: overlayRef,
            listener: (event, { type, valid }) => {
                if (valid) {
                    type === 'outside' ? props.dismissable && !isPanelClicked.current && hide('hide') : hide('hide');
                }

                isPanelClicked.current = false;
            },
            when: visibleState
        });

        const onPanelClick = (event) => {
            isPanelClicked.current = true;

            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: getPropValue('target')
            });
        };

        const accept = () => {
            if (!isCallbackExecuting.current) {
                isCallbackExecuting.current = true;
                callbackFromProp('accept');
                hide('accept');
            }
        };

        const reject = () => {
            if (!isCallbackExecuting.current) {
                isCallbackExecuting.current = true;
                callbackFromProp('reject');
                hide('reject');
            }
        };

        const show = () => {
            const currentProps = getCurrentProps();

            setReshowState(false);

            if (currentProps.group === props.group) {
                setVisibleState(true);
                isCallbackExecuting.current = false;

                overlayEventListener.current = (e) => {
                    !isOutsideClicked(e.target) && (isPanelClicked.current = true);
                };

                OverlayService.on('overlay-click', overlayEventListener.current);

                // Remember the focused element before we opened the dialog
                // so we can return focus to it once we close the dialog.
                focusElementOnHide.current = document.activeElement;
            }
        };

        const hide = (result) => {
            setVisibleState(false);
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;

            if (result) {
                callbackFromProp('onHide', result);
            }

            DomHandler.focus(focusElementOnHide.current);
            focusElementOnHide.current = null;
        };

        const onEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '50%', left: '50%', marginTop: '10px' });
            align();
        };

        const onEntered = () => {
            bindOverlayListener();

            const defaultFocus = getPropValue('defaultFocus');

            if (defaultFocus === undefined || defaultFocus === 'accept') {
                acceptBtnRef.current && acceptBtnRef.current.focus();
            }

            if (defaultFocus === 'reject') {
                rejectBtnRef.current && rejectBtnRef.current.focus();
            }

            callbackFromProp('onShow');
        };

        const onExit = () => {
            unbindOverlayListener();
        };

        const onExited = () => {
            ZIndexUtils.clear(overlayRef.current);
            isPanelClicked.current = false;
        };

        const align = () => {
            if (getPropValue('target')) {
                DomHandler.absolutePosition(overlayRef.current, getPropValue('target'));

                const containerOffset = DomHandler.getOffset(overlayRef.current);
                const targetOffset = DomHandler.getOffset(getPropValue('target'));
                let arrowLeft = 0;

                if (containerOffset.left < targetOffset.left) {
                    arrowLeft = targetOffset.left - containerOffset.left;
                }

                overlayRef.current.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

                if (containerOffset.top < targetOffset.top) {
                    !isUnstyled() && DomHandler.addClass(overlayRef.current, 'p-confirm-popup-flipped');
                }
            }
        };

        const isOutsideClicked = (target) => {
            return overlayRef && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
        };

        const confirm = (updatedProps) => {
            if (updatedProps.tagKey === props.tagKey) {
                const isVisibleChanged = visibleState !== updatedProps.visible;
                const targetChanged = getPropValue('target') !== updatedProps.target;

                if (targetChanged && !props.target) {
                    hide();
                    confirmProps.current = updatedProps;
                    setReshowState(true);
                } else if (isVisibleChanged) {
                    confirmProps.current = updatedProps;
                    updatedProps.visible ? show() : hide();
                }
            }
        };

        React.useEffect(() => {
            props.visible ? show() : hide();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.visible]);

        React.useEffect(() => {
            if (!props.target && !props.message) {
                OverlayService.on('confirm-popup', confirm);
            }

            return () => {
                OverlayService.off('confirm-popup', confirm);
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.target]);

        useUpdateEffect(() => {
            reshowState && show();
        }, [reshowState]);

        useUnmountEffect(() => {
            if (overlayEventListener.current) {
                OverlayService.off('overlay-click', overlayEventListener.current);
                overlayEventListener.current = null;
            }

            OverlayService.off('confirm-popup', confirm);
            ZIndexUtils.clear(overlayRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            confirm
        }));

        const createContent = () => {
            const currentProps = getCurrentProps();
            const message = ObjectUtils.getJSXElement(getPropValue('message'), currentProps);

            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                ptm('icon')
            );

            const icon = IconUtils.getJSXIcon(getPropValue('icon'), { ...iconProps }, { props: currentProps });
            const messageProps = mergeProps(
                {
                    className: cx('message')
                },
                ptm('message')
            );

            const contentProps = mergeProps(
                {
                    className: cx('content')
                },
                ptm('content')
            );

            return (
                <div {...contentProps}>
                    {icon}
                    <span {...messageProps}>{message}</span>
                </div>
            );
        };

        const createFooter = () => {
            const acceptClassName = classNames('p-confirm-popup-accept p-button-sm', getPropValue('acceptClassName'));
            const rejectClassName = classNames(
                'p-confirm-popup-reject p-button-sm',
                {
                    'p-button-text': !getPropValue('rejectClassName')
                },
                getPropValue('rejectClassName')
            );

            const footerProps = mergeProps(
                {
                    className: cx('footer')
                },
                ptm('footer')
            );

            const rejectButtonProps = mergeProps({
                ref: rejectBtnRef,
                label: rejectLabel,
                icon: getPropValue('rejectIcon'),
                className: cx('rejectButton', { getPropValue }),
                onClick: reject,
                pt: ptm('rejectButton'),
                unstyled: props.unstyled,
                __parentMetadata: {
                    parent: metaData
                }
            });

            const acceptButtonProps = mergeProps({
                ref: acceptBtnRef,
                label: acceptLabel,
                icon: getPropValue('acceptIcon'),
                className: cx('acceptButton', { getPropValue }),
                onClick: accept,
                pt: ptm('acceptButton'),
                unstyled: props.unstyled,
                __parentMetadata: {
                    parent: metaData
                }
            });

            const content = (
                <div {...footerProps}>
                    <Button {...rejectButtonProps} />
                    <Button {...acceptButtonProps} />
                </div>
            );

            if (getPropValue('footer')) {
                const defaultContentOptions = {
                    accept,
                    reject,
                    className: 'p-confirm-popup-footer',
                    acceptClassName,
                    rejectClassName,
                    acceptLabel,
                    rejectLabel,
                    element: content,
                    props: getCurrentProps()
                };

                return ObjectUtils.getJSXElement(getPropValue('footer'), defaultContentOptions);
            }

            return content;
        };

        const rootProps = mergeProps(
            {
                ref: overlayRef,
                id: getPropValue('id'),
                className: cx('root', { context, getPropValue }),
                style: getPropValue('style'),
                onClick: onPanelClick
            },
            ConfirmPopupBase.getOtherProps(props),
            ptm('root')
        );

        const transitionProps = mergeProps(
            {
                classNames: cx('transition'),
                in: visibleState,
                timeout: { enter: 120, exit: 100 },
                options: getPropValue('transitionOptions'),
                unmountOnExit: true,
                onEnter,
                onEntered,
                onExit,
                onExited
            },
            ptm('transition')
        );

        const createTemplateElement = () => {
            const currentProps = getCurrentProps();
            const message = ObjectUtils.getJSXElement(getPropValue('message'), currentProps);
            const templateElementProps = {
                message,
                acceptBtnRef,
                rejectBtnRef,
                hide
            };

            return (
                <CSSTransition nodeRef={overlayRef} {...transitionProps}>
                    <div {...rootProps}>{ObjectUtils.getJSXElement(inProps.content, templateElementProps)}</div>
                </CSSTransition>
            );
        };

        const createElement = () => {
            const content = createContent();
            const footer = createFooter();

            return (
                <CSSTransition nodeRef={overlayRef} {...transitionProps}>
                    <div {...rootProps}>
                        {content}
                        {footer}
                    </div>
                </CSSTransition>
            );
        };

        const element = inProps?.content ? createTemplateElement() : createElement();

        return <Portal element={element} appendTo={getPropValue('appendTo')} visible={getPropValue('visible')} />;
    })
);

ConfirmPopup.displayName = 'ConfirmPopup';
