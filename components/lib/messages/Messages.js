import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { mergeProps } from '../utils/Utils';
import { MessagesBase } from './MessagesBase';
import { UIMessage } from './UIMessage';

let messageIdx = 0;

export const Messages = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MessagesBase.getProps(inProps, context);
        const [messagesState, setMessagesState] = React.useState([]);
        const elementRef = React.useRef(null);
        const metaData = {
            props,
            state: {
                messages: messagesState
            }
        };

        const ptCallbacks = MessagesBase.setMetaData(metaData);

        useHandleStyle(MessagesBase.css.styles, ptCallbacks.isUnstyled, { name: 'messages' });

        const show = (messageInfo) => {
            if (messageInfo) {
                setMessagesState((prev) => assignIdentifiers(prev, messageInfo, true));
            }
        };

        const assignIdentifiers = (currentState, messageInfo, copy) => {
            let messages;

            if (Array.isArray(messageInfo)) {
                const multipleMessages = messageInfo.reduce((acc, message) => {
                    acc.push({ _pId: messageIdx++, message });

                    return acc;
                }, []);

                if (copy) {
                    messages = currentState ? [...currentState, ...multipleMessages] : multipleMessages;
                } else {
                    messages = multipleMessages;
                }
            } else {
                const message = { _pId: messageIdx++, message: messageInfo };

                if (copy) {
                    messages = currentState ? [...currentState, message] : [message];
                } else {
                    messages = [message];
                }
            }

            return messages;
        };

        const clear = () => {
            setMessagesState([]);
        };

        const replace = (messageInfo) => {
            setMessagesState((prev) => assignIdentifiers(prev, messageInfo, false));
        };

        const remove = (messageInfo) => {
            setMessagesState((prev) => prev.filter((msg) => msg._pId !== messageInfo._pId));

            props.onRemove && props.onRemove(messageInfo.message);
        };

        const onClose = (messageInfo) => {
            remove(messageInfo);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            replace,
            remove,
            clear,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                className: props.className,
                style: props.style
            },
            MessagesBase.getOtherProps(props),
            ptCallbacks.ptm('root')
        );

        return (
            <div ref={elementRef} {...rootProps}>
                <TransitionGroup>
                    {messagesState &&
                        messagesState.map((message, index) => {
                            const messageRef = React.createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={message._pId} classNames="p-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} options={props.transitionOptions}>
                                    <UIMessage ref={messageRef} message={message} onClick={props.onClick} onClose={onClose} ptCallbacks={ptCallbacks} metaData={metaData} index={index} />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </div>
        );
    })
);

Messages.displayName = 'Messages';
