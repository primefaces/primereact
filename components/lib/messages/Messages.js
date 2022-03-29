import React, { useState, forwardRef, useImperativeHandle, createRef, memo } from 'react';
import PropTypes from 'prop-types';
import { UIMessage } from './UIMessage';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../csstransition/CSSTransition';

let messageIdx = 0;

export const Messages = memo(forwardRef((props, ref) => {
    const [messagesState, setMessagesState] = useState([]);

    const show = (value) => {
        if (value) {
            let messages = [];

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

            setMessagesState(messages);
        }
    }

    const clear = () => {
        setMessagesState([]);
    }

    const replace = (value) => {
        setMessagesState(value);
    }

    const onClose = (message) => {
        setMessagesState(messagesState.filter(msg => msg.id !== message.id));
        props.onRemove && props.onRemove(message);
    }

    useImperativeHandle(ref, () => ({
        show,
        replace,
        clear
    }));

    return (
        <div id={props.id} className={props.className} style={props.style}>
            <TransitionGroup>
                {
                    messagesState.map((message) => {
                        const messageRef = createRef();

                        return (
                            <CSSTransition nodeRef={messageRef} key={message.id} classNames="p-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} options={props.transitionOptions}>
                                <UIMessage ref={messageRef} message={message} onClick={props.onClick} onClose={onClose} />
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
        </div>
    )
}));

Messages.defaultProps = {
    __TYPE: 'Messages',
    id: null,
    className: null,
    style: null,
    transitionOptions: null,
    onRemove: null,
    onClick: null
}

Messages.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    transitionOptions: PropTypes.object,
    onRemove: PropTypes.func,
    onClick: PropTypes.func
}
