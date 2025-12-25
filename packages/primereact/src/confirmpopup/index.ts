export * from './ConfirmPopup.context';
export * as ConfirmPopup from './ConfirmPopup.parts';
export * as ConfirmPopupProps from './ConfirmPopup.props';

// Named runtime exports to maximize tree-shaking
export { ConfirmPopupAccept, defaultAcceptProps } from './accept';
export { ConfirmPopupContent, defaultContentProps } from './content';
export { ConfirmPopupFooter, defaultFooterProps } from './footer';
export { ConfirmPopupIcon, defaultIconProps } from './icon';
export { ConfirmPopupMessage, defaultMessageProps } from './message';
export { ConfirmPopupPortal, defaultPortalProps } from './portal';
export { ConfirmPopupReject, defaultRejectProps } from './reject';
export { ConfirmPopupRoot, defaultRootProps } from './root';
export { ConfirmPopupTrigger, defaultTriggerProps } from './trigger';
