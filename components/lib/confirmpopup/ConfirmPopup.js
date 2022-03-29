import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PrimeReact, { localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, classNames, ZIndexUtils, IconUtils } from '../utils/Utils';
import { useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export function confirmPopup(props) {
    const appendTo = props.appendTo || document.body;

    const confirmPopupWrapper = document.createDocumentFragment();
    DomHandler.appendChild(confirmPopupWrapper, appendTo);

    props = {...props, ...{ visible: props.visible === undefined ? true : props.visible }};

    const confirmPopupEl = React.createElement(ConfirmPopup, props);
    ReactDOM.render(confirmPopupEl, confirmPopupWrapper);

    const updateConfirmPopup = (newProps) => {
        props = { ...props, ...newProps };
        ReactDOM.render(React.cloneElement(confirmPopupEl, props), confirmPopupWrapper);
    };

    return {
        _destroy: () => {
            ReactDOM.unmountComponentAtNode(confirmPopupWrapper);
        },
        show: () => {
            updateConfirmPopup({ visible: true, onHide: () => {
                updateConfirmPopup({ visible: false }); // reset
            }});
        },
        hide: () => {
            updateConfirmPopup({ visible: false });
        },
        update: (newProps) => {
            updateConfirmPopup(newProps);
        }
    }
}

export const ConfirmPopup = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(false);
    const overlayRef = useRef(null);
    const acceptBtnRef = useRef(null);
    const isPanelClicked = useRef(false);
    const overlayEventListener = useRef(null);
    const acceptLabel = props.acceptLabel || localeOption('accept');
    const rejectLabel = props.rejectLabel || localeOption('reject');

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: props.target, overlay: overlayRef, listener: (event, { type, valid }) => {
            if (valid) {
                (type === 'outside') ? !isPanelClicked.current && hide() : hide();
            }

            isPanelClicked.current = false;
        }, when: visibleState
    });

    const onCloseClick = (event) => {
        hide();
        event.preventDefault();
    }

    const onPanelClick = (event) => {
        isPanelClicked.current = true;

        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: props.target
        });
    }

    const accept = () => {
        props.accept && props.accept();
        hide('accept');
    }

    const reject = () => {
        props.reject && props.reject();
        hide('reject');
    }

    const show = () => {
        setVisibleState(true);
        overlayEventListener.current = (e) => {
            !isOutsideClicked(e.target) && (isPanelClicked.current = true);
        };

        OverlayService.on('overlay-click', overlayEventListener.current);
    }

    const hide = (result) => {
        setVisibleState(false);
        OverlayService.off('overlay-click', overlayEventListener.current);
        overlayEventListener.current = null;
        props.onHide && props.onHide(result);
    }

    const onEnter = () => {
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        align();
    }

    const onEntered = () => {
        bindOverlayListener();

        if (acceptBtnRef && acceptBtnRef.current) {
            acceptBtnRef.current.focus();
        }

        props.onShow && props.onShow();
    }

    const onExit = () => {
        unbindOverlayListener();
    }

    const onExited = () => {
        ZIndexUtils.clear(overlayRef.current);
    }

    const align = () => {
        if (props.target) {
            DomHandler.absolutePosition(overlayRef.current, props.target);

            const containerOffset = DomHandler.getOffset(overlayRef.current);
            const targetOffset = DomHandler.getOffset(props.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
            overlayRef.current.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(overlayRef.current, 'p-confirm-popup-flipped');
            }
        }
    }

    const isOutsideClicked = (target) => {
        return overlayRef && overlayRef.current && !(overlayRef.current.isSameNode(target) || overlayRef.current.contains(target));
    }

    useEffect(() => {
        setVisibleState(props.visible);
    }, [props.visible]);

    useUnmountEffect(() => {
        if (overlayEventListener.current) {
            OverlayService.off('overlay-click', overlayEventListener.current);
            overlayEventListener.current = null;
        }

        ZIndexUtils.clear(overlayRef.current);
    });

    const createContent = () => {
        const message = ObjectUtils.getJSXElement(props.message, props);
        const icon = IconUtils.getJSXIcon(props.icon, { className: 'p-confirm-popup-icon' }, { props });

        return (
            <div className="p-confirm-popup-content">
                {icon}
                <span className="p-confirm-popup-message">{message}</span>
            </div>
        )
    }

    const createFooter = () => {
        const acceptClassName = classNames('p-confirm-popup-accept p-button-sm', props.acceptClassName);
        const rejectClassName = classNames('p-confirm-popup-reject p-button-sm', {
            'p-button-text': !props.rejectClassName
        }, props.rejectClassName);

        const content = (
            <div className="p-confirm-popup-footer">
                <Button label={rejectLabel} icon={props.rejectIcon} className={rejectClassName} onClick={reject} />
                <Button ref={acceptBtnRef} label={acceptLabel} icon={props.acceptIcon} className={acceptClassName} onClick={accept} />
            </div>
        )

        if (props.footer) {
            const defaultContentOptions = {
                accept: accept,
                reject: reject,
                className: 'p-confirm-popup-footer',
                acceptClassName,
                rejectClassName,
                acceptLabel,
                rejectLabel,
                element: content,
                props
            };

            return ObjectUtils.getJSXElement(props.footer, defaultContentOptions);
        }

        return content;
    }

    const createElement = () => {
        const className = classNames('p-confirm-popup p-component', props.className);
        const content = createContent();
        const footer = createFooter();

        return (
            <CSSTransition nodeRef={overlayRef} classNames="p-connected-overlay" in={visibleState} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                unmountOnExit onEnter={onEnter} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                <div ref={overlayRef} id={props.id} className={className} style={props.style} onClick={onPanelClick}>
                    {content}
                    {footer}
                </div>
            </CSSTransition>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} visible={props.visible} />
}));

ConfirmPopup.defaultProps = {
    __TYPE: 'ConfirmPopup',
    target: null,
    visible: false,
    message: null,
    rejectLabel: null,
    acceptLabel: null,
    icon: null,
    rejectIcon: null,
    acceptIcon: null,
    rejectClassName: null,
    acceptClassName: null,
    className: null,
    style: null,
    appendTo: null,
    dismissable: true,
    footer: null,
    onShow: null,
    onHide: null,
    accept: null,
    reject: null,
    transitionOptions: null
}

ConfirmPopup.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    target: PropTypes.any,
    visible: PropTypes.bool,
    message: PropTypes.any,
    rejectLabel: PropTypes.string,
    acceptLabel: PropTypes.string,
    icon: PropTypes.any,
    rejectIcon: PropTypes.any,
    acceptIcon: PropTypes.any,
    rejectClassName: PropTypes.string,
    acceptClassName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    dismissable: PropTypes.bool,
    footer: PropTypes.any,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    accept: PropTypes.func,
    reject: PropTypes.func,
    transitionOptions: PropTypes.object
}
