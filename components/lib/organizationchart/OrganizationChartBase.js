import { ObjectUtils } from '../utils/Utils';

export const OrganizationChartBase = {
    defaultProps: {
        __TYPE: 'OrganizationChart',
        id: null,
        value: null,
        style: null,
        className: null,
        selectionMode: null,
        selection: null,
        nodeTemplate: null,
        onSelectionChange: null,
        onNodeSelect: null,
        onNodeUnselect: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, OrganizationChartBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, OrganizationChartBase.defaultProps)
};
