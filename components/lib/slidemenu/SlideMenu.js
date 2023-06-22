import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronLeftIcon } from '../icons/chevronleft';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { SlideMenuBase } from './SlideMenuBase';
import { SlideMenuSub } from './SlideMenuSub';
import PrimeReact from '../api/Api';

export const SlideMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SlideMenuBase.getProps(inProps, context);

        const [levelState, setLevelState] = React.useState(0);
        const [visibleState, setVisibleState] = React.useState(false);
        const { ptm } = SlideMenuBase.setMetaData({
            props,
            state: {
                visible: visibleState,
                level: levelState
            }
        });
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
                ZIndexUtils.set('menu', menuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
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

            const iconClassName = 'p-slidemenu-backward-icon';
            const previousIconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('previousIcon')
            );
            const icon = props.backIcon || <ChevronLeftIcon {...previousIconProps} />;
            const backIcon = IconUtils.getJSXIcon(icon, { ...previousIconProps }, { props });
            const previousLabelProps = mergeProps(ptm('previousLabel'));
            const previousProps = mergeProps(
                {
                    ref: backward,
                    className,
                    onClick: (e) => navigateBack(e)
                },
                ptm('previous')
            );

            return (
                <div {...previousProps}>
                    {backIcon}
                    <span {...previousLabelProps}>{props.backLabel}</span>
                </div>
            );
        };

        const createElement = () => {
            const className = classNames(
                'p-slidemenu p-component',
                {
                    'p-slidemenu-overlay': props.popup
                },
                props.className
            );
            const wrapperStyle = { height: props.viewportHeight + 'px' };
            const backward = createBackward();
            const rootProps = mergeProps(
                {
                    ref: menuRef,
                    id: props.id,
                    className,
                    style: props.style,
                    onClick: (e) => onPanelClick(e)
                },
                SlideMenuBase.getOtherProps(props),
                ptm('root')
            );

            const wrapperProps = mergeProps(
                {
                    className: 'p-slidemenu-wrapper',
                    style: wrapperStyle
                },
                ptm('wrapper')
            );

            const contentProps = mergeProps(
                {
                    ref: slideMenuContent,
                    className: 'p-slidemenu-content'
                },
                ptm('content')
            );

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
                    <div {...rootProps}>
                        <div {...wrapperProps}>
                            <div {...contentProps}>
                                <SlideMenuSub
                                    menuProps={props}
                                    model={props.model}
                                    root
                                    index={0}
                                    menuWidth={props.menuWidth}
                                    effectDuration={props.effectDuration}
                                    level={levelState}
                                    parentActive={levelState === 0}
                                    onForward={navigateForward}
                                    submenuIcon={props.submenuIcon}
                                    ptm={ptm}
                                />
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
