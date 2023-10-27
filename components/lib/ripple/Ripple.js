import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useMountEffect, useStyle, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler, classNames, mergeProps } from '../utils/Utils';
import { RippleBase } from './RippleBase';

export const Ripple = React.memo(
    React.forwardRef((inProps, ref) => {
        const inkRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const context = React.useContext(PrimeReactContext);
        const props = RippleBase.getProps(inProps, context);

        const metaData = {
            props
        };

        useStyle(RippleBase.css.styles, { name: 'ripple' });

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
            if (inkRef.current) {
                targetRef.current = getTarget();
                setDimensions();
                bindEvents();
            }
        });

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

        const rootProps = mergeProps(
            {
                className: classNames(cx('root'))
            },
            ptm('root')
        );

        return (context && context.ripple) || PrimeReact.ripple ? <span role="presentation" ref={inkRef} {...rootProps} onAnimationEnd={onAnimationEnd}></span> : null;
    })
);

Ripple.displayName = 'Ripple';
