import React, { useState, useRef, forwardRef, useImperativeHandle, createRef, memo } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { ToastMessage } from './ToastMessage';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { classNames, ZIndexUtils } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

let messageIdx = 0;

export const Toast = memo(forwardRef((props, ref) => {
    const [messagesState, setMessagesState] = useState([]);
    const containerRef = useRef(null);

    const show = (value) => {
        if (value) {
            let messages;

            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    value[i].id = messageIdx++;
                    messages = [...messagesState, ...value];
                }
            }
            else {
                value.id = messageIdx++;
                messages = messagesState ? [...messagesState, value] : [value];
            }

            messagesState.length === 0 && ZIndexUtils.set('toast', containerRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['toast']);

            setMessagesState(messages);
        }
    }

    const clear = () => {
        ZIndexUtils.clear(containerRef.current);
        setMessagesState([]);
    }

    const onClose = (message) => {
        const messages = messagesState.filter(msg => msg.id !== message.id);
        setMessagesState(messages);

        props.onRemove && props.onRemove(message);
    }

    const onEntered = () => {
        props.onShow && props.onShow();
    }

    const onExited = () => {
        messagesState.length === 0 && ZIndexUtils.clear(containerRef.current);

        props.onHide && props.onHide();
    }

    useUnmountEffect(() => {
        ZIndexUtils.clear(containerRef.current);
    });

    useImperativeHandle(ref, () => ({
        show,
        clear
    }));

    const createElement = () => {
        const className = classNames('p-toast p-component p-toast-' + props.position, props.className);

        return (
            <div ref={containerRef} id={props.id} className={className} style={props.style}>
                <TransitionGroup>
                    {
                        messagesState.map((message) => {
                            const messageRef = createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={message.id} classNames="p-toast-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} onEntered={onEntered} onExited={onExited} options={props.transitionOptions}>
                                    <ToastMessage ref={messageRef} message={message} onClick={props.onClick} onClose={onClose} />
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />
}))

Toast.defaultProps = {
    __TYPE: 'Toast',
    id: null,
    className: null,
    style: null,
    baseZIndex: 0,
    position: 'top-right',
    transitionOptions: null,
    appendTo: 'self',
    onClick: null,
    onRemove: null,
    onShow: null,
    onHide: null
}

Toast.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    baseZIndex: PropTypes.number,
    position: PropTypes.string,
    transitionOptions: PropTypes.object,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
