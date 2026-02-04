import { withHeadless } from '@primereact/core/headless';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { focus, getFirstFocusableElement, getLastFocusableElement, isFocusableElement } from '@primeuix/utils/dom';
import { isNotEmpty } from '@primeuix/utils/object';
import * as React from 'react';
import { defaultProps } from './useFocusTrap.props';

export const useFocusTrap = withHeadless({
    name: 'useFocusTrap',
    defaultProps,
    setup: ({ props }) => {
        const { disabled, autoFocus } = props;
        const firstHiddenElementRef = React.useRef<HTMLSpanElement>(null);
        const lastHiddenElementRef = React.useRef<HTMLSpanElement>(null);
        const observerRef = React.useRef<MutationObserver | null>(null);
        const containerRef = React.useRef<HTMLElement | null>(null);
        const state = {};

        // methods
        const getComputedSelector = (selector?: string) => `:not([data-focus-trap-hidden=""])${selector ?? ''}`;

        const onFirstHiddenFocus = (event: React.FocusEvent<HTMLSpanElement>) => {
            const containerElement = containerRef.current;

            const relatedTarget = event.relatedTarget as HTMLElement | null;
            const lastHiddenElement = lastHiddenElementRef.current;

            if (!containerElement || !lastHiddenElement) return;

            const fallback = relatedTarget === lastHiddenElement || !containerElement?.contains(relatedTarget) ? getFirstFocusableElement(containerElement, getComputedSelector()) : lastHiddenElement;

            if (fallback) {
                focus(fallback as HTMLElement);
            }
        };

        const onLastHiddenFocus = (event: React.FocusEvent<HTMLSpanElement>) => {
            const containerElement = containerRef.current;

            const relatedTarget = event.relatedTarget as HTMLElement | null;
            const firstHiddenElement = firstHiddenElementRef.current;

            if (!containerElement || !firstHiddenElement) return;

            const fallback = relatedTarget === firstHiddenElement || !containerElement?.contains(relatedTarget) ? getLastFocusableElement(containerElement, getComputedSelector()) : firstHiddenElement;

            if (fallback) {
                focus(fallback as HTMLElement);
            }
        };

        const autoElementFocus = React.useCallback(() => {
            if (!autoFocus) return;

            const containerElement = containerRef.current;

            if (!containerElement) return;

            let focusableElement = getFirstFocusableElement(containerElement, `[autofocus]${getComputedSelector()}`);

            if (!focusableElement) {
                focusableElement = getFirstFocusableElement(containerElement, getComputedSelector());
            }

            if (focusableElement) {
                focus(focusableElement as HTMLElement);
            }
        }, [autoFocus, containerRef]);

        const bind = React.useCallback(() => {
            const containerElement = containerRef.current;

            if (!containerElement || disabled || !(containerElement instanceof Element)) return;

            containerElement.setAttribute('data-focus-trap', '');
            observerRef.current = new MutationObserver((mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList' && !containerElement.contains(document.activeElement)) {
                        function findNextFocusableElement(_el: Node | null): HTMLElement | null {
                            if (!_el || !('nodeType' in _el)) return null;

                            if (!(_el instanceof Element)) {
                                return _el.nextSibling ? findNextFocusableElement(_el.nextSibling) : null;
                            }

                            let focusableElement: HTMLElement | null = null;

                            if (isFocusableElement(_el)) {
                                if (isFocusableElement(_el, getComputedSelector(''))) {
                                    focusableElement = _el as HTMLElement;
                                } else {
                                    focusableElement = getFirstFocusableElement(containerElement!, getComputedSelector('')) as HTMLElement | null;
                                }
                            } else {
                                focusableElement = getFirstFocusableElement(_el) as HTMLElement | null;
                            }

                            if (isNotEmpty(focusableElement)) {
                                return focusableElement;
                            } else {
                                if (_el.nextSibling) {
                                    return findNextFocusableElement(_el.nextSibling);
                                } else {
                                    return null;
                                }
                            }
                        }

                        const nextElement = findNextFocusableElement(mutation.nextSibling);

                        if (nextElement) {
                            focus(nextElement);
                        }
                    }
                }
            });

            observerRef.current.observe(containerElement, { childList: true });
        }, [disabled, containerRef]);

        const unbind = () => {
            const containerElement = containerRef.current;

            if (!containerElement) return;

            containerElement.removeAttribute('data-focus-trap');

            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };

        // effects

        React.useEffect(() => {
            const containerElement = containerRef.current;

            if (!containerElement) return;

            if (!disabled) {
                bind();
                autoElementFocus();
            }
        }, [disabled, bind, autoElementFocus, containerRef]);

        useUnmountEffect(() => {
            unbind();
        });

        return {
            state,
            containerRef,
            onFirstHiddenFocus,
            onLastHiddenFocus,
            firstHiddenElementRef,
            lastHiddenElementRef
        };
    }
});
