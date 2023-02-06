import { ObjectUtils } from '../utils/Utils';

export const TimelineBase = {
    defaultProps: {
        __TYPE: 'Timeline',
        align: 'left',
        className: null,
        content: null,
        dataKey: null,
        layout: 'vertical',
        marker: null,
        opposite: null,
        value: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TimelineBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TimelineBase.defaultProps)
};
