export * as InputOtp from './UIInputOtp.parts';

// Named runtime exports to maximize tree-shaking
export { defaultRootProps, defaultTextProps, InputOtpProps, InputOtpProvider, useInputOtpContext } from 'primereact/inputotp';
export { UIInputOtpRoot as InputOtpRoot } from './root';
export { UIInputOtpText as InputOtpText } from './text';
