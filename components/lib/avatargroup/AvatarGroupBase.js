import { ComponentBase } from '../componentbase/ComponentBase';

export const AvatarGroupBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'AvatarGroup',
        style: null,
        className: null,
        children: undefined
    }
});
