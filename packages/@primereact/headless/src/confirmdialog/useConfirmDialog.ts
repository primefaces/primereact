import { withHeadless } from '@primereact/core/headless';
import { useDialog } from '@primereact/headless/dialog';
import { defaultProps } from './useConfirmDialog.props';

export const useConfirmDialog = withHeadless({
    name: 'useConfirmDialog',
    defaultProps,
    setup({ props }) {
        const dialog = useDialog({
            open: props.open,
            defaultOpen: props.defaultOpen,
            draggable: props.draggable,
            keepInViewport: props.keepInViewport,
            modal: props.modal,
            dismissableMask: props.dismissableMask,
            closeOnEscape: props.closeOnEscape,
            blockScroll: props.blockScroll,
            baseZIndex: props.baseZIndex,
            autoZIndex: props.autoZIndex,
            appendTo: props.appendTo,
            onOpenChange: props.onOpenChange
        });

        return {
            state: dialog.state,
            dialog,
            // refs from dialog
            maskRef: dialog.maskRef,
            rootRef: dialog.rootRef,
            // methods from dialog
            close: dialog.close,
            onOpenStateChange: dialog.onOpenStateChange
        };
    }
});
