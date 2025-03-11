import { styles } from '@primereact/styles/base';
import type { StylesOptions } from '@primereact/types/styles';

export const createStyles = <K, I>(options: StylesOptions<K, I> = {}) => {
    const { name, css, style, classes = {}, inlineStyles = {} } = options;

    return {
        name,
        css,
        style,
        classes,
        inlineStyles,
        baseStyles: styles
    };
};
