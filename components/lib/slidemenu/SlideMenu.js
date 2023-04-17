import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, IconUtils, ZIndexUtils } from '../utils/Utils';
import { SlideMenuBase } from './SlideMenuBase';
import { SlideMenuSub } from './SlideMenuSub';
import { ChevronLeftIcon } from '../icon/chevronleft';

export const SlideMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = SlideMenuBase.getProps(inProps);

        const [levelState, setLevelState] = React.useState(0);
        const [visibleState, setVisibleState] = React.useState(false);
        const menuRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const backward = React.useRef(null);
        const slideMenuContent = React.useRef(null);

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

        const navigateForward = () => {
            setLevelState((prevLevel) => prevLevel + 1);
        };

        const navigateBack = () => {
            setLevelState((prevLevel) => prevLevel - 1);
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
            targetRef.current = event.currentTarget;
            setVisibleState(false);
            props.onHide && props.onHide(event);
        };

        const onEnter = () => {
            if (props.autoZIndex) {
                ZIndexUtils.set('menu', menuRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['menu']);
            }

            DomHandler.absolutePosition(menuRef.current, targetRef.current);
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
            setLevelState(0);
        };

        useUpdateEffect(() => {
            setLevelState(0);
        }, [props.model]);

        useUpdateEffect(() => {
            props.onNavigate && props.onNavigate({ level: levelState });
        }, [levelState]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(menuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            toggle,
            show,
            hide,
            navigateForward,
            navigateBack,
            setLevelState,
            getElement: () => menuRef.current
        }));

        const createBackward = () => {
            const className = classNames('p-slidemenu-backward', {
                'p-hidden': levelState === 0
            });

            const iconClassName = "p-slidemenu-backward-icon";
            const icon = props.backIcon || <ChevronLeftIcon className={iconClassName} />;
            const backIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

            return (
                <div ref={backward} className={className} onClick={navigateBack}>
                    {backIcon}
                    <span>{props.backLabel}</span>
                </div>
            );
        };

        const createElement = () => {
            const otherProps = SlideMenuBase.getOtherProps(props);
            const className = classNames(
                'p-slidemenu p-component',
                {
                    'p-slidemenu-overlay': props.popup
                },
                props.className
            );
            const wrapperStyle = { height: props.viewportHeight + 'px' };
            const backward = createBackward();

            return (
                <CSSTransition
                    nodeRef={menuRef}
                    classNames="p-connected-overlay"
                    in={!props.popup || visibleState}
                    timeout={{ enter: 120, exit: 100 }}
                    options={props.transitionOptions}
                    unmountOnExit
                    onEnter={onEnter}
                    onEntered={onEntered}
                    onExit={onExit}
                    onExited={onExited}
                >
                    <div ref={menuRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onPanelClick}>
                        <div className="p-slidemenu-wrapper" style={wrapperStyle}>
                            <div className="p-slidemenu-content" ref={slideMenuContent}>
                                <SlideMenuSub menuProps={props} model={props.model} root index={0} menuWidth={props.menuWidth} effectDuration={props.effectDuration} level={levelState} parentActive={levelState === 0} onForward={navigateForward} submenuIcon={props.submenuIcon} />
                            </div>
                            {backward}
                        </div>
                    </div>
                </CSSTransition>
            );
        };

        const element = createElement();

        return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
    })
);

SlideMenu.displayName = 'SlideMenu';
