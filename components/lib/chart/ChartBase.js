import { ObjectUtils } from '../utils/Utils';

export const ChartBase = {
    defaultProps: {
        __TYPE: 'Chart',
        id: null,
        type: null,
        data: null,
        options: null,
        plugins: null,
        width: null,
        height: null,
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ChartBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ChartBase.defaultProps)
};
