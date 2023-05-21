import { ComponentBase } from '../componentbase/ComponentBase';

export const MenubarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Menubar',
        id: null,
        model: null,
        style: null,
        className: null,
        start: null,
        submenuIcon: null,
        menuIcon: null,
        end: null,
        children: undefined
    }
});
