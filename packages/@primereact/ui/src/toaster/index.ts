export * as Toaster from './UIToaster.parts';

// Named runtime exports to maximize tree-shaking
export { defaultPortalProps, defaultRegionProps, defaultRootProps } from 'primereact/toaster';
export { uitoast as toast, UIToasterRoot as ToasterRoot } from './root';
