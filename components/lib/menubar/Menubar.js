import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { BarsIcon } from '../icons/bars';
import { IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, useMergeProps } from '../utils/Utils';
import { MenubarBase } from './MenubarBase';
import { MenubarSub } from './MenubarSub';

export const Menubar = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MenubarBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [mobileActiveState, setMobileActiveState] = React.useState(false);
        const elementRef = React.useRef(null);
        const rootMenuRef = React.useRef(null);
        const menuButtonRef = React.useRef(null);
        const { ptm, cx, isUnstyled } = MenubarBase.setMetaData({
            props,
            state: {
                id: idState,
                mobileActive: mobileActiveState
            }
        });

        useHandleStyle(MenubarBase.css.styles, isUnstyled, { name: 'menubar' });

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (mobileActiveState && isOutsideClicked(event)) {
                    setMobileActiveState(false);
                }
            }
        });

        const toggle = (event) => {
            event.preventDefault();

            setMobileActiveState((prevMobileActive) => !prevMobileActive);
        };

        const onLeafClick = () => {
            setMobileActiveState(false);
        };

        const isOutsideClicked = (event) => {
            return rootMenuRef.current !== event.target && !rootMenuRef.current.contains(event.target) && menuButtonRef.current !== event.target && !menuButtonRef.current.contains(event.target);
        };

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        useUpdateEffect(() => {
            if (mobileActiveState) {
                ZIndexUtils.set('menu', rootMenuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
                bindDocumentClickListener();
            } else {
                unbindDocumentClickListener();
                ZIndexUtils.clear(rootMenuRef.current);
            }
        }, [mobileActiveState]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(rootMenuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            toggle,
            getElement: () => elementRef.current,
            getRootMenu: () => rootMenuRef.current,
            getMenuButton: () => menuButtonRef.current
        }));

        const createStartContent = () => {
            if (props.start) {
                const start = ObjectUtils.getJSXElement(props.start, props);
                const startProps = mergeProps(
                    {
                        className: cx('start')
                    },
                    ptm('start')
                );

                return <div {...startProps}>{start}</div>;
            }

            return null;
        };

        const createEndContent = () => {
            if (props.end) {
                const end = ObjectUtils.getJSXElement(props.end, props);
                const endProps = mergeProps(
                    {
                        className: cx('end')
                    },
                    ptm('end')
                );

                return <div {...endProps}>{end}</div>;
            }

            return null;
        };

        const createMenuButton = () => {
            if (props.model && props.model.length < 1) {
                return null;
            }

            const buttonProps = mergeProps(
                {
                    ref: menuButtonRef,
                    href: '#',
                    role: 'button',
                    tabIndex: 0,
                    className: cx('button'),
                    onClick: (e) => toggle(e)
                },
                ptm('button')
            );
            const popupIconProps = mergeProps(ptm('popupIcon'));
            const icon = props.menuIcon || <BarsIcon {...popupIconProps} />;
            const menuIcon = IconUtils.getJSXIcon(icon, { ...popupIconProps }, { props });

            /* eslint-disable */
            const button = <a {...buttonProps}>{menuIcon}</a>;
            /* eslint-enable */

            return button;
        };

        const start = createStartContent();
        const end = createEndContent();
        const menuButton = createMenuButton();
        const submenu = <MenubarSub hostName="Menubar" id={idState} ref={rootMenuRef} menuProps={props} model={props.model} root mobileActive={mobileActiveState} onLeafClick={onLeafClick} submenuIcon={props.submenuIcon} ptm={ptm} cx={cx} />;
        const rootProps = mergeProps(
            {
                id: props.id,
                className: classNames(props.className, cx('root', { mobileActiveState })),
                style: props.style
            },
            MenubarBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {start}
                {menuButton}
                {submenu}
                {end}
            </div>
        );
    })
);

Menubar.displayName = 'Menubar';
