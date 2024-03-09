import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useMergeProps, useMountEffect, useStyle, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, classNames } from '../utils/Utils';
import { RippleBase } from './RippleBase';

export const Ripple = React.memo(
    React.forwardRef((inProps, ref) => {
        const [isMounted, setMounted] = React.useState(false);
        const inkRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = RippleBase.getProps(inProps, context);
        const isRippleActive = (context && context.ripple) || PrimeReact.ripple;

        const metaData = {
            props
        };

        useStyle(RippleBase.css.styles, { name: 'ripple', manual: !isRippleActive });

        const { ptm, cx } = RippleBase.setMetaData({
            ...metaData
        });

        const getTarget = () => {
            return inkRef.current && inkRef.current.parentElement;
        };

        const bindEvents = () => {
            if (targetRef.current) {
                targetRef.current.addEventListener('pointerdown', onPointerDown);
            }
        };

        const unbindEvents = () => {
            if (targetRef.current) {
                targetRef.current.removeEventListener('pointerdown', onPointerDown);
            }
        };

        const onPointerDown = (event) => {
            const offset = DomHandler.getOffset(targetRef.current);
            const offsetX = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
            const offsetY = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;

            activateRipple(offsetX, offsetY);
        };

        const activateRipple = (offsetX, offsetY) => {
            if (!inkRef.current || getComputedStyle(inkRef.current, null).display === 'none') {
                return;
            }

            DomHandler.removeClass(inkRef.current, 'p-ink-active');

            setDimensions();

            inkRef.current.style.top = offsetY + 'px';
            inkRef.current.style.left = offsetX + 'px';
            DomHandler.addClass(inkRef.current, 'p-ink-active');
        };

        const onAnimationEnd = (event) => {
            DomHandler.removeClass(event.currentTarget, 'p-ink-active');
        };

        const setDimensions = () => {
            if (inkRef.current && !DomHandler.getHeight(inkRef.current) && !DomHandler.getWidth(inkRef.current)) {
                let d = Math.max(DomHandler.getOuterWidth(targetRef.current), DomHandler.getOuterHeight(targetRef.current));

                inkRef.current.style.height = d + 'px';
                inkRef.current.style.width = d + 'px';
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getInk: () => inkRef.current,
            getTarget: () => targetRef.current
        }));

        useMountEffect(() => {
            // for App Router in Next.js ^14
            setMounted(true);
        });

        useUpdateEffect(() => {
            if (isMounted && inkRef.current) {
                targetRef.current = getTarget();
                setDimensions();
                bindEvents();
            }
        }, [isMounted]);

        useUpdateEffect(() => {
            if (inkRef.current && !targetRef.current) {
                targetRef.current = getTarget();
                setDimensions();
                bindEvents();
            }
        });

        useUnmountEffect(() => {
            if (inkRef.current) {
                targetRef.current = null;
                unbindEvents();
            }
        });

        if (!isRippleActive) return null;

        const rootProps = mergeProps(
            {
                'aria-hidden': true,
                className: classNames(cx('root'))
            },
            RippleBase.getOtherProps(props),
            ptm('root')
        );

        return <span role="presentation" ref={inkRef} {...rootProps} onAnimationEnd={onAnimationEnd}></span>;
    })
);

Ripple.displayName = 'Ripple';
