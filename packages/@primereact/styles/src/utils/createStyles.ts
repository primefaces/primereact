import { styles } from '@primereact/styles/base';
import type { ComponentInstance } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';

export const createStyles = <I extends ComponentInstance>(options: StylesOptions<I> = {}) => {
    const { name, css, style, classes, inlineStyles = {} } = options;

    return {
        name,
        css,
        style,
        classes,
        inlineStyles,
        baseStyles: styles
    };
};
