import type { StyleType } from '@primeuix/styled';
import type { CSSProperties } from 'react';

export type * from '@primeuix/styled';

export declare type StyleKeyType<I, R> = string | ((instance: I) => R);

export declare type ClassesType<K, I> = Record<keyof K, StyleKeyType<I, string | unknown[]>>;

export declare type InlineStylesType<K, I> = Record<keyof K, StyleKeyType<I, CSSProperties>>;

export interface StylesOptions<K = Record<string, unknown>, I = unknown> {
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
    classes?: ClassesType<K, I> | undefined;
    /**
     * The inline styles of the styles
     */
    inlineStyles?: InlineStylesType<K, I> | undefined;
    /**
     * The base styles for all components.
     */
    baseStyles?: StylesOptions<unknown, unknown> | undefined;
}
