import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useEventListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { BarsIcon } from '../icons/bars';
import { IconUtils, ObjectUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { MenubarBase } from './MenubarBase';
import { MenubarSub } from './MenubarSub';
import PrimeReact from '../api/Api';

export const Menubar = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MenubarBase.getProps(inProps, context);

        const [mobileActiveState, setMobileActiveState] = React.useState(false);
        const elementRef = React.useRef(null);
        const rootMenuRef = React.useRef(null);
        const menuButtonRef = React.useRef(null);
        const { ptm } = MenubarBase.setMetaData({
            props,
            state: {
                mobileActive: mobileActiveState
            }
        });

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
                        className: 'p-menubar-start'
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
                        className: 'p-menubar-end'
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
                    className: 'p-menubar-button',
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

        const className = classNames(
            'p-menubar p-component',
            {
                'p-menubar-mobile-active': mobileActiveState
            },
            props.className
        );
        const start = createStartContent();
        const end = createEndContent();
        const menuButton = createMenuButton();
        const submenu = <MenubarSub ref={rootMenuRef} menuProps={props} model={props.model} root mobileActive={mobileActiveState} onLeafClick={onLeafClick} submenuIcon={props.submenuIcon} ptm={ptm} />;
        const rootProps = mergeProps(
            {
                id: props.id,
                className,
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
