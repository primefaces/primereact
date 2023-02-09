import { ObjectUtils } from '../utils/Utils';

export const BreadCrumbBase = {
    defaultProps: {
        __TYPE: 'BreadCrumb',
        id: null,
        model: null,
        home: null,
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, BreadCrumbBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, BreadCrumbBase.defaultProps)
};
