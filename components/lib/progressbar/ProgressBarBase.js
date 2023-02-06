import { ObjectUtils } from '../utils/Utils';

export const ProgressBarBase = {
    defaultProps: {
        __TYPE: 'ProgressBar',
        id: null,
        value: null,
        showValue: true,
        unit: '%',
        style: null,
        className: null,
        mode: 'determinate',
        displayValueTemplate: null,
        color: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ProgressBarBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ProgressBarBase.defaultProps)
};
