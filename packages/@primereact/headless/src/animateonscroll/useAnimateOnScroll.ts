import { withHeadless } from '@primereact/core/headless';
import { useIntersectionObserver } from '@primereact/hooks/use-intersection-observer';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { addClass, removeClass } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useAnimateOnScroll.props';

export const useAnimateOnScroll = withHeadless({
    name: 'useAnimateOnScroll',
    defaultProps,
    setup({ props, elementRef }) {
        const { enterClassName, leaveClassName, once, ...rest } = props;
        const isObserverActiveRef = React.useRef(false);
        const animationEndListener = React.useRef<(() => void) | null>(null);
        const animationState = React.useRef<'enter' | 'leave' | undefined>(undefined);
        const { observe, unobserve } = useIntersectionObserver({
            ...rest,
            onIntersect: ([entry]) => {
                if (entry.isIntersecting) {
                    enter();
                } else {
                    leave();
                }

                isObserverActiveRef.current = true;
            }
        });

        const { observe: observeReset, unobserve: unobserveReset } = useIntersectionObserver({
            threshold: 0,
            onIntersect: ([entry]) => {
                const el = elementRef.current;

                if (!el) return;

                if (entry?.boundingClientRect.top > 0 && !entry.isIntersecting) {
                    el.style.opacity = enterClassName ? '0' : '';

                    if (enterClassName) {
                        removeClass(el, enterClassName);
                    }

                    if (leaveClassName) {
                        removeClass(el, leaveClassName);
                    }

                    unobserveReset(el);
                    el.removeAttribute('data-pd-animateonscroll-state');
                    animationState.current = undefined;
                }
            }
        });
        const unbindIntersectionObserver = React.useCallback(() => {
            const el = elementRef.current;

            if (el) {
                unobserve(el);
                unobserveReset(el);
                isObserverActiveRef.current = false;
            }
        }, [unobserve, unobserveReset, elementRef]);

        const enter = React.useCallback(() => {
            const el = elementRef.current;

            if (!el || animationState.current !== undefined) return;

            if (animationState.current === 'enter') return;

            el.style.opacity = '';

            if (enterClassName) {
                if (leaveClassName) {
                    removeClass(el, leaveClassName);
                }

                addClass(el, enterClassName ?? '');
                el.setAttribute('data-pd-animateonscroll-state', 'enter');
                animationState.current = 'enter';

                bindAnimationEvents();

                if (once) {
                    setTimeout(() => {
                        unbindIntersectionObserver();
                    }, 0);
                }
            }
        }, [animationState, enterClassName, leaveClassName, once, unbindIntersectionObserver]);

        const leave = React.useCallback(() => {
            const el = elementRef.current;

            if (!el || animationState.current !== undefined) return;

            if (animationState.current === 'leave') return;

            if (leaveClassName) {
                if (enterClassName) {
                    removeClass(el, enterClassName);
                }

                addClass(el, leaveClassName ?? '');
                bindAnimationEvents();
                animationState.current = 'leave';
                el.setAttribute('data-pd-animateonscroll-state', 'leave');
            } else {
                el.style.opacity = '0';
            }
        }, [animationState, enterClassName, leaveClassName]);

        const bindAnimationEvents = React.useCallback(() => {
            const el = elementRef.current;

            if (!el) return;

            if (!animationEndListener.current) {
                animationEndListener.current = () => {
                    if (el) {
                        if (enterClassName) {
                            removeClass(el, enterClassName);
                        }

                        if (leaveClassName) {
                            removeClass(el, leaveClassName);
                        }

                        if (!once) {
                            observeReset(el);
                        }

                        unbindAnimationEvents();

                        if (animationState.current === 'leave') {
                            el.style.opacity = '0';
                        }

                        if (animationState.current === 'enter') {
                            el.style.opacity = '';
                        }

                        el.removeAttribute('data-pd-animateonscroll-state');
                        animationState.current = undefined;
                    }
                };

                el.addEventListener('animationend', animationEndListener.current);
                el.addEventListener('transitionend', animationEndListener.current);
            }
        }, [enterClassName, leaveClassName, once, observeReset]);

        const unbindAnimationEvents = React.useCallback(() => {
            const el = elementRef.current;

            if (!el) return;

            if (animationEndListener.current) {
                el.removeEventListener('animationend', animationEndListener.current);
                el.removeEventListener('transitionend', animationEndListener.current);
                animationEndListener.current = null;
            }
        }, []);

        // Effects
        React.useLayoutEffect(() => {
            if (elementRef.current && enterClassName) {
                elementRef.current.style.opacity = '0';
            }
        }, [elementRef, enterClassName]);

        useMountEffect(() => {
            if (elementRef.current) {
                elementRef.current.setAttribute('data-pd-animateonscroll', 'true');
                setTimeout(() => elementRef.current && observe(elementRef.current), 0);
            }
        });

        useUnmountEffect(() => {
            if (elementRef.current) {
                elementRef.current.removeAttribute('data-pd-animateonscroll');
                elementRef.current.removeAttribute('data-pd-animateonscroll-state');
                unobserve(elementRef.current);
                unobserveReset(elementRef.current);
                unbindAnimationEvents();
            }
        });

        const state = {};

        return {
            state
        };
    }
});
