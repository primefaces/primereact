import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMountEffect, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ZIndexUtils } from '../utils/Utils';
import { ContextMenuBase } from './ContextMenuBase';
import { ContextMenuSub } from './ContextMenuSub';

export const ContextMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ContextMenuBase.getProps(inProps);

        const [visibleState, setVisibleState] = React.useState(false);
        const [reshowState, setReshowState] = React.useState(false);
        const [resetMenuState, setResetMenuState] = React.useState(false);
        const menuRef = React.useRef(null);
        const currentEvent = React.useRef(null);

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (isOutsideClicked(event) && event.button !== 2) {
                    hide(event);
                    setResetMenuState(true);
                }
            }
        });

        const [bindDocumentContextMenuListener] = useEventListener({
            type: 'contextmenu',
            listener: (event) => {
                show(event);
            }
        });

        const [bindDocumentResizeListener, unbindDocumentResizeListener] = useResizeListener({
            listener: (event) => {
                if (visibleState && !DomHandler.isTouchDevice()) {
                    hide(event);
                }
            }
        });

        const onMenuClick = () => {
            setResetMenuState(false);
        };

        const onMenuMouseEnter = () => {
            setResetMenuState(false);
        };

        const show = (event) => {
            event.stopPropagation();
            event.preventDefault();

            currentEvent.current = event;

            if (visibleState) {
                setReshowState(true);
            } else {
                setVisibleState(true);
                props.onShow && props.onShow(currentEvent.current);
            }
        };

        const hide = (event) => {
            currentEvent.current = event;

            setVisibleState(false);
            setReshowState(false);
            props.onHide && props.onHide(currentEvent.current);
        };

        const onEnter = () => {
            if (props.autoZIndex) {
                ZIndexUtils.set('menu', menuRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['menu']);
            }

            position(currentEvent.current);
        };

        const onEntered = () => {
            bindDocumentListeners();
        };

        const onExit = () => {
            unbindDocumentListeners();
            ZIndexUtils.clear(menuRef.current);
        };

        const onExited = () => {
            ZIndexUtils.clear(menuRef.current);
        };

        const position = (event) => {
            if (event) {
                let left = event.pageX + 1;
                let top = event.pageY + 1;
                let width = menuRef.current.offsetParent ? menuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(menuRef.current);
                let height = menuRef.current.offsetParent ? menuRef.current.offsetHeight : DomHandler.getHiddenElementOuterHeight(menuRef.current);
                let viewport = DomHandler.getViewport();

                //flip
                if (left + width - document.body.scrollLeft > viewport.width) {
                    left -= width;
                }

                //flip
                if (top + height - document.body.scrollTop > viewport.height) {
                    top -= height;
                }

                //fit
                if (left < document.body.scrollLeft) {
                    left = document.body.scrollLeft;
                }

                //fit
                if (top < document.body.scrollTop) {
                    top = document.body.scrollTop;
                }

                menuRef.current.style.left = left + 'px';
                menuRef.current.style.top = top + 'px';
            }
        };

        const onLeafClick = (event) => {
            setResetMenuState(true);
            hide(event);

            event.stopPropagation();
        };

        const isOutsideClicked = (event) => {
            return menuRef && menuRef.current && !(menuRef.current.isSameNode(event.target) || menuRef.current.contains(event.target));
        };

        const bindDocumentListeners = () => {
            bindDocumentResizeListener();
            bindDocumentClickListener();
        };

        const unbindDocumentListeners = () => {
            unbindDocumentResizeListener();
            unbindDocumentClickListener();
        };

        useMountEffect(() => {
            if (props.global) {
                bindDocumentContextMenuListener();
            }
        });

        useUpdateEffect(() => {
            if (visibleState) {
                setVisibleState(false);
                setReshowState(false);
                setResetMenuState(true);
            } else if (!reshowState && !visibleState && resetMenuState) {
                show(currentEvent.current);
            }
        }, [reshowState]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(menuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            getElement: () => menuRef.current
        }));

        const createContextMenu = () => {
            const otherProps = ContextMenuBase.getOtherProps(props);
            const className = classNames('p-contextmenu p-component', props.className, {
                'p-input-filled': PrimeReact.inputStyle === 'filled',
                'p-ripple-disabled': PrimeReact.ripple === false
            });

            return (
                <CSSTransition
                    nodeRef={menuRef}
                    classNames="p-contextmenu"
                    in={visibleState}
                    timeout={{ enter: 250, exit: 0 }}
                    options={props.transitionOptions}
                    unmountOnExit
                    onEnter={onEnter}
                    onEntered={onEntered}
                    onExit={onExit}
                    onExited={onExited}
                >
                    <div ref={menuRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onMenuClick} onMouseEnter={onMenuMouseEnter}>
                        <ContextMenuSub menuProps={props} model={props.model} root resetMenu={resetMenuState} onLeafClick={onLeafClick} />
                    </div>
                </CSSTransition>
            );
        };

        const element = createContextMenu();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

ContextMenu.displayName = 'ContextMenu';
