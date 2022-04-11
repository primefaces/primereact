import * as React from 'react';
import PrimeReact from '../api/Api';
import { useEventListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { classNames, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { MenubarSub } from './MenubarSub';

export const Menubar = React.memo(React.forwardRef((props, ref) => {
    const [mobileActiveState, setMobileActiveState] = React.useState(false);
    const rootMenuRef = React.useRef(null);
    const menuButtonRef = React.useRef(null);

    const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
        type: 'click', listener: (event) => {
            if (mobileActiveState && isOutsideClicked(event)) {
                setMobileActiveState(false);
            }
        }
    });

    const toggle = (event) => {
        event.preventDefault();

        setMobileActiveState(prevMobileActive => !prevMobileActive);
    }

    const onLeafClick = () => {
        setMobileActiveState(false);
    }

    const isOutsideClicked = (event) => {
        return rootMenuRef.current !== event.target && !rootMenuRef.current.contains(event.target)
            && menuButtonRef.current !== event.target && !menuButtonRef.current.contains(event.target);
    }

    useUpdateEffect(() => {
        if (mobileActiveState) {
            ZIndexUtils.set('menu', rootMenuRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['menu']);
            bindDocumentClickListener();
        }
        else {
            unbindDocumentClickListener();
            ZIndexUtils.clear(rootMenuRef.current);
        }
    }, [mobileActiveState]);

    useUnmountEffect(() => {
        ZIndexUtils.clear(rootMenuRef.current);
    });

    React.useImperativeHandle(ref, () => ({
        toggle,
        useCustomContent
    }));

    const createCustomContent = () => {
        if (props.children) {
            return (
                <div className="p-menubar-custom">
                    {props.children}
                </div>
            )
        }

        return null;
    }

    const createStartContent = () => {
        if (props.start) {
            const start = ObjectUtils.getJSXElement(props.start, props);

            return (
                <div className="p-menubar-start">
                    {start}
                </div>
            )
        }

        return null;
    }

    const createEndContent = () => {
        if (props.end) {
            const end = ObjectUtils.getJSXElement(props.end, props);

            return (
                <div className="p-menubar-end">
                    {end}
                </div>
            )
        }

        return null;
    }

    const createMenuButton = () => {
        /* eslint-disable */
        const button = (
            <a ref={menuButtonRef} href={'#'} role="button" tabIndex={0} className="p-menubar-button" onClick={toggle}>
                <i className="pi pi-bars" />
            </a>
        )
        /* eslint-enable */

        return button;
    }

    const otherProps = ObjectUtils.findDiffKeys(props, Menubar.defaultProps);
    const className = classNames('p-menubar p-component', {
        'p-menubar-mobile-active': mobileActiveState
    }, props.className);
    const start = createStartContent();
    const end = createEndContent();
    const menuButton = createMenuButton();
    const submenu = <MenubarSub ref={rootMenuRef} menuProps={props} model={props.model} root mobileActive={mobileActiveState} onLeafClick={onLeafClick} />;

    return (
        <div id={props.id} className={className} style={props.style} {...otherProps}>
            {start}
            {menuButton}
            {submenu}
            {end}
        </div>
    )
}));

Menubar.displayName = 'Menubar';
Menubar.defaultProps = {
    __TYPE: 'Menubar',
    id: null,
    model: null,
    style: null,
    className: null,
    start: null,
    end: null
}
