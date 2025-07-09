import { withHeadless } from '@primereact/core/headless';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { mergeProps } from '@primeuix/utils';
import { focus, getFirstFocusableElement, getLastFocusableElement, isFocusableElement } from '@primeuix/utils/dom';
import { isNotEmpty } from '@primeuix/utils/object';
import * as React from 'react';
import { defaultProps } from './useFocusTrap.props';

export const useFocusTrap = withHeadless({
    name: 'useFocusTrap',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const { disabled, autoFocus, container } = props;
        const firstHiddenElementRef = React.useRef<HTMLSpanElement>(null);
        const lastHiddenElementRef = React.useRef<HTMLSpanElement>(null);
        const observerRef = React.useRef<MutationObserver | null>(null);
        const containerRef = React.useRef<HTMLElement | null>(null);
        const state = {};

        React.useEffect(() => {
            containerRef.current = container || elementRef.current;
        }, [container, elementRef]);

        // methods
        const getComputedSelector = (selector?: string) => `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ''}`;

        const handleFirstHiddenFocus = (event: React.FocusEvent<HTMLSpanElement>) => {
            const containerElement = containerRef.current;

            const relatedTarget = event.relatedTarget as HTMLElement | null;
            const lastHiddenElement = lastHiddenElementRef.current;

            if (!containerElement || !lastHiddenElement) return;

            const fallback = relatedTarget === lastHiddenElement || !containerElement?.contains(relatedTarget) ? getFirstFocusableElement(containerElement, getComputedSelector()) : lastHiddenElement;

            if (fallback) {
                focus(fallback as HTMLElement);
            }
        };

        const handleLastHiddenFocus = (event: React.FocusEvent<HTMLSpanElement>) => {
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

            containerElement.setAttribute('data-p-focus-trap', 'true');
            observerRef.current = new MutationObserver((mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList' && !containerElement.contains(document.activeElement)) {
                        const findNextFocusableElement = (_el: Node | null): HTMLElement | null => {
                            if (!_el || !('nodeType' in _el)) return null;

                            const focusableElement = isFocusableElement(_el as HTMLElement)
                                ? isFocusableElement(_el as HTMLElement, getComputedSelector(''))
                                    ? (_el as HTMLElement)
                                    : getFirstFocusableElement(containerElement, getComputedSelector(''))
                                : getFirstFocusableElement(_el as HTMLElement);

                            return isNotEmpty(focusableElement) ? (focusableElement as HTMLElement) : _el.nextSibling ? findNextFocusableElement(_el.nextSibling) : null;
                        };

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

            containerElement.removeAttribute('data-p-focus-trap');

            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };

        const createHiddenElements = (): [React.ReactElement | null, React.ReactElement | null] => {
            const hiddenElementProps = {
                className: 'p-hidden-accessible p-hidden-focusable',
                tabIndex: 0,
                role: 'presentation',
                'aria-hidden': true,
                'data-p-hidden-accessible': true,
                'data-p-hidden-focusable': true
            };

            const hiddenElements: [React.ReactElement | null, React.ReactElement | null] = [
                <span
                    {...mergeProps({
                        ref: firstHiddenElementRef,
                        onFocus: handleFirstHiddenFocus,
                        ...hiddenElementProps
                    })}
                />,
                <span
                    {...mergeProps({
                        ref: lastHiddenElementRef,
                        onFocus: handleLastHiddenFocus,
                        ...hiddenElementProps
                    })}
                />
            ];

            return hiddenElements;
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
            hiddenElements: !disabled ? createHiddenElements() : ([null, null] as [null, null])
        };
    }
});
