import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMatchMedia, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, UniqueComponentId, ZIndexUtils, mergeProps } from '../utils/Utils';
import { TieredMenuBase } from './TieredMenuBase';
import { TieredMenuSub } from './TieredMenuSub';

export const TieredMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = TieredMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [visibleState, setVisibleState] = React.useState(!props.popup);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const { ptm, cx, sx, isUnstyled } = TieredMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                visible: visibleState,
                attributeSelector: attributeSelectorState
            }
        });

        useHandleStyle(TieredMenuBase.css.styles, isUnstyled, { name: 'tieredmenu' });

        const menuRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: targetRef,
            overlay: menuRef,
            listener: (event, { valid }) => {
                valid && hide(event);
            },
            when: visibleState
        });

        const onPanelClick = (event) => {
            if (props.popup) {
                OverlayService.emit('overlay-click', {
                    originalEvent: event,
                    target: targetRef.current
                });
            }
        };

        const toggle = (event) => {
            if (props.popup) {
                visibleState ? hide(event) : show(event);
            }
        };

        const show = (event) => {
            targetRef.current = event.currentTarget;
            setVisibleState(true);
            props.onShow && props.onShow(event);
        };

        const hide = (event) => {
            if (props.popup) {
                targetRef.current = event.currentTarget;
                setVisibleState(false);
                props.onHide && props.onHide(event);
            }
        };

        const onItemToggle = () => {
            if (props.popup && isMobileMode) {
                DomHandler.absolutePosition(menuRef.current, targetRef.current);
            }
        };

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);

                const selector = `${attributeSelectorState}`;
                const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-tieredmenu[${selector}] > ul {
        max-height: ${props.scrollHeight};
        overflow: ${props.scrollHeight ? 'auto' : ''};
    }

    .p-tieredmenu[${selector}] .p-submenu-list {
        position: relative;
    }

    .p-tieredmenu[${selector}] .p-menuitem-active > .p-submenu-list {
        left: 0 !important;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-tieredmenu[${selector}] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-tieredmenu[${selector}] .p-submenu-icon:before {
        content: "\\e930";
    }

    ${!props.popup ? `.p-tieredmenu[${selector}] { width: 100%; }` : ''}
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        const onEnter = () => {
            if (props.autoZIndex) {
                ZIndexUtils.set('menu', menuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
            }

            DomHandler.addStyles(menuRef.current, { position: 'absolute', top: '0', left: '0' });
            DomHandler.absolutePosition(menuRef.current, targetRef.current);

            if (attributeSelectorState && props.breakpoint) {
                menuRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }
        };

        const onEntered = () => {
            bindOverlayListener();
        };

        const onExit = () => {
            targetRef.current = null;
            unbindOverlayListener();
        };

        const onExited = () => {
            ZIndexUtils.clear(menuRef.current);
            destroyStyle();
        };

        useMountEffect(() => {
            const uniqueId = UniqueComponentId();

            !idState && setIdState(uniqueId);

            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(uniqueId);
            }
        });

        useUpdateEffect(() => {
            if (attributeSelectorState && menuRef.current) {
                menuRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(menuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            toggle,
            show,
            hide,
            getElement: () => menuRef.current
        }));

        const createElement = () => {
            const rootProps = mergeProps(
                {
                    ref: menuRef,
                    id: props.id,
                    className: cx('root'),
                    style: props.style,
                    onClick: onPanelClick
                },
                TieredMenuBase.getOtherProps(props),
                ptm('root')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    in: visibleState,
                    timeout: { enter: 120, exit: 100 },
                    options: props.transitionOptions,
                    unmountOnExit: true,
                    onEnter,
                    onEntered,
                    onExit,
                    onExited
                },
                ptm('transition')
            );

            return (
                <CSSTransition nodeRef={menuRef} {...transitionProps}>
                    <div {...rootProps}>
                        <TieredMenuSub
                            id={idState}
                            hostName="TieredMenu"
                            menuProps={props}
                            model={props.model}
                            root
                            popup={props.popup}
                            onHide={hide}
                            isMobileMode={isMobileMode}
                            onItemToggle={onItemToggle}
                            submenuIcon={props.submenuIcon}
                            ptm={ptm}
                            cx={cx}
                            sx={sx}
                        />
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
    })
);

TieredMenu.displayName = 'TieredMenu';
