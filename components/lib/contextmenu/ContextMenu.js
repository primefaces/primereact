import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useMatchMedia, useMountEffect, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { DomHandler, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { ContextMenuBase } from './ContextMenuBase';
import { ContextMenuSub } from './ContextMenuSub';

export const ContextMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ContextMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [visibleState, setVisibleState] = React.useState(false);
        const [reshowState, setReshowState] = React.useState(false);
        const [resetMenuState, setResetMenuState] = React.useState(false);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const { ptm, cx, isUnstyled } = ContextMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                visible: visibleState,
                reshow: reshowState,
                resetMenu: resetMenuState,
                attributeSelector: attributeSelectorState
            }
        });

        useHandleStyle(ContextMenuBase.css.styles, isUnstyled, { name: 'contextmenu' });
        const menuRef = React.useRef(null);
        const currentEvent = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

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
            when: props.global,
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

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);

                const selector = `${attributeSelectorState}`;
                const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-contextmenu[${selector}] > ul {
        max-height: ${props.scrollHeight};
        overflow: ${props.scrollHeight ? 'auto' : ''};
    }

    .p-contextmenu[${selector}] .p-submenu-list {
        position: relative;
    }

    .p-contextmenu[${selector}] .p-menuitem-active > .p-submenu-list {
        left: 0 !important;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-contextmenu[${selector}] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-contextmenu[${selector}] .p-submenu-icon:before {
        content: "\\e930";
    }
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

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
            DomHandler.addStyles(menuRef.current, { position: 'absolute' });

            if (props.autoZIndex) {
                ZIndexUtils.set('menu', menuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
            }

            position(currentEvent.current);

            if (attributeSelectorState && props.breakpoint) {
                menuRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }
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
            destroyStyle();
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
            const uniqueId = UniqueComponentId();

            !idState && setIdState(uniqueId);

            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(uniqueId);
            }
        });

        useUpdateEffect(() => {
            props.global && bindDocumentContextMenuListener();
        }, [props.global]);

        useUpdateEffect(() => {
            if (attributeSelectorState && menuRef.current) {
                menuRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

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
            const rootProps = mergeProps(
                {
                    id: props.id,
                    className: classNames(props.className, cx('root', { context })),
                    style: props.style,
                    onClick: (e) => onMenuClick(e),
                    onMouseEnter: (e) => onMenuMouseEnter(e)
                },
                ContextMenuBase.getOtherProps(props),
                ptm('root')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: visibleState,
                    timeout: { enter: 250, exit: 0 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter: onEnter,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExited: onExited
                },
                ptm('transition')
            );

            return (
                <CSSTransition nodeRef={menuRef} {...transitionProps}>
                    <div ref={menuRef} {...rootProps}>
                        <ContextMenuSub
                            hostName="ContextMenu"
                            id={idState}
                            menuProps={props}
                            model={props.model}
                            root
                            resetMenu={resetMenuState}
                            onLeafClick={onLeafClick}
                            isMobileMode={isMobileMode}
                            submenuIcon={props.submenuIcon}
                            ptm={ptm}
                            cx={cx}
                        />
                    </div>
                </CSSTransition>
            );
        };

        const element = createContextMenu();

        return <Portal element={element} appendTo={props.appendTo} />;
    })
);

ContextMenu.displayName = 'ContextMenu';
