import type { StylesOptions } from '@primereact/types/styles';
import { $dt } from '@primeuix/styled';

const css = /*css*/ `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    font-size: dt('icon.size');
    width: dt('icon.size');
    height: dt('icon.size');
    transform: rotate(dt('icon.rotate'));
    flex-shrink: 0;
}

.p-icon-flip-horizontal {
    transform: scaleX(-1);
}

.p-icon-flip-vertical {
    transform: scaleY(-1);
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;

export const styles = {
    name: 'icon',
    css,
    classes: {
        root: ({ props }) => [
            'p-icon',
            {
                'p-icon-spin': props.spin,
                'p-icon-flip-horizontal': props.flip === 'horizontal',
                'p-icon-flip-vertical': props.flip === 'vertical'
            }
        ]
    },
    inlineStyles: {
        root: ({ props }) => ({
            ...(props.size ? { [$dt('icon.size').name]: props.size } : undefined),
            ...(props.rotate ? { [$dt('icon.rotate').name]: `${props.rotate}deg` } : undefined)
        })
    }
} as StylesOptions;
