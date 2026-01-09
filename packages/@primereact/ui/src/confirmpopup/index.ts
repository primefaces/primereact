export * as ConfirmPopup from './UIConfirmPopup.parts';

// Named runtime exports to maximize tree-shaking
export {
    ConfirmPopupContent,
    ConfirmPopupFooter,
    ConfirmPopupIcon,
    ConfirmPopupMessage,
    ConfirmPopupPortal,
    ConfirmPopupProps,
    ConfirmPopupProvider,
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
export { UIConfirmPopupAccept as ConfirmPopupAccept } from './accept';
export { UIConfirmPopupReject as ConfirmPopupReject } from './reject';
export { UIConfirmPopupRoot as ConfirmPopupRoot } from './root';
export { UIConfirmPopupTrigger as ConfirmPopupTrigger } from './trigger';
