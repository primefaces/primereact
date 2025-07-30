import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useTextarea.props';

export const useTextarea = withHeadless({
    name: 'useTextarea',
    defaultProps,
    setup({ props, elementRef }) {
        const resize = () => {
            if (!elementRef.current || !elementRef.current.offsetParent) return;

            elementRef.current.style.height = 'auto';
            elementRef.current.style.height = elementRef.current.scrollHeight + 'px';

            if (parseFloat(elementRef.current.style.height) >= parseFloat(elementRef.current.style.maxHeight)) {
                elementRef.current.style.overflowY = 'scroll';
                elementRef.current.style.height = elementRef.current.style.maxHeight;
            } else {
                elementRef.current.style.overflow = 'hidden';
            }
        };

        const onInput = () => {
            if (props.autoResize) {
                resize();
            }
        };

        return {
            onInput
        };
    }
});
