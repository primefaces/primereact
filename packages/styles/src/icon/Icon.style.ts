import { createStyles } from '@primereact/styles/utils';
import { style } from '@primeuix/styles/base';

const css = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
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

export const classes = {
    root: ({ props }) => [
        'p-icon',
        {
            'p-icon-spin': props.spin
        }
    ]
};

export const styles = createStyles({
    name: 'icon',
    css,
    style,
    classes
});
