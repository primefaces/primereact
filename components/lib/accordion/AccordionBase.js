import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames('p-accordion p-component', props.className),
    tab: {
        root: ({ selected }) =>
            classNames('p-accordion-tab', {
                'p-accordion-tab-active': selected
            }),
        content: 'p-accordion-content',
        header: ({ selected, getTabProp, tab }) =>
            classNames(
                'p-accordion-header',
                {
                    'p-highlight': selected,
                    'p-disabled': getTabProp(tab, 'disabled')
                },
                getTabProp(tab, 'headerClassName'),
                getTabProp(tab, 'className')
            ),
        headeraction: 'p-accordion-header-link',
        headericon: 'p-accordion-toggle-icon',
        headertitle: 'p-accordion-header-text',
        toggleablecontent: ({ getTabProp, tab }) => classNames('p-toggleable-content', getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'))
    }
};

const inlineStyles = {
    tab: {
        toggleablecontent: ({ getTabProp, tab }) => ({ ...(getTabProp(tab, 'style') || {}), ...(getTabProp(tab, 'contentStyle') || {}) }),
        header: ({ getTabProp, tab }) => ({ ...(getTabProp(tab, 'style') || {}), ...(getTabProp(tab, 'headerStyle') || {}) })
    }
};

const styles = `
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}

.p-accordion-header-link:focus {
    z-index: 1;
}

.p-accordion-header-text {
    line-height: 1;
}
`;

export const AccordionBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Accordion',
        id: null,
        activeIndex: null,
        className: null,
        style: null,
        multiple: false,
        expandIcon: null,
        collapseIcon: null,
        transitionOptions: null,
        onTabOpen: null,
        onTabClose: null,
        onTabChange: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});

export const AccordionTabBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'AccordionTab',
        className: null,
        contentClassName: null,
        contentStyle: null,
        disabled: false,
        header: null,
        headerClassName: null,
        headerStyle: null,
        headerTemplate: null,
        style: null,
        tabIndex: 0,
        children: undefined
    },
    getCProp: (tab, name) => ObjectUtils.getComponentProp(tab, name, AccordionTabBase.defaultProps),
    getCProps: (tab) => ObjectUtils.getComponentProps(tab, AccordionTabBase.defaultProps),
    getCOtherProps: (tab) => ObjectUtils.getComponentDiffProps(tab, AccordionTabBase.defaultProps)
});
