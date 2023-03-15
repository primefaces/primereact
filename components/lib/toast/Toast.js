import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, ZIndexUtils } from '../utils/Utils';
import { ToastBase } from './ToastBase';
import { ToastMessage } from './ToastMessage';

let messageIdx = 0;

export const Toast = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ToastBase.getProps(inProps);

        const [messagesState, setMessagesState] = React.useState([]);
        const containerRef = React.useRef(null);

        const show = (messageInfo) => {
            if (messageInfo) {
                const messages = assignIdentifiers(messageInfo, true);

                setMessagesState(messages);
            }
        };

        const assignIdentifiers = (messageInfo, copy) => {
            let messages;

            if (Array.isArray(messageInfo)) {
                const multipleMessages = messageInfo.reduce((acc, message) => {
                    acc.push({ _pId: messageIdx++, message });

                    return acc;
                }, []);

                if (copy) {
                    messages = messagesState ? [...messagesState, ...multipleMessages] : multipleMessages;
                } else {
                    messages = multipleMessages;
                }
            } else {
                const message = { _pId: messageIdx++, message: messageInfo };

                if (copy) {
                    messages = messagesState ? [...messagesState, message] : [message];
                } else {
                    messages = [message];
                }
            }

            return messages;
        };

        const clear = () => {
            ZIndexUtils.clear(containerRef.current);
            setMessagesState([]);
        };

        const replace = (messageInfo) => {
            const replaced = assignIdentifiers(messageInfo, false);

            setMessagesState(replaced);
        };

        const remove = (messageInfo) => {
            const messages = messagesState.filter((msg) => msg._pId !== messageInfo._pId);

            setMessagesState(messages);

            props.onRemove && props.onRemove(messageInfo.message);
        };

        const onClose = (messageInfo) => {
            remove(messageInfo);
        };

        const onEntered = () => {
            props.onShow && props.onShow();
        };

        const onExited = () => {
            messagesState.length === 1 && ZIndexUtils.clear(containerRef.current);

            props.onHide && props.onHide();
        };

        useUpdateEffect(() => {
            ZIndexUtils.set('toast', containerRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['toast']);
        }, [messagesState, props.baseZIndex]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(containerRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            replace,
            remove,
            clear,
            getElement: () => containerRef.current
        }));

        const createElement = () => {
            const otherProps = ToastBase.getOtherProps(props);
            const className = classNames('p-toast p-component p-toast-' + props.position, props.className, {
                'p-input-filled': PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': PrimeReact.ripple === false
            });

            return (
                <div ref={containerRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    <TransitionGroup>
                        {messagesState &&
                            messagesState.map((messageInfo) => {
                                const messageRef = React.createRef();

                                return (
                                    <CSSTransition nodeRef={messageRef} key={messageInfo._pId} classNames="p-toast-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} onEntered={onEntered} onExited={onExited} options={props.transitionOptions}>
                                        <ToastMessage ref={messageRef} messageInfo={messageInfo} onClick={props.onClick} onClose={onClose} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
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
