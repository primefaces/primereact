import { ComponentBase } from '../componentbase/ComponentBase';

const classes = {
    root: 'p-avatar-group p-component'
};

const styles = `
@layer primereact {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }
    
    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`;

export const AvatarGroupBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'AvatarGroup',
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
