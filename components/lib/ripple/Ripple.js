import React, { forwardRef, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { DomHandler } from '../utils/Utils';
import { useUpdateEffect, useMountEffect, useUnmountEffect } from '../hooks/Hooks';

export const Ripple = memo(forwardRef(() => {
    const inkRef = useRef(null);
    const targetRef = useRef(null);

    const getTarget = () => {
        return inkRef.current && inkRef.current.parentElement;
    }

    const bindEvents = () => {
        if (targetRef.current) {
            targetRef.current.addEventListener('mousedown', onMouseDown);
        }
    }

    const unbindEvents = () => {
        if (targetRef.current) {
            targetRef.current.removeEventListener('mousedown', onMouseDown);
        }
    }

    const onMouseDown = (event) => {
        if (!inkRef.current || getComputedStyle(inkRef.current, null).display === 'none') {
            return;
        }

        DomHandler.removeClass(inkRef.current, 'p-ink-active');
        if (!DomHandler.getHeight(inkRef.current) && !DomHandler.getWidth(inkRef.current)) {
            let d = Math.max(DomHandler.getOuterWidth(targetRef.current), DomHandler.getOuterHeight(targetRef.current));
            inkRef.current.style.height = d + 'px';
            inkRef.current.style.width = d + 'px';
        }

        const offset = DomHandler.getOffset(targetRef.current);
        const x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
        const y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;

        inkRef.current.style.top = y + 'px';
        inkRef.current.style.left = x + 'px';
        DomHandler.addClass(inkRef.current, 'p-ink-active');
    }

    const onAnimationEnd = (event) => {
        DomHandler.removeClass(event.currentTarget, 'p-ink-active');
    }

    useMountEffect(() => {
        if (inkRef.current) {
            targetRef.current = getTarget();
            bindEvents();
        }
    });

    useUpdateEffect(() => {
        if (inkRef.current && !targetRef.current) {
            targetRef.current = getTarget();
            bindEvents();
        }
    });

    useUnmountEffect(() => {
        if (inkRef.current) {
            targetRef.current = null;
            unbindEvents();
        }
    });

    return PrimeReact.ripple ? (<span ref={inkRef} className="p-ink" onAnimationEnd={onAnimationEnd}></span>) : null;
}));

Ripple.defaultProps = {
    __TYPE: 'Ripple'
}

Ripple.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string
}
