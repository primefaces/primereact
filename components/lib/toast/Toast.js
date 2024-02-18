import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { ToastBase } from './ToastBase';
import { ToastMessage } from './ToastMessage';

let messageIdx = 0;

export const Toast = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ToastBase.getProps(inProps, context);

        const [messagesState, setMessagesState] = React.useState([]);
        const containerRef = React.useRef(null);

        const metaData = {
            props,
            state: {
                messages: messagesState
            }
        };

        const ptCallbacks = ToastBase.setMetaData(metaData);

        useHandleStyle(ToastBase.css.styles, ptCallbacks.isUnstyled, { name: 'toast' });

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
            ZIndexUtils.clear(containerRef.current);
            setMessagesState([]);
        };

        const replace = (messageInfo) => {
            setMessagesState((previousMessagesState) => assignIdentifiers(previousMessagesState, messageInfo, false));
        };

        const remove = (messageInfo) => {
            // allow removal by ID or by message equality
            const removeMessage = messageInfo._pId ? messageInfo.message : messageInfo;

            setMessagesState((prev) => prev.filter((msg) => msg._pId !== messageInfo._pId && !ObjectUtils.deepEquals(msg.message, removeMessage)));

            props.onRemove && props.onRemove(removeMessage.message || removeMessage);
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
            ZIndexUtils.set('toast', containerRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['toast']) || PrimeReact.zIndex['toast']);
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
            const rootProps = mergeProps(
                {
                    ref: containerRef,
                    id: props.id,
                    className: ptCallbacks.cx('root', { context }),
                    style: ptCallbacks.sx('root')
                },
                ToastBase.getOtherProps(props),
                ptCallbacks.ptm('root')
            );

            const transitionProps = mergeProps(
                {
                    classNames: ptCallbacks.cx('transition'),
                    timeout: { enter: 300, exit: 300 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEntered,
                    onExited
                },
                ptCallbacks.ptm('transition')
            );

            return (
                <div {...rootProps}>
                    <TransitionGroup>
                        {messagesState &&
                            messagesState.map((messageInfo, index) => {
                                const messageRef = React.createRef();

                                return (
                                    <CSSTransition nodeRef={messageRef} key={messageInfo._pId} {...transitionProps}>
                                        {inProps.content ? (
                                            ObjectUtils.getJSXElement(inProps.content, { message: messageInfo.message })
                                        ) : (
                                            <ToastMessage
                                                hostName="Toast"
                                                ref={messageRef}
                                                messageInfo={messageInfo}
                                                index={index}
                                                onClick={props.onClick}
                                                onClose={onClose}
                                                onMouseEnter={props.onMouseEnter}
                                                onMouseLeave={props.onMouseLeave}
                                                closeIcon={props.closeIcon}
                                                ptCallbacks={ptCallbacks}
                                                metaData={metaData}
                                            />
                                        )}
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
