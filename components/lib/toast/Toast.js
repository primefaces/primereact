import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useUnmountEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { ToastMessage } from './ToastMessage';

let messageIdx = 0;

export const Toast = React.memo(
    React.forwardRef((props, ref) => {
        const [messagesState, setMessagesState] = React.useState([]);
        const containerRef = React.useRef(null);

        const show = (value) => {
            if (value) {
                let messages;

                if (Array.isArray(value)) {
                    const multipleMessages = value.reduce((acc, message) => {
                        acc.push({ _pId: messageIdx++, message });

                        return acc;
                    }, []);

                    messages = messagesState ? [...messagesState, ...multipleMessages] : multipleMessages;
                } else {
                    const message = { _pId: messageIdx++, message: value };
                    messages = messagesState ? [...messagesState, message] : [message];
                }

                messagesState.length === 0 && ZIndexUtils.set('toast', containerRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['toast']);

                setMessagesState(messages);
            }
        };

        const clear = () => {
            ZIndexUtils.clear(containerRef.current);
            setMessagesState([]);
        };

        const replace = (value) => {
            const replaced = Array.isArray(value) ? value : [value];
            setMessagesState(replaced);
        };

        const onClose = (messageInfo) => {
            const messages = messagesState.filter((msg) => msg._pId !== messageInfo._pId);
            setMessagesState(messages);

            props.onRemove && props.onRemove(messageInfo.message);
        };

        const onEntered = () => {
            props.onShow && props.onShow();
        };

        const onExited = () => {
            messagesState.length === 1 && ZIndexUtils.clear(containerRef.current);

            props.onHide && props.onHide();
        };

        useUnmountEffect(() => {
            ZIndexUtils.clear(containerRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            replace,
            clear,
            getElement: () => containerRef.current
        }));

        const createElement = () => {
            const otherProps = ObjectUtils.findDiffKeys(props, Toast.defaultProps);
            const className = classNames('p-toast p-component p-toast-' + props.position, props.className);

            return (
                <div ref={containerRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    <TransitionGroup>
                        {messagesState.map((messageInfo) => {
                            const messageRef = React.createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={messageInfo._pId} classNames="p-toast-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} onEntered={onEntered} onExited={onExited} options={props.transitionOptions}>
                                    <ToastMessage ref={messageRef} messageInfo={messageInfo} onClick={props.onClick} onClose={onClose} />
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </div>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

Toast.displayName = 'Toast';
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
};
