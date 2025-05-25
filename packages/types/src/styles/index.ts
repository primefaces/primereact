import type { StyleType } from '@primeuix/styled';
import type { CSSProperties } from 'react';
import { ComponentInstance } from '../core';

export type * from '@primeuix/styled';

export type StyleKeyTypeOptions<I extends ComponentInstance = ComponentInstance> = {
    instance: I;
    props: I['props'];
    attrs: I['attrs'];
    state: I['state'];
    context: Record<string, unknown>;
};

export type StyleKeyType<I extends ComponentInstance, Return> = string | undefined | Return | ((instance: StyleKeyTypeOptions<I>) => string | undefined | Return);

export type ClassesType<I extends ComponentInstance> = Record<string, StyleKeyType<I, (string | object)[]>>;

export type InlineStylesType<I extends ComponentInstance> = Record<string, StyleKeyType<I, CSSProperties>>;

export interface StylesOptions<I extends ComponentInstance = ComponentInstance> {
    /**
     * The name of the styles.
     */
    name?: string | undefined;
    /**
     * The css of the styles.
     */
    css?: StyleType | undefined;
    /**
     * The style applied directly.
     */
    style?: StyleType | undefined;
    /**
     * The classes of the styles
     */
    classes?: ClassesType<I> | undefined;
    /**
     * The inline styles of the styles
     */
    inlineStyles?: InlineStylesType<I> | undefined;
    /**
     * The base styles for all components.
     */
    baseStyles?: StylesOptions<I> | undefined;
}
