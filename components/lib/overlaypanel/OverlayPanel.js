import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { TimesIcon } from '../icons/times';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, UniqueComponentId, ZIndexUtils } from '../utils/Utils';
import { OverlayPanelBase } from './OverlayPanelBase';

export const OverlayPanel = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = OverlayPanelBase.getProps(inProps, context);
    const [visibleState, setVisibleState] = React.useState(false);

    const { ptm, cx, sx, isUnstyled } = OverlayPanelBase.setMetaData({
        props,
        state: {
            visible: visibleState
        }
    });

    useHandleStyle(OverlayPanelBase.css.styles, isUnstyled, { name: 'overlaypanel' });

    const attributeSelector = React.useRef('');
    const overlayRef = React.useRef(null);
    const currentTargetRef = React.useRef(null);
    const isPanelClicked = React.useRef(false);
    const styleElement = React.useRef(null);
    const overlayEventListener = React.useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: currentTargetRef,
        overlay: overlayRef,
        listener: (event, { type, valid }) => {
            if (valid) {
                switch (type) {
                    case 'outside':
                        props.dismissable && !isPanelClicked.current && hide();
                        break;
                    case 'resize':
                    case 'scroll':
                    case 'orientationchange':
                        align();
                        break;
                }
            }

            isPanelClicked.current = false;
        },
        when: visibleState
    });

    const overlayPanelDisplayOrder = useDisplayOrder('overlay-panel', visibleState);

    useGlobalOnEscapeKey({
        callback: () => {
            hide();
        },
        when: visibleState && props.closeOnEscape && overlayPanelDisplayOrder,
        priority: [ESC_KEY_HANDLING_PRIORITIES.OVERLAY_PANEL, overlayPanelDisplayOrder]
    });

    const isOutsideClicked = (target) => {
        return overlayRef && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
    };

    const hasTargetChanged = (event, target) => {
        return currentTargetRef.current != null && currentTargetRef.current !== (target || event.currentTarget || event.target);
    };

    const onCloseClick = (event) => {
        hide();

        event.preventDefault();
    };

    const onPanelClick = (event) => {
        isPanelClicked.current = true;

        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: currentTargetRef.current
        });
    };

    const onContentClick = () => {
        isPanelClicked.current = true;
    };

    const toggle = (event, target) => {
        if (visibleState) {
            hide();

            if (hasTargetChanged(event, target)) {
                currentTargetRef.current = target || event.currentTarget || event.target;

                setTimeout(() => {
                    show(event, currentTargetRef.current);
                }, 200);
            }
        } else {
            show(event, target);
        }
    };

    const show = (event, target) => {
        currentTargetRef.current = target || event.currentTarget || event.target;

        if (visibleState) {
            align();
        } else {
            setVisibleState(true);

            overlayEventListener.current = (e) => {
                !isOutsideClicked(e.target) && (isPanelClicked.current = true);
            };

            OverlayService.on('overlay-click', overlayEventListener.current);
        }
    };

    const hide = () => {
        setVisibleState(false);

        OverlayService.off('overlay-click', overlayEventListener.current);
        overlayEventListener.current = null;
    };

    const onEnter = () => {
        overlayRef.current.setAttribute(attributeSelector.current, '');
        ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
        DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
        align();
    };

    const onEntered = () => {
        bindOverlayListener();

        props.onShow && props.onShow();
    };

    const onExit = () => {
        unbindOverlayListener();
    };

    const onExited = () => {
        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    };

    const align = () => {
        if (currentTargetRef.current && overlayRef.current) {
            DomHandler.absolutePosition(overlayRef.current, currentTargetRef.current);

            const containerOffset = DomHandler.getOffset(overlayRef.current);
            const targetOffset = DomHandler.getOffset(currentTargetRef.current);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }

            overlayRef.current.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                overlayRef.current.setAttribute('data-p-overlaypanel-flipped', 'true');
                isUnstyled && DomHandler.addClass(overlayRef.current, 'p-overlaypanel-flipped');
            } else {
                overlayRef.current.setAttribute('data-p-overlaypanel-flipped', 'false');
                isUnstyled && DomHandler.removeClass(overlayRef.current, 'p-overlaypanel-flipped');
            }
        }
    };

    const createStyle = () => {
        if (!styleElement.current) {
            styleElement.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce, context && context.styleContainer);

            let innerHTML = '';

            for (let breakpoint in props.breakpoints) {
                innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-overlaypanel[${attributeSelector.current}] {
                            width: ${props.breakpoints[breakpoint]};
                        }
                    }
                `;
            }

            styleElement.current.innerHTML = innerHTML;
        }
    };

    useMountEffect(() => {
        attributeSelector.current = UniqueComponentId();

        if (props.breakpoints) {
            createStyle();
        }
    });

    useUnmountEffect(() => {
        styleElement.current = DomHandler.removeInlineStyle(styleElement.current);

        if (overlayEventListener.current) {
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
        }

        ZIndexUtils.clear(overlayRef.current);
    });

    React.useImperativeHandle(ref, () => ({
        props,
        toggle,
        show,
        hide,
        align,
        getElement: () => overlayRef.current
    }));

    const createCloseIcon = () => {
        const closeIconProps = mergeProps(
            {
                className: cx('closeIcon'),
                'aria-hidden': true
            },
            ptm('closeIcon')
        );
        const icon = props.closeIcon || <TimesIcon {...closeIconProps} />;
        const closeIcon = IconUtils.getJSXIcon(icon, { ...closeIconProps }, { props });
        const ariaLabel = props.ariaCloseLabel || localeOption('close');
        const closeButtonProps = mergeProps(
            {
                type: 'button',
                className: cx('closeButton'),
                onClick: (e) => onCloseClick(e),
                'aria-label': ariaLabel
            },
            ptm('closeButton')
        );

        if (props.showCloseIcon) {
            return (
                <button {...closeButtonProps}>
                    {closeIcon}
                    <Ripple />
                </button>
            );
        }

        return null;
    };

    const createElement = () => {
        const closeIcon = createCloseIcon();
        const rootProps = mergeProps(
            {
                id: props.id,
                className: cx('root', { context }),
                style: props.style,
                onClick: (e) => onPanelClick(e)
            },
            OverlayPanelBase.getOtherProps(props),
            ptm('root')
        );

        const contentProps = mergeProps(
            {
                className: cx('content'),
                onClick: (e) => onContentClick(e),
                onMouseDown: onContentClick
            },
            OverlayPanelBase.getOtherProps(props),
            ptm('content')
        );

        const transitionProps = mergeProps(
            {
                classNames: cx('transition'),
                in: visibleState,
                timeout: { enter: 120, exit: 100 },
                options: props.transitionOptions,
                unmountOnExit: true,
                onEnter: onEnter,
                onEntered: onEntered,
                onExit: onExit,
                onExited: onExited
            },
            ptm('transition')
        );

        return (
            <CSSTransition nodeRef={overlayRef} {...transitionProps}>
                <div ref={overlayRef} {...rootProps}>
                    <div {...contentProps}>{props.children}</div>
                    {closeIcon}
                </div>
            </CSSTransition>
        );
    };

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />;
});

OverlayPanel.displayName = 'OverlayPanel';
