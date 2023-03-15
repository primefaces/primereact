import { ObjectUtils } from '../utils/Utils';

export const ProgressSpinnerBase = {
    defaultProps: {
        __TYPE: 'ProgressSpinner',
        id: null,
        style: null,
        className: null,
        strokeWidth: '2',
        fill: 'none',
        animationDuration: '2s',
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ProgressSpinnerBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ProgressSpinnerBase.defaultProps)
};
