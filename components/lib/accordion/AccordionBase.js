import { ObjectUtils } from '../utils/Utils';

export const AccordionDefaultProps = {
    __TYPE: 'Accordion',
    id: null,
    activeIndex: null,
    className: null,
    style: null,
    multiple: false,
    expandIcon: 'pi pi-chevron-right',
    collapseIcon: 'pi pi-chevron-down',
    transitionOptions: null,
    onTabOpen: null,
    onTabClose: null,
    onTabChange: null
};

export const AccordionTabDefaultProps = {
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
    tabIndex: 0
};

export const getTabProp = (tab, name) => ObjectUtils.getProp(tab, name, AccordionTabDefaultProps);
