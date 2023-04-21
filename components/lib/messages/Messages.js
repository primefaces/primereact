import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../csstransition/CSSTransition';
import { MessagesBase } from './MessagesBase';
import { UIMessage } from './UIMessage';

let messageIdx = 0;

export const Messages = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MessagesBase.getProps(inProps);

        const [messagesState, setMessagesState] = React.useState([]);
        const elementRef = React.useRef(null);

        const show = (value) => {
            if (value) {
                let messages = assignIdentifiers(value, true);

                if (Array.isArray(value)) {
                    for (let i = 0; i < value.length; i++) {
                        value[i].id = messageIdx++;
                        messages = [...messagesState, ...value];
                    }
                } else {
                    value.id = messageIdx++;
                    messages = messagesState ? [...messagesState, value] : [value];
                }

                setMessagesState(messages);
            }
        };

        const assignIdentifiers = (value, copy) => {
            let messages;

            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    value[i].id = messageIdx++;

                    if (copy) {
                        messages = [...messagesState, ...value];
                    } else {
                        messages = value;
                    }
                }
            } else {
                value.id = messageIdx++;

                if (copy) {
                    messages = messagesState ? [...messagesState, value] : [value];
                } else {
                    messages = [value];
                }
            }

            return messages;
        };

        const clear = () => {
            setMessagesState([]);
        };

        const replace = (value) => {
            const replaced = assignIdentifiers(value, false);

            setMessagesState(replaced);
        };

        const onClose = (message) => {
            setMessagesState(messagesState.filter((msg) => msg.id !== message.id));
            props.onRemove && props.onRemove(message);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            replace,
            clear,
            getElement: () => elementRef.current
        }));

        const otherProps = MessagesBase.getOtherProps(props);

        return (
            <div id={props.id} ref={elementRef} className={props.className} style={props.style} {...otherProps}>
                <TransitionGroup>
                    {messagesState &&
                        messagesState.map((message) => {
                            const messageRef = React.createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={message.id} classNames="p-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} options={props.transitionOptions}>
                                    <UIMessage ref={messageRef} message={message} onClick={props.onClick} onClose={onClose} />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </div>
        );
    })
);

Messages.displayName = 'Messages';
