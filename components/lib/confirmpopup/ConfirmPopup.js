import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, IconUtils, ObjectUtils, ZIndexUtils } from '../utils/Utils';
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
        const props = ConfirmPopupBase.getProps(inProps);

        const [visibleState, setVisibleState] = React.useState(props.visible);
        const [reshowState, setReshowState] = React.useState(false);
        const overlayRef = React.useRef(null);
        const acceptBtnRef = React.useRef(null);
        const isPanelClicked = React.useRef(false);
        const overlayEventListener = React.useRef(null);
        const confirmProps = React.useRef(null);
        const getCurrentProps = () => confirmProps.current || props;
        const getPropValue = (key) => (confirmProps.current || props)[key];
        const callbackFromProp = (key, ...param) => ObjectUtils.getPropValue(getPropValue(key), param);

        const acceptLabel = getPropValue('acceptLabel') || localeOption('accept');
        const rejectLabel = getPropValue('rejectLabel') || localeOption('reject');

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
            callbackFromProp('accept');
            hide('accept');
        };

        const reject = () => {
            callbackFromProp('reject');
            hide('reject');
        };

        const show = () => {
            setVisibleState(true);
            setReshowState(false);

            overlayEventListener.current = (e) => {
                !isOutsideClicked(e.target) && (isPanelClicked.current = true);
            };

            OverlayService.on('overlay-click', overlayEventListener.current);
        };

        const hide = (result) => {
            setVisibleState(false);
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;

            if (result) {
                callbackFromProp('onHide', result);
            }
        };

        const onEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
            align();
        };

        const onEntered = () => {
            bindOverlayListener();

            if (acceptBtnRef.current) {
                acceptBtnRef.current.focus();
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
                    DomHandler.addClass(overlayRef.current, 'p-confirm-popup-flipped');
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
            const icon = IconUtils.getJSXIcon(getPropValue('icon'), { className: 'p-confirm-popup-icon' }, { props: currentProps });

            return (
                <div className="p-confirm-popup-content">
                    {icon}
                    <span className="p-confirm-popup-message">{message}</span>
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

            const content = (
                <div className="p-confirm-popup-footer">
                    <Button label={rejectLabel} icon={getPropValue('rejectIcon')} className={rejectClassName} onClick={reject} />
                    <Button ref={acceptBtnRef} label={acceptLabel} icon={getPropValue('acceptIcon')} className={acceptClassName} onClick={accept} />
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

        const createElement = () => {
            const otherProps = ConfirmPopupBase.getOtherProps(props);
            const className = classNames('p-confirm-popup p-component', getPropValue('className'), {
                'p-input-filled': PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': PrimeReact.ripple === false
            });
            const content = createContent();
            const footer = createFooter();

            return (
                <CSSTransition
                    nodeRef={overlayRef}
                    classNames="p-connected-overlay"
                    in={visibleState}
                    timeout={{ enter: 120, exit: 100 }}
                    options={getPropValue('transitionOptions')}
                    unmountOnExit
                    onEnter={onEnter}
                    onEntered={onEntered}
                    onExit={onExit}
                    onExited={onExited}
                >
                    <div ref={overlayRef} id={getPropValue('id')} className={className} style={getPropValue('style')} {...otherProps} onClick={onPanelClick}>
                        {content}
                        {footer}
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={getPropValue('appendTo')} visible={getPropValue('visible')} />;
    })
);

ConfirmPopup.displayName = 'ConfirmPopup';
