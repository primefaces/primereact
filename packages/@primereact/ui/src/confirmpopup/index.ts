export * as ConfirmPopup from './UIConfirmPopup.parts';

// Named runtime exports to maximize tree-shaking
export {
    ConfirmPopupAccept,
    ConfirmPopupContent,
    ConfirmPopupFooter,
    ConfirmPopupIcon,
    ConfirmPopupMessage,
    ConfirmPopupPortal,
    ConfirmPopupProps,
    ConfirmPopupProvider,
    ConfirmPopupReject,
    ConfirmPopupTrigger,
    defaultAcceptProps,
    defaultContentProps,
    defaultFooterProps,
    defaultIconProps,
    defaultMessageProps,
    defaultPortalProps,
    defaultRejectProps,
    defaultRootProps,
    defaultTriggerProps,
    useConfirmPopupContext
} from 'primereact/confirmpopup';
export { UIConfirmPopupRoot as ConfirmPopupRoot } from './root';
