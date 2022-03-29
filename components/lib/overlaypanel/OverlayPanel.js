import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ZIndexUtils, classNames, UniqueComponentId } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const OverlayPanel = forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(false);
    const attributeSelector = useRef('');
    const overlayRef = useRef(null);
    const currentTargetRef = useRef(null);
    const isPanelClicked = useRef(false);
    const styleElement = useRef(null);
    const overlayEventListener = useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: currentTargetRef, overlay: overlayRef, listener: (event, { type, valid }) => {
            if (valid) {
                (type === 'outside') ? !isPanelClicked.current && hide() : hide();
            }

            isPanelClicked.current = false;
        }, when: visibleState
    });

    const isOutsideClicked = (target) => {
        return overlayRef && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
    }

    const hasTargetChanged = (event, target) => {
        return currentTargetRef.current != null && currentTargetRef.current !== (target || event.currentTarget || event.target);
    }

    const onCloseClick = (event) => {
        hide();

        event.preventDefault();
    }

    const onPanelClick = (event) => {
        isPanelClicked.current = true;

        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: currentTargetRef.current
        });
    }

    const onContentClick = () => {
        isPanelClicked.current = true;
    }

    const toggle = (event, target) => {
        if (visibleState) {
            hide();

            if (hasTargetChanged(event, target)) {
                currentTargetRef.current = target || event.currentTarget || event.target;

                setTimeout(() => {
                    show(event, currentTargetRef.current);
                }, 200);
            }
        }
        else {
            show(event, target);
        }
    }

    const show = (event, target) => {
        currentTargetRef.current = target || event.currentTarget || event.target;

        if (visibleState) {
            align();
        }
        else {
            setVisibleState(true);

            overlayEventListener.current = (e) => {
                if (!isOutsideClicked(e.target)) {
                    isPanelClicked.current = true;
                }
            };

            OverlayService.on('overlay-click', overlayEventListener.current);
        }
    }

    const hide = () => {
        setVisibleState(false);

        OverlayService.off('overlay-click', overlayEventListener.current);
        overlayEventListener.current = null;
    }

    const onEnter = () => {
        overlayRef.current.setAttribute(attributeSelector.current, '');
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        align();
    }

    const onEntered = () => {
        bindOverlayListener();

        props.onShow && props.onShow();
    }

    const onExit = () => {
        unbindOverlayListener();
    }

    const onExited = () => {
        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const align = () => {
        if (currentTargetRef.current) {
            DomHandler.absolutePosition(overlayRef.current, currentTargetRef.current);

            const containerOffset = DomHandler.getOffset(overlayRef.current);
            const targetOffset = DomHandler.getOffset(currentTargetRef.current);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
            overlayRef.current.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(overlayRef.current, 'p-overlaypanel-flipped');
            }
        }
    }

    const createStyle = () => {
        if (!styleElement.current) {
            styleElement.current = DomHandler.createInlineStyle(PrimeReact.nonce);

            let innerHTML = '';
            for (let breakpoint in props.breakpoints) {
                innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-overlaypanel[${attributeSelector.current}] {
                            width: ${props.breakpoints[breakpoint]} !important;
                        }
                    }
                `
            }

            styleElement.innerHTML = innerHTML;
        }
    }

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

    useImperativeHandle(ref, () => ({
        toggle,
        show,
        hide
    }));

    const createCloseIcon = () => {
        if (props.showCloseIcon) {
            return (
                <button type="button" className="p-overlaypanel-close p-link" onClick={onCloseClick} aria-label={props.ariaCloseLabel}>
                    <span className="p-overlaypanel-close-icon pi pi-times"></span>
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createElement = () => {
        const className = classNames('p-overlaypanel p-component', props.className);
        const closeIcon = createCloseIcon();

        return (
            <CSSTransition nodeRef={overlayRef} classNames="p-overlaypanel" in={visibleState} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                <div ref={overlayRef} id={props.id} className={className} style={props.style} onClick={onPanelClick}>
                    <div className="p-overlaypanel-content" onClick={onContentClick} onMouseDown={onContentClick}>
                        {props.children}
                    </div>
                    {closeIcon}
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />
});

OverlayPanel.defaultProps = {
    __TYPE: 'OverlayPanel',
    id: null,
    dismissable: true,
    showCloseIcon: false,
    style: null,
    className: null,
    appendTo: null,
    breakpoints: null,
    ariaCloseLabel: 'close',
    transitionOptions: null,
    onShow: null,
    onHide: null
}

OverlayPanel.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    dismissable: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    breakpoints: PropTypes.object,
    ariaCloseLabel: PropTypes.string,
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
