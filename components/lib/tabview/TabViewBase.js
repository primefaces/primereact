import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    navcontent: 'p-tabview-nav-content',
    nav: 'p-tabview-nav',
    inkbar: 'p-tabview-ink-bar',
    panelcontainer: ({ props }) => classNames('p-tabview-panels', props.panelContainerClassName),
    prevbutton: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
    nextbutton: 'p-tabview-nav-next p-tabview-nav-btn p-link',
    root: ({ props }) =>
        classNames('p-tabview p-component', {
            'p-tabview-scrollable': props.scrollable
        }),
    navcontainer: 'p-tabview-nav-container',
    tab: {
        header: ({ selected, disabled, headerClassName, _className }) => classNames('p-unselectable-text', { 'p-tabview-selected p-highlight': selected, 'p-disabled': disabled }, headerClassName, _className),
        headertitle: 'p-tabview-title',
        headeraction: 'p-tabview-nav-link',
        closeIcon: 'p-tabview-close',
        content: ({ props, selected, getTabProp, tab, isSelected, shouldUseTab, index }) =>
            shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? classNames(getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'), 'p-tabview-panel', { 'p-hidden': !selected }) : undefined
    }
};

const inlineStyles = {
    tab: {
        header: ({ headerStyle, _style }) => ({ ...(headerStyle || {}), ...(_style || {}) }),
        content: ({ props, getTabProp, tab, isSelected, shouldUseTab, index }) =>
            shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? { ...(getTabProp(tab, 'contentStyle') || {}), ...(getTabProp(tab, 'style') || {}) } : undefined
    }
};

export const TabViewBase = ComponentBase.extend({
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
    css: {
        classes,
        inlineStyles
    }
});

export const TabPanelBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TabPanel',
        children: undefined,
        className: null,
        closable: false,
        closeIcon: null,
        contentClassName: null,
        contentStyle: null,
        disabled: false,
        header: null,
        headerClassName: null,
        headerStyle: null,
        headerTemplate: null,
        leftIcon: null,
        nextButton: null,
        prevButton: null,
        rightIcon: null,
        style: null,
        visible: true
    },
    getCProp: (tab, name) => ObjectUtils.getComponentProp(tab, name, TabPanelBase.defaultProps),
    getCProps: (tab) => ObjectUtils.getComponentProps(tab, TabPanelBase.defaultProps),
    getCOtherProps: (tab) => ObjectUtils.getComponentDiffProps(tab, TabPanelBase.defaultProps)
});
