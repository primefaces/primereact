import { ObjectUtils } from '../utils/Utils';

export const TabViewBase = {
    defaultProps: {
        __TYPE: 'TabView',
        id: null,
        activeIndex: 0,
        className: null,
        onBeforeTabChange: null,
        onBeforeTabClose: null,
        onTabChange: null,
        onTabClose: null,
        panelContainerClassName: null,
        panelContainerStyle: null,
        renderActiveOnly: true,
        scrollable: false,
        style: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TabViewBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TabViewBase.defaultProps)
};

export const TabPanelBase = {
    defaultProps: {
        __TYPE: 'TabPanel',
        className: null,
        closable: false,
        contentClassName: null,
        contentStyle: null,
        disabled: false,
        header: null,
        headerClassName: null,
        headerStyle: null,
        headerTemplate: null,
        leftIcon: null,
        rightIcon: null,
        style: null,
        children: undefined
    },
    getCProp: (tab, name) => ObjectUtils.getComponentProp(tab, name, TabPanelBase.defaultProps),
    getCProps: (tab) => ObjectUtils.getComponentProps(tab, TabPanelBase.defaultProps),
    getCOtherProps: (tab) => ObjectUtils.getComponentDiffProps(tab, TabPanelBase.defaultProps)
};
