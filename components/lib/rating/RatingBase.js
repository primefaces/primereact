import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    onIcon: 'p-rating-icon',
    item: ({ active, value, isFocusVisibleItem, focusedOptionIndex }) => classNames('p-rating-item', { 'p-rating-item-active': active }, { 'p-focus': value === focusedOptionIndex && isFocusVisibleItem }),
    cancelIcon: 'p-rating-icon p-rating-cancel',
    cancelItem: 'p-rating-item p-rating-cancel-item',
    root: ({ props }) =>
        classNames(
            'p-rating',
            {
                'p-disabled': props.disabled,
                'p-readonly': props.readOnly
            },
            props.className
        )
};

const styles = `
@layer primereact {
    .p-rating {
        display: flex;
        align-items: center;
    }
    
    .p-rating-item {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }
    
    .p-rating.p-readonly .p-rating-item {
        cursor: default;
    }
}
`;

export const RatingBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Rating',
        id: null,
        value: null,
        disabled: false,
        readOnly: false,
        stars: 5,
        cancel: true,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onIcon: null,
        offIcon: null,
        cancelIcon: null,
        cancelIconProps: null,
        onIconProps: null,
        offIconProps: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
