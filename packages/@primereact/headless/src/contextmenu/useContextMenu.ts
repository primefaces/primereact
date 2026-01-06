import { withHeadless } from '@primereact/core/headless';
// import { useEventListener } from '@primereact/hooks';
// import * as React from 'react';
// import { useMenu } from '../menu/useMenu';
import { defaultProps } from './useContextMenu.props';

export const useContextMenu = withHeadless({
    name: 'useContextMenu',
    defaultProps
    // setup(instance) {
    //     const { props } = instance;

    //     // Use the menu hook with composite set to false for ContextMenu
    //     const menu = useMenu({
    //         ...instance,
    //         inProps: {
    //             ...props,
    //             composite: false
    //         }
    //     });

    //     const onGlobalContextMenu = (event: React.MouseEvent) => {
    //         menu.onTriggerClick(event);
    //     };

    //     const [bindGlobalListener, unbindGlobalListener] = useEventListener({
    //         target: 'document',
    //         type: 'contextmenu',
    //         listener: (event) => onGlobalContextMenu(event as unknown as React.MouseEvent)
    //     });

    //     React.useEffect(() => {
    //         if (props.global) {
    //             bindGlobalListener();
    //         } else {
    //             unbindGlobalListener();
    //         }

    //         return () => {
    //             unbindGlobalListener();
    //         };
    //     }, [props.global]);

    //     return {
    //         ...menu
    //     };
    // }
});
