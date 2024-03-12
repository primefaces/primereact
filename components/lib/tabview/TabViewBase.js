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
        classNames(
            'p-tabview p-component',
            {
                'p-tabview-scrollable': props.scrollable
            },
            props.className
        ),
    navcontainer: 'p-tabview-nav-container',
    tab: {
        header: ({ selected, disabled, headerClassName, _className }) => classNames('p-unselectable-text', { 'p-tabview-selected p-highlight': selected, 'p-disabled': disabled }, headerClassName, _className),
        headertitle: 'p-tabview-title',
        headeraction: 'p-tabview-nav-link',
        content: ({ props, selected, getTabProp, tab, isSelected, shouldUseTab, index }) =>
            shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? classNames(getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'), 'p-tabview-panel', { 'p-hidden': !selected }) : undefined
    }
};

const styles = `
@layer primereact {
    .p-tabview-nav-container {
        position: relative;
    }
    
    .p-tabview-scrollable .p-tabview-nav-container {
        overflow: hidden;
    }
    
    .p-tabview-nav-content {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
        position: relative;
    }
    
    .p-tabview-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
    }
    
    .p-tabview-nav-link {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }
    
    .p-tabview-ink-bar {
        display: none;
        z-index: 1;
    }
    
    .p-tabview-nav-link:focus {
        z-index: 1;
    }
    
    .p-tabview-close {
        z-index: 1;
    }
    
    .p-tabview-title {
        line-height: 1;
        white-space: nowrap;
    }
    
    .p-tabview-nav-btn {
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tabview-nav-prev {
        left: 0;
    }
    
    .p-tabview-nav-next {
        right: 0;
    }
    
    .p-tabview-nav-content::-webkit-scrollbar {
        display: none;
    }
}
`;

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
        styles,
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
