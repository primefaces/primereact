import * as React from 'react';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { DomHandler } from '../utils/Utils';
import { PrimeReactContext } from '../api/Api';
import PrimeReact from '../api/Api';

export const Ripple = React.memo(
    React.forwardRef(() => {
        const inkRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const context = React.useContext(PrimeReactContext);

        const getTarget = () => {
            return inkRef.current && inkRef.current.parentElement;
        };

        const bindEvents = () => {
            if (targetRef.current) {
                targetRef.current.addEventListener('mousedown', onMouseDown);
                DomHandler.isTouchDevice() && targetRef.current.addEventListener('touchstart', onTouchStart);
            }
        };

        const unbindEvents = () => {
            if (targetRef.current) {
                targetRef.current.removeEventListener('mousedown', onMouseDown);
                DomHandler.isTouchDevice() && targetRef.current.removeEventListener('touchstart', onTouchStart);
            }
        };

        const onTouchStart = (event) => {
            const offset = DomHandler.getOffset(targetRef.current);
            const offsetX = event.targetTouches[0].pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
            const offsetY = event.targetTouches[0].pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;

            activateRipple(offsetX, offsetY);
        };

        const onMouseDown = (event) => {
            if (DomHandler.isTouchDevice()) {
                // already started ripple with onTouchStart
                return;
            }

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

        return (context && context.ripple) || PrimeReact.ripple ? <span role="presentation" ref={inkRef} className="p-ink" onAnimationEnd={onAnimationEnd}></span> : null;
    })
);

Ripple.displayName = 'Ripple';
