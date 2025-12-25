export * from './InputGroup.context';
export * as InputGroup from './InputGroup.parts';
export * as InputGroupProps from './InputGroup.props';

// Named runtime exports to maximize tree-shaking
export { defaultAddonProps, InputGroupAddon } from './addon';
export { defaultRootProps, InputGroupRoot } from './root';
