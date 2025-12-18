/**
 *
 * CommandMenuItem is a component that displays an item in a command menu.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenuitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CommandMenuInstance } from './CommandMenu.types';

/**
 * Defines passthrough(pt) options type in CommandMenuItem component.
 */
export type CommandMenuItemPassThroughType<E> = PassThroughType<CommandMenuItemInstance, E>;

/**
 * Defines passthrough(pt) options of CommandPaletteItem component.
 */
export interface CommandMenuItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CommandMenuItem component.
 */
export interface CommandMenuItemProps extends BaseComponentProps<CommandMenuItemInstance, unknown, CommandMenuItemPassThrough> {
    /**
     * Value of the item.
     */
    value?: string | undefined;
    /**
     * Keywords of the item.
     */
    keywords?: string[] | undefined;
    /**
     * When present, it specifies that the item is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback function that is called when the item is selected.
     */
    onSelect?: (value?: string) => void;
}

/**
 * Defines valid state in CommandMenuItem component.
 */
export interface CommandMenuItemState {}

/**
 * Defines the methods and properties exposed by CommandMenuItem component.
 */
export interface CommandMenuItemExposes {
    /**
     * The CommandMenu component instance.
     */
    commandmenu: CommandMenuInstance | undefined | null;
}

/**
 * Instance of CommandMenuItem component.
 */
export type CommandMenuItemInstance = ComponentInstance<CommandMenuItemProps, CommandMenuItemState, CommandMenuItemExposes>;
