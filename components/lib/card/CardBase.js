import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames('p-card p-component', props.className),
    header: 'p-card-header',
    title: 'p-card-title',
    subTitle: 'p-card-subtitle',
    content: 'p-card-content',
    footer: 'p-card-footer',
    body: 'p-card-body'
};

const styles = `
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`;

export const CardBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Card',
        id: null,
        header: null,
        footer: null,
        title: null,
        subTitle: null,
        style: null,
        className: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
