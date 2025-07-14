'use client';
import { usePortal } from '@primereact/headless/portal';
import { PortalProps } from '@primereact/types/shared/portal';
import { resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { createPortal } from 'react-dom';
import { defaultProps } from './Portal.props';

export const Portal = withComponent({
    name: 'Portal',
    defaultProps,
    setup(instance) {
        const portal = usePortal(instance.inProps);

        return portal;
    },
    render(instance) {
        const { props, mountedState } = instance;
        const element = props.element || (props.children as React.ReactNode);

        if (!element || !mountedState) {
            return null;
        }

        const appendTo = resolve(props.appendTo, instance) as PortalProps['appendTo'];

        if (appendTo === 'self') {
            return element;
        }

        const container = !appendTo ? document.body : typeof appendTo === 'string' ? document.querySelector(appendTo) || document.body : appendTo;

        return createPortal(element, container);
    }
});
