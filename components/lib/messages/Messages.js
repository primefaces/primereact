import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ObjectUtils } from '../utils/Utils';
import { UIMessage } from './UIMessage';

let messageIdx = 0;

export const Messages = React.memo(React.forwardRef((props, ref) => {
    const [messagesState, setMessagesState] = React.useState([]);

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

            setMessagesState(messages);
        }
    }

    const clear = () => {
        setMessagesState([]);
    }

    const replace = (value) => {
        const replaced = Array.isArray(value) ? value : [value];
        setMessagesState(replaced);
    }

    const onClose = (message) => {
        setMessagesState(messagesState.filter(msg => msg.id !== message.id));
        props.onRemove && props.onRemove(message);
    }

    React.useImperativeHandle(ref, () => ({
        show,
        replace,
        clear
    }));

    const otherProps = ObjectUtils.findDiffKeys(props, Messages.defaultProps);

    return (
        <div id={props.id} className={props.className} style={props.style} {...otherProps}>
            <TransitionGroup>
                {
                    messagesState.map((message) => {
                        const messageRef = React.createRef();

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

Messages.displayName = 'Messages';
Messages.defaultProps = {
    __TYPE: 'Messages',
    id: null,
    className: null,
    style: null,
    transitionOptions: null,
    onRemove: null,
    onClick: null
}
