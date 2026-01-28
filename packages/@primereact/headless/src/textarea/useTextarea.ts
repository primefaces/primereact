import { withHeadless } from '@primereact/core/headless';
import { isCssSupported } from '@primereact/core/utils';
import * as React from 'react';
import { defaultProps } from './useTextarea.props';

export const useTextarea = withHeadless({
    name: 'useTextarea',
    defaultProps,
    setup({ props }) {
        const isFieldSizingSupported = React.useMemo(() => isCssSupported('field-sizing', 'content'), []);

        const resize = React.useCallback(
            (element: HTMLTextAreaElement) => {
                if (!element || !element.offsetParent) return;

                if (isFieldSizingSupported) {
                    if (!element.style.minHeight) {
                        element.style.minHeight = element.offsetHeight + 'px';
                    }

                    if (!element.style.width) {
                        element.style.width = element.offsetWidth + 'px';
                    }

                    // Set field-sizing to content to enable automatic height adjustment
                    (element.style as unknown as { fieldSizing: string }).fieldSizing = 'content';
                } else {
                    // Fallback: JavaScript-based resize
                    const computedStyle = window.getComputedStyle(element);
                    const maxHeight = parseFloat(computedStyle.maxHeight) || Infinity;

                    element.style.height = 'auto';

                    const scrollHeight = element.scrollHeight;

                    if (scrollHeight >= maxHeight) {
                        element.style.overflowY = 'scroll';
                        element.style.height = maxHeight + 'px';
                    } else {
                        element.style.overflowY = 'hidden';
                        element.style.height = scrollHeight + 'px';
                    }
                }
            },
            [isFieldSizingSupported]
        );

        const onInput = React.useCallback(
            (event: React.FormEvent<HTMLTextAreaElement>) => {
                if (props.autoResize) {
                    resize(event.currentTarget);
                }
            },
            [props.autoResize, resize]
        );

        return {
            onInput
        };
    }
});
