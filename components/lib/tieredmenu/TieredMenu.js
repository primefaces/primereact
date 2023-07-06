import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMatchMedia, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { TieredMenuBase } from './TieredMenuBase';
import { TieredMenuSub } from './TieredMenuSub';
import PrimeReact from '../api/Api';

export const TieredMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = TieredMenuBase.getProps(inProps, context);

        const [visibleState, setVisibleState] = React.useState(!props.popup);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const { ptm } = TieredMenuBase.setMetaData({
            props,
            state: {
                visible: visibleState,
                attributeSelector: attributeSelectorState
            }
        });
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
            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(UniqueComponentId());
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
            const otherProps = TieredMenuBase.getOtherProps(props);
            const className = classNames(
                'p-tieredmenu p-component',
                {
                    'p-tieredmenu-overlay': props.popup,
                    'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
                    'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
                },
                props.className
            );

            const rootProps = mergeProps(
                {
                    ref: menuRef,
                    id: props.id,
                    className,
                    style: props.style,
                    onClick: onPanelClick
                },
                TieredMenuBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <CSSTransition
                    nodeRef={menuRef}
                    classNames="p-connected-overlay"
                    in={visibleState}
                    timeout={{ enter: 120, exit: 100 }}
                    options={props.transitionOptions}
                    unmountOnExit
                    onEnter={onEnter}
                    onEntered={onEntered}
                    onExit={onExit}
                    onExited={onExited}
                >
                    <div {...rootProps}>
                        <TieredMenuSub menuProps={props} model={props.model} root popup={props.popup} onHide={hide} isMobileMode={isMobileMode} onItemToggle={onItemToggle} submenuIcon={props.submenuIcon} ptm={ptm} />
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
    })
);

TieredMenu.displayName = 'TieredMenu';
