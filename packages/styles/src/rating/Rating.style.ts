import { createStyles } from '@primereact/styles/utils';
import type { RatingInstance } from '@primereact/types/shared/rating';
import { style } from '@primeuix/styles/rating';

export const styles = createStyles<RatingInstance>({
    name: 'rating',
    style,
    classes: {
        root: ({ props }) => [
            'p-rating',
            {
                'p-readonly': props.readOnly,
                'p-disabled': props.disabled
            }
        ],
        option: ({ instance, context }) => [
            'p-rating-option',
            {
                'p-rating-option-active': Number(context.value) <= Number(instance.state.value),
                'p-focus-visible': Number(context.value) === Number(instance.state.focusedOptionIndex) && instance.state.isFocusVisibleItem
            }
        ],
        onIcon: ({ instance }) => [
            'p-rating-icon p-rating-on-icon',
            {
                'p-invalid': instance.props.invalid
            }
        ],
        offIcon: ({ instance }) => [
            'p-rating-icon p-rating-off-icon',
            {
                'p-invalid': instance.props.invalid
            }
        ]
    }
});
