import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

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
