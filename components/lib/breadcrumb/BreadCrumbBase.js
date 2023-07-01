import { ComponentBase } from '../componentbase/ComponentBase';

export const BreadCrumbBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'BreadCrumb',
        id: null,
        model: null,
        home: null,
        separatorIcon: null,
        style: null,
        className: null,
        children: undefined
    }
});
