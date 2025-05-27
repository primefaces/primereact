'use client';
import { withComponent } from '@primereact/core/component';
import { usePortal } from '@primereact/headless/portal';
import { styles } from '@primereact/styles/portal';
import { isFunction } from '@primeuix/utils/object';
import { createPortal } from 'react-dom';
import { defaultProps } from './Portal.props';

export const Portal = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const portal = usePortal(instance.inProps);

        return portal;
    },
    render: (instance) => {
        const { props, mountedState } = instance;
        const element = props.element || props.children;

        if (!element || !mountedState) {
            return null;
        }

        let appendTo = props.appendTo;

        if (isFunction(appendTo)) {
            appendTo = appendTo() as string | HTMLElement | null;
        }

        if (appendTo === 'self') {
            return element;
        }

        const container = !appendTo ? document.body : typeof appendTo === 'string' ? document.querySelector(appendTo) || document.body : appendTo;

        return createPortal(element, container);
    }
});
