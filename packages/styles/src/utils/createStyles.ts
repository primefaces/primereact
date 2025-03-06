import { styles } from '@primereact/styles/base';

export const createStyles = ({ name, css, style, classes = {}, inlineStyles = {} } = {}) => {
    return {
        name,
        css,
        style,
        classes,
        inlineStyles,
        baseStyles: styles
    };
};
