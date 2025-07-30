import { createStyles } from '@primereact/styles/utils';
import type { RatingInstance } from '@primereact/types/shared/rating';

const customStyle = `
        .p-rating {
            position: relative;
            display: flex;
            align-items: center;
            gap: dt('rating.gap');
        }

        .p-rating-option {
            position: relative; /* new added */
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            outline-color: transparent;
            border-radius: 50%;
            transition:
                background dt('rating.transition.duration'),
                color dt('rating.transition.duration'),
                border-color dt('rating.transition.duration'),
                outline-color dt('rating.transition.duration'),
                box-shadow dt('rating.transition.duration'),
                transform 0.1s ease-in-out; /* new added */;
        }

        /* new added */
        .p-rating-option:hover{
            transform: scale(1.2);
        }
        /* new added */
        .p-rating-option:active{
            transform: scale(0.95);
        }

        .p-rating-option.p-focus-visible {
            box-shadow: dt('rating.focus.ring.shadow');
            outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');
            outline-offset: dt('rating.focus.ring.offset');
        }

        /* not used */
        .p-rating-icon {
            color: dt('rating.icon.color');
            transition:
                background dt('rating.transition.duration'),
                color dt('rating.transition.duration'),
                border-color dt('rating.transition.duration'),
                outline-color dt('rating.transition.duration'),
                box-shadow dt('rating.transition.duration');
            font-size: dt('rating.icon.size');
            width: dt('rating.icon.size');
            height: dt('rating.icon.size');
        }

        /* not used */
        .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
            color: dt('rating.icon.hover.color');
        }   

        /* not used */
        .p-rating-option-active .p-rating-icon {
            color: dt('rating.icon.active.color');
        }

        /* not used */
        .p-rating-icon.p-invalid {
            /* @todo */
            stroke: dt('rating.invalid.icon.color');
        }

        /* new added - from now */
        .p-rating.p-readonly .p-rating-option {
            cursor: not-allowed;
        }

        .p-rating-option-star{
            width: dt('rating.icon.size');
            height: dt('rating.icon.size');
            color: dt('rating.icon.hover.color');
        }
        .p-rating-option-star.p-invalid{
            stroke: dt('rating.invalid.icon.color');
        }

        .p-rating-option-on{
            display: inline-flex;
            position: absolute;
            width: 50%;
            height: 100%;
        }
        .p-rating-option-on-element{
            pointer-events: none;
            display: inline-flex;
        }
        .p-rating-option-on-element-filled{
            opacity:1;
        }
        .p-rating-option-on-element-half{
            clip-path: inset(0 50% 0 0);
        }
        .p-rating-option-on-element-empty{
            opacity:0;
        }

        .p-rating-option-off{
            display: inline-flex;
        }
        .p-rating-option-off-element{
            pointer-events: none;
            display: inline-flex;
        }
        .p-rating-option-off-element-filled{
            opacity:0;
        }
        .p-rating-option-off-element-half{
            clip-path: inset(0 0 0 50%);
        }
`;

export const styles = createStyles<RatingInstance>({
    name: 'rating',
    style: customStyle,
    classes: {
        root: ({ props }) => [
            'p-rating',
            {
                'p-readonly': props.readOnly,
                'p-disabled': props.disabled
            }
        ],
        option: ({ context }) => [
            'p-rating-option',
            {
                'p-rating-option-active': context.active,
                'p-focus-visible': context.focused
            }
        ],
        optionOn: 'p-rating-option-on',
        optionOnElement: ({ context }) => ['p-rating-option-on-element', `p-rating-option-on-element-${context.state}`],
        optionOff: 'p-rating-option-off',
        optionOffElement: ({ context }) => ['p-rating-option-off-element', `p-rating-option-off-element-${context.state}`],
        optionStar: ({ props }) => [
            'p-rating-option-star',
            {
                'p-invalid': props.invalid
            }
        ]
        // onIcon: ({ instance }) => [
        //     'p-rating-icon p-rating-on-icon',
        //     {
        //         'p-invalid': instance.props.invalid
        //     }
        // ],
        // offIcon: ({ instance }) => [
        //     'p-rating-icon p-rating-off-icon',
        //     {
        //         'p-invalid': instance.props.invalid
        //     }
        // ]
    }
});
